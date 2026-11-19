// 构建期拉取 /try 在线转写所需的模型资产（#397 M1）。
// 产物落在 app/public/try-models/（gitignore），CI 与本地跑同一条命令；模型二进制不进 git。
// 供应链钉死：HF 文件与 ort wasm 都按 SHA256 校验，换内容即失败（沿用 #177 的口径）。
// 中国本地网络：HTTPS_PROXY=http://127.0.0.1:7897 node scripts/fetch-try-models.mjs（curl 认该环境变量）；CI 直连。
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'app/public/try-models');
const CACHE = join(ROOT, 'scripts/.model-cache');
const CHUNK = 20 * 1024 * 1024; // CF Pages 单文件上限 25 MiB，留余量
const HF_BASE = 'https://huggingface.co/onnx-community/whisper-base/resolve/main';

// rel -> [sha256, size]；2026-11-19 从 HF 官方下载实测
const HF_FILES = {
  'added_tokens.json': ['9715fd2243b6f06a5858b5e32950d2853f73dd5bc201aafcf76f5082a2d8acd1', 34604],
  'config.json': ['f4d0608f7d918166da7edb3e188de5ef1bfe70d9802e785d271fd88111e9cf4b', 2243],
  'generation_config.json': ['61070cf8de25b1e9256e8e102ded49d8d24a8369ed36ef84fdf21549e68125a0', 3832],
  'merges.txt': ['2df2990a395e35e8dfbc7511e08c12d56018d8d04691e0133e5d63b21e154dc6', 493869],
  'normalizer.json': ['bf1c507dc8724ca9cf9903640dacfb69dae2f00edee4f21ceba106a7392f26dd', 52666],
  'preprocessor_config.json': ['a6a76d28c93edb273669eb9e0b0636a2bddbb1272c3261e47b7ca6dfdbac1b8d', 339],
  'special_tokens_map.json': ['e67ae3a0aaa99abcd9f187138e12db1f65c16a14761c50ef10eef2c174a7a691', 2194],
  'tokenizer.json': ['27fc476bfe7f17299480be2273fc0608e4d5a99aba2ab5dec5374b4482d1a566', 2480466],
  'tokenizer_config.json': ['2e036e4dbacfdeb7242c7d4ec4149f4a16e86026048f94d1637e3a8ee9c6a573', 282682],
  'vocab.json': ['50d6a919f0a0601d56a04eb583c780d18553aa388254ba3158eb6a00f13e2c1a', 1036584],
  'onnx/encoder_model_quantized.onnx': ['5862993336bf33acd23736071aae2b32261d3b1b2f37780194460d4ef974dd46', 23201314],
  'onnx/decoder_model_merged_quantized.onnx': ['fa3ef9902734ce5ae6f9ef2bdb2ba9a6c4b5785b09f4f420ce036573dc9d090b', 53693315],
};

// ort wasm 取自钉版本的 onnxruntime-web 包（transformers 4.3.2 的传递依赖），不另下载
const ORT_WASM = 'ort-wasm-simd-threaded.asyncify.wasm';
const ORT_SHA = '49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082';
// ort 后端除 .wasm 还要动态 import 同名的 .mjs 胶水模块，缺它后端起不来
const ORT_MJS = 'ort-wasm-simd-threaded.asyncify.mjs';
const ORT_MJS_SHA = '0966b6105cd936744498aa60df7a22cbd47af3374dbc64a9ab561c08a71e3611';

const sha = (buf) => createHash('sha256').update(buf).digest('hex');

function fetchTo(url, dest) {
  mkdirSync(dirname(dest), { recursive: true });
  const r = spawnSync('curl', ['-sfL', '--retry', '4', '--retry-delay', '2', '--retry-all-errors', '--max-time', '300', '-o', dest, url], { stdio: 'inherit' });
  if (r.status !== 0) throw new Error(`下载失败 ${url}`);
}

function verifiedRead(cachePath, url, expectSha, expectSize) {
  if (existsSync(cachePath)) {
    const buf = readFileSync(cachePath);
    if (sha(buf) === expectSha) return buf;
    rmSync(cachePath);
  }
  fetchTo(url, cachePath);
  const buf = readFileSync(cachePath);
  if (sha(buf) !== expectSha) throw new Error(`SHA256 不符 ${url}`);
  if (buf.byteLength !== expectSize) throw new Error(`体积不符 ${url}: ${buf.byteLength} != ${expectSize}`);
  return buf;
}

function emit(rel, buf) {
  const parts = Math.ceil(buf.byteLength / CHUNK);
  if (parts <= 1) {
    const dest = join(OUT, rel);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, buf);
    return { size: buf.byteLength, sha256: sha(buf), parts: 0 };
  }
  for (let i = 0; i < parts; i++) {
    const dest = join(OUT, `${rel}.part${String(i).padStart(2, '0')}`);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, buf.subarray(i * CHUNK, (i + 1) * CHUNK));
  }
  return { size: buf.byteLength, sha256: sha(buf), parts };
}

mkdirSync(OUT, { recursive: true });
mkdirSync(CACHE, { recursive: true });
const files = {};
for (const [rel, [expectSha, expectSize]] of Object.entries(HF_FILES)) {
  const buf = verifiedRead(join(CACHE, 'hf', rel), `${HF_BASE}/${rel}`, expectSha, expectSize);
  files[`hf/onnx-community/whisper-base/resolve/main/${rel}`] = emit(`hf/onnx-community/whisper-base/resolve/main/${rel}`, buf);
  console.log('ok', rel);
}

const ortDir = join(ROOT, 'node_modules/.pnpm');
const { readdirSync } = await import('node:fs');
const ortPkg = readdirSync(ortDir).find((d) => d.startsWith('onnxruntime-web@'));
if (!ortPkg) throw new Error('node_modules 里没有 onnxruntime-web，先 pnpm install');
for (const [name, expect] of [[ORT_WASM, ORT_SHA], [ORT_MJS, ORT_MJS_SHA]]) {
  const buf = readFileSync(join(ortDir, ortPkg, 'node_modules/onnxruntime-web/dist', name));
  if (sha(buf) !== expect) throw new Error(`ort ${name} SHA256 不符（包版本变了？更新脚本里的钉值）`);
  files[`ort/${name}`] = emit(`ort/${name}`, buf);
  console.log('ok', name);
}

const version = sha(Buffer.from(Object.values(files).map((f) => f.sha256).join(''))).slice(0, 8);
const manifest = { version, files };
writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
const swTemplate = readFileSync(join(ROOT, 'scripts/try-sw.js'), 'utf8');
// SW 脚本必须放在站点根：scope 要罩住 /try 与 /en/try 页面本身，页面受控后其模型请求才会被拦截
writeFileSync(join(ROOT, 'app/public/try-sw.js'), swTemplate.replace('__MANIFEST__', JSON.stringify(manifest)));
rmSync(join(OUT, 'sw.js'), { force: true });
const totalMB = (Object.values(files).reduce((a, f) => a + f.size, 0) / 1048576).toFixed(2);
console.log(`done: ${Object.keys(files).length} files, ${totalMB} MiB, cache version ${version}`);