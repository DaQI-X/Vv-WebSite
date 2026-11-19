// /try 在线转写引擎（#397 M1）：全程浏览器内 WASM 推理，音频不出本机。
// 模型资产由 Service Worker 拼块 + Cache Storage 供给（见 scripts/try-sw.js）；
// 解码参数与单线程配置来自 M0 spike 实测（RTF 0.27–0.38、复读=0 的那组）。
type TryStage = 'idle' | 'decode' | 'sw' | 'model' | 'run' | 'done' | 'error';
export interface TrySegment { start: number; end: number; text: string }

const MODEL_ID = 'onnx-community/whisper-base';

export const useTryAsr = () => {
  const stage = ref<TryStage>('idle');
  const errorKey = ref('');
  const errorDetail = ref('');
  const audioSec = ref(0);
  const runMs = ref(0);
  const liveChars = ref(0);
  const dlLoaded = ref(0);
  const dlTotal = ref(0);
  const segments = ref<TrySegment[]>([]);
  const isMobile = ref(false);
  // SSG 的 HTML 按桌面 UA 生成；UA 判定必须等 hydration 之后，否则真手机打开必报 mismatch
  if (import.meta.client) onMounted(() => { isMobile.value = /Android|iPhone|iPad|Mobi/i.test(navigator.userAgent); });
  const capSec = computed(() => (isMobile.value ? 60 : 180));
  const busy = computed(() => ['decode', 'sw', 'model', 'run'].includes(stage.value));

  let pipe: any = null;
  let cancelled = false;
  const dlByRel = new Map<string, number>();
  const onSwMessage = (e: MessageEvent) => {
    const d = e.data;
    if (d?.type !== 'vv-try-progress') return;
    dlByRel.set(d.rel, d.loaded);
    let sum = 0;
    for (const v of dlByRel.values()) sum += v;
    dlLoaded.value = sum;
  };

  const fail = (key: string, detail?: unknown) => {
    stage.value = 'error';
    errorKey.value = key;
    errorDetail.value = detail ? String((detail as Error)?.message || detail) : '';
  };

  async function ensureSw() {
    if (!('serviceWorker' in navigator)) throw new Error('serviceWorker unsupported');
    await navigator.serviceWorker.register('/try-sw.js', { scope: '/' });
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) {
      await new Promise<void>((res) => navigator.serviceWorker.addEventListener('controllerchange', () => res(), { once: true }));
    }
  }

  async function start(file: File, language: 'zh' | 'en') {
    cancelled = false;
    errorKey.value = '';
    errorDetail.value = '';
    segments.value = [];
    liveChars.value = 0;
    runMs.value = 0;
    dlByRel.clear();
    dlLoaded.value = 0;
    stage.value = 'decode';
    let pcm: Float32Array;
    try {
      const ab = await file.arrayBuffer();
      const ctx = new AudioContext({ sampleRate: 16000 });
      const buf = await ctx.decodeAudioData(ab);
      audioSec.value = buf.duration;
      pcm = buf.getChannelData(0);
      await ctx.close();
    } catch (e) {
      fail('try.errDecode', e);
      return;
    }
    if (audioSec.value > capSec.value) {
      fail('try.errLong');
      return;
    }
    stage.value = 'sw';
    try {
      await ensureSw();
    } catch (e) {
      fail('try.errSw', e);
      return;
    }
    stage.value = 'model';
    navigator.serviceWorker.addEventListener('message', onSwMessage);
    try {
      const manifest = await (await fetch('/try-models/manifest.json')).json();
      dlTotal.value = Object.values(manifest.files as Record<string, { size: number }>).reduce((a, f) => a + f.size, 0);
      const tf = await import('@huggingface/transformers');
      tf.env.remoteHost = `${location.origin}/try-models/hf`;
      tf.env.allowLocalModels = false;
      tf.env.backends.onnx.wasm.wasmPaths = `${location.origin}/try-models/ort/`;
      tf.env.backends.onnx.wasm.numThreads = 1;
      // proxy=true：WASM 进 ort 自带 worker。主线程推理会饿死所有宏任务（实测点击/定时器整段跑完才执行），
      // 取消按钮会形同虚设；worker 模式下 generate 每 token 一次 postMessage 往返，主线程让得出手。
      tf.env.backends.onnx.wasm.proxy = true;
      if (!pipe) pipe = await tf.pipeline('automatic-speech-recognition', MODEL_ID, { dtype: 'q8', device: 'wasm' });
      if (cancelled) {
        stage.value = 'idle';
        return;
      }
      stage.value = 'run';
      const t0 = performance.now();
      // streamer 回调里报真进度并响应取消（worker 模式下主线程空闲，取消点击能即时落到这里）
      const streamer = new tf.TextStreamer(pipe.tokenizer, {
        skip_prompt: true,
        callback_function: (text: string) => {
          liveChars.value += text.length;
          if (cancelled) throw new Error('VV_CANCEL');
        },
      });
      const out = await pipe(pcm, {
        language,
        task: 'transcribe',
        chunk_length_s: 30,
        stride_length_s: 5,
        no_repeat_ngram_size: 3,
        // 1.2 实测在 whisper-base wasm 上压掉整句甚至早停（中英、有无时间戳都受害）；防复读只靠 ngram
        repetition_penalty: 1.0,
        return_timestamps: true,
        streamer,
      });
      runMs.value = Math.round(performance.now() - t0);
      segments.value = toSegments(out, audioSec.value);
      stage.value = 'done';
    } catch (e) {
      if (String((e as Error)?.message || e).includes('VV_CANCEL')) stage.value = 'idle';
      else fail('try.errModel', e);
    } finally {
      navigator.serviceWorker.removeEventListener('message', onSwMessage);
    }
  }

  const cancel = () => {
    cancelled = true;
  };
  const reset = () => {
    stage.value = 'idle';
    errorKey.value = '';
    errorDetail.value = '';
    segments.value = [];
  };

  return { stage, busy, errorKey, errorDetail, audioSec, runMs, liveChars, dlLoaded, dlTotal, segments, capSec, isMobile, start, cancel, reset };
};

// whisper 的 chunk 时间戳在边界处可能缺 end（null）；用前一段 end / 音频总长兜底，
// 保证 SRT 的时间轴单调且不超过音频本身。
function toSegments(out: any, audioSec: number): TrySegment[] {
  const chunks: any[] = Array.isArray(out?.chunks) ? out.chunks : [];
  if (!chunks.length) return [{ start: 0, end: audioSec, text: String(out?.text ?? '').trim() }];
  const segs: TrySegment[] = [];
  let prevEnd = 0;
  for (const c of chunks) {
    const text = String(c?.text ?? '').trim();
    if (!text) continue;
    const ts = c?.timestamp ?? [];
    const start = typeof ts[0] === 'number' ? ts[0] : prevEnd;
    let end = typeof ts[1] === 'number' ? ts[1] : audioSec;
    if (end < start) end = start;
    segs.push({ start, end, text });
    prevEnd = end;
  }
  return segs.length ? segs : [{ start: 0, end: audioSec, text: String(out?.text ?? '').trim() }];
}