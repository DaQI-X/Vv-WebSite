// 模块级：取件源在所有 useDownload 调用方之间共享，探针全程只发一次。
// 初值为镜像——境内直连 GitHub 是 0 字节，而 hf-mirror.com 两边都连得上，
// 所以探测还没回来（或干脆没回来）时，用户点到的一定是一个能下载成功的链接。
const mirrorOn = ref(true)
let probing = false

// Cloudflare 给每个经过它的域名都开了 /cdn-cgi/trace，同源、384 字节，loc 就是这次请求
// 出口 IP 的国家码。挂着代理访问的用户拿到的是代理出口的国家，而那恰好决定他连不连得上
// GitHub——所以「按出口国家分源」这个判断是成立的，不是猜用户在哪。
const pickOriginByEgress = async () => {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 2000)
  try {
    const res = await fetch('/cdn-cgi/trace', { cache: 'no-store', signal: ctrl.signal })
    const loc = /loc=([A-Z]{2})\b/.exec(await res.text())?.[1]
    if (loc === 'CN') mirrorOn.value = true
    // XX＝Cloudflare 认不出这个 IP，T1＝Tor 出口：这两种判断不了，留镜像（两边都连得上）
    else if (loc && loc !== 'XX' && loc !== 'T1') mirrorOn.value = false
  } catch {
    // 探不到就维持初值：宁可让境外用户走一次也能连上的镜像，不能让境内用户点到一个空链接
  } finally {
    clearTimeout(timer)
  }
}

export const useDownload = () => {
  const config = useRuntimeConfig()

  if (import.meta.client && !probing) {
    probing = true
    void pickOriginByEgress()
  }

  // 浏览器 UA 无法可靠区分 Apple 芯片与 Intel Mac（两者都报 "Macintosh"，
  // 且 Safari 不支持 navigator.userAgentData），因此同时暴露两个 macOS 链接，由用户自选。
  const github = {
    win: config.public.downloadWinX64 as string,
    macArm: config.public.downloadMacArm64 as string,
    macIntel: config.public.downloadMacX64 as string,
  }
  // 镜像与 Release 资产同名，只换基底路径并钉到当前版本 tag。
  const mirrorUrl = (url: string) =>
    `${config.public.hfMirrorBase}/v${config.public.appVersion}/${url.slice(url.lastIndexOf('/') + 1)}`
  const from = (file: keyof typeof github) =>
    computed(() => (mirrorOn.value ? mirrorUrl(github[file]) : github[file]))

  return {
    winUrl: from('win'),
    macArmUrl: from('macArm'),
    macIntelUrl: from('macIntel'),
  }
}
