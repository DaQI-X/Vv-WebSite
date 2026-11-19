// /try 模型资产 Service Worker（模板：fetch-try-models.mjs 注入 manifest 后写到 app/public/try-sw.js）。
// 职责：把 >20MiB 的模型文件按 .partNN 块取回拼成整文件响应（CF Pages 单文件 25MiB 上限），
// 块级 Cache Storage 缓存 ⇒ 二次访问零下载。注册 scope 为 /（页面须受控其请求才被拦截），
// 但 fetch 只接 /try-models/ 下的资产请求，站点其余请求一律放行走网络。
const MANIFEST = __MANIFEST__;
const CACHE = 'vv-try-' + MANIFEST.version;
const SCOPE = '/try-models/';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('vv-try-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

const MIME = (rel) => {
  if (rel.endsWith('.wasm')) return 'application/wasm';
  if (rel.endsWith('.mjs') || rel.endsWith('.js')) return 'text/javascript; charset=utf-8';
  if (rel.endsWith('.json')) return 'application/json';
  if (rel.endsWith('.txt')) return 'text/plain; charset=utf-8';
  return 'application/octet-stream';
};

async function progress(rel, loaded, total) {
  const clients = await self.clients.matchAll({ type: 'window' });
  for (const c of clients) c.postMessage({ type: 'vv-try-progress', rel, loaded, total });
}

async function partBuffer(cache, url) {
  const hit = await cache.match(url);
  if (hit) return hit.arrayBuffer();
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ${url}`);
  const buf = await resp.arrayBuffer();
  // 配额不足时只放弃缓存、不放弃本次转写
  await cache.put(url, new Response(buf, { headers: { 'content-type': 'application/octet-stream' } })).catch(() => {});
  return buf;
}

async function assemble(rel, entry) {
  const cache = await caches.open(CACHE);
  const n = entry.parts || 1;
  const bufs = [];
  let loaded = 0;
  for (let i = 0; i < n; i++) {
    const url = SCOPE + rel + (entry.parts ? `.part${String(i).padStart(2, '0')}` : '');
    const buf = await partBuffer(cache, url);
    bufs.push(buf);
    loaded += buf.byteLength;
    await progress(rel, loaded, entry.size);
  }
  const whole = new Uint8Array(entry.size);
  let off = 0;
  for (const b of bufs) { whole.set(new Uint8Array(b), off); off += b.byteLength; }
  return new Response(whole, {
    headers: { 'content-type': MIME(rel), 'content-length': String(entry.size), 'x-vv-try': entry.parts ? 'assembled' : 'whole' },
  });
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(SCOPE)) return;
  const rel = url.pathname.slice(SCOPE.length);
  if (rel === 'manifest.json') return; // 更新通道走网络
  const entry = MANIFEST.files[rel];
  if (!entry) return;
  event.respondWith(assemble(rel, entry));
});