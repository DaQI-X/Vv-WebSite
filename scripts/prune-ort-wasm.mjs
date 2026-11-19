// Vite 会把 ort wrapper 里默认 wasmPaths 兜底（new URL('…wasm', import.meta.url)）emit 成整份静态资产。
// 运行时 wasmPaths 永远指向 /try-models/ort/（切块 + SW 缓存），这份整文件从不被请求；
// 且它 25.6MiB，超 Cloudflare Pages 单文件 25MiB 上限，留在产物里部署必失败。
import { readdirSync, rmSync, statSync } from 'node:fs';

const dir = '.output/public/_nuxt';
for (const f of readdirSync(dir)) {
  if (/^ort-wasm-.*\.wasm$/.test(f)) {
    console.log(`prune dead ort wasm asset: ${f} (${statSync(`${dir}/${f}`).size} bytes)`);
    rmSync(`${dir}/${f}`);
  }
}