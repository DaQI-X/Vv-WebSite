<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="mb-10">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ t('common.backHome') }}
          </NuxtLink>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ t('try.title') }}</h1>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('try.lead') }}</p>
        </div>

        <div class="space-y-3 mb-8">
          <div class="flex items-start gap-3 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 px-4 py-3">
            <svg class="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3l9 16H3l9-16z" /></svg>
            <p class="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{{ t('try.quality') }}</p>
          </div>
          <div class="flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3">
            <svg class="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('try.privacy') }}</p>
          </div>
          <div class="flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3">
            <svg class="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ isMobile ? t('try.capMobile') : t('try.capDesktop') }}</p>
          </div>
          <div v-if="isMobile" class="flex items-start gap-3 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 px-4 py-3">
            <svg class="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3l9 16H3l9-16z" /></svg>
            <p class="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{{ t('try.mobileWarn') }}</p>
          </div>
        </div>

        <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-6">
          <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2" for="try-file">{{ t('try.upload') }}</label>
          <input
            id="try-file"
            type="file"
            accept="audio/*,.mp3,.wav,.m4a,.aac,.flac,.ogg"
            class="block w-full text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-700 file:transition-colors file:cursor-pointer cursor-pointer"
            :disabled="busy"
            @change="onFile"
          />
          <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">{{ file ? file.name : t('try.uploadHint') }}</p>

          <div class="mt-5 flex flex-wrap items-end gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-2" for="try-lang">{{ t('try.language') }}</label>
              <div class="relative">
                <select
                  id="try-lang"
                  v-model="lang"
                  :disabled="busy"
                  class="appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-3 pr-9 py-2 text-sm text-gray-900 dark:text-white"
                >
                  <option value="zh">{{ t('try.langZh') }}</option>
                  <option value="en">{{ t('try.langEn') }}</option>
                </select>
                <!-- 原生箭头贴右边框且不受 padding 控制，改自绘箭头定位 -->
                <svg class="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <button
              type="button"
              class="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              :disabled="!file || busy"
              @click="onStart"
            >
              {{ t('try.start') }}
            </button>
            <button
              v-if="busy"
              type="button"
              class="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              @click="cancel"
            >
              {{ t('try.cancel') }}
            </button>
          </div>
        </div>

        <div v-if="busy" class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-6">
          <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <span v-if="stage === 'decode'">{{ t('try.stageDecode') }}</span>
            <span v-else-if="stage === 'sw'">{{ t('try.stageSw') }}</span>
            <span v-else-if="stage === 'model'">{{ t('try.stageModel', { mb: mb(dlLoaded), total: mb(dlTotal) }) }}</span>
            <span v-else>{{ t('try.stageRun', { n: liveChars }) }}</span>
          </p>
          <div v-if="stage === 'model'" class="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div class="h-full bg-brand-600 transition-[width] duration-300" :style="{ width: dlTotal ? Math.min(100, (dlLoaded / dlTotal) * 100) + '%' : '0%' }" />
          </div>
          <p v-if="stage === 'run'" class="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('try.runNote') }}</p>
        </div>

        <div v-if="stage === 'error'" role="alert" class="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-6 mb-6">
          <p class="text-sm font-semibold text-red-700 dark:text-red-300">{{ t(errorKey) }}</p>
          <p v-if="errorDetail" class="mt-2 text-xs text-red-600 dark:text-red-400 break-all">{{ errorDetail }}</p>
        </div>

        <div v-if="stage === 'done'">
          <div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">{{ t('try.resultTitle') }}</h2>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('try.resultStats', { sec: audioSec.toFixed(1), ms: (runMs / 1000).toFixed(1), rtf: (runMs / 1000 / audioSec).toFixed(2) }) }}</p>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">{{ t('try.editHint') }}</p>
            <div class="space-y-3">
              <div v-for="(seg, i) in segments" :key="i" class="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-3">
                <p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-1">{{ clock(seg.start) }} → {{ clock(seg.end) }}</p>
                <textarea
                  v-model="seg.text"
                  rows="2"
                  class="w-full bg-transparent text-sm leading-relaxed text-gray-800 dark:text-gray-200 focus:outline-none resize-y"
                />
              </div>
            </div>
            <div class="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                @click="exportAs('srt')"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" /></svg>
                {{ t('try.exportSrt') }}
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                @click="exportAs('txt')"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" /></svg>
                {{ t('try.exportTxt') }}
              </button>
              <button type="button" class="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline" @click="reset">{{ t('try.again') }}</button>
            </div>
          </div>

          <div class="rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white">
            <h2 class="text-lg font-bold mb-2">{{ t('try.ctaTitle') }}</h2>
            <p class="text-sm text-brand-50 leading-relaxed mb-4">{{ t('try.ctaText') }}</p>
            <NuxtLink :to="localePath('/') + '#download'" class="inline-block rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors">{{ t('try.ctaButton') }}</NuxtLink>
          </div>
        </div>

        <AdSlot name="tryBottom" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const { stage, busy, errorKey, errorDetail, audioSec, runMs, liveChars, dlLoaded, dlTotal, segments, isMobile, start, cancel, reset } = useTryAsr();

const file = ref<File | null>(null);
const lang = ref<'zh' | 'en'>(locale.value === 'en' ? 'en' : 'zh');
const mb = (b: number) => (b / 1048576).toFixed(1);
const clock = (s: number) => {
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, '0')}:${(s % 60).toFixed(1).padStart(4, '0')}`;
};
const srtClock = (s: number) => {
  const ms = Math.max(0, Math.round(s * 1000));
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const sec = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`;
};
const exportAs = (kind: 'srt' | 'txt') => {
  const segs = segments.value.map((s) => ({ ...s, text: s.text.trim() })).filter((s) => s.text);
  const content = kind === 'srt'
    ? segs.map((s, i) => `${i + 1}\n${srtClock(s.start)} --> ${srtClock(s.end)}\n${s.text}\n`).join('\n')
    : segs.map((s) => s.text).join('\n');
  const base = (file.value?.name || 'transcript').replace(/\.[^.]+$/, '') || 'transcript';
  const url = URL.createObjectURL(new Blob([content], { type: kind === 'srt' ? 'application/x-subrip' : 'text/plain' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = `${base}.${kind}`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const onFile = (e: Event) => {
  const input = e.target as HTMLInputElement;
  file.value = input.files?.[0] ?? null;
};
const onStart = () => {
  if (file.value) start(file.value, lang.value);
};

useSeoMeta({
  title: () => t('meta.try.title'),
  description: () => t('meta.try.description'),
  keywords: () => t('meta.try.keywords'),
  ogTitle: () => t('meta.try.title'),
  ogDescription: () => t('meta.try.description'),
  twitterTitle: () => t('meta.try.title'),
  twitterDescription: () => t('meta.try.description'),
});
</script>