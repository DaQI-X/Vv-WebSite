/**
 * 网站侧广告与同意的唯一接缝（#357）。三件事收在这一个文件里，为的是让
 * 「没同意就没有广告 cookie」这句话只剩一个地方需要证伪：
 *
 * - `adsenseClientId` 空＝整层不生效：横幅、页脚「Cookie 设置」、广告位一律不渲染，
 *   页面与这层代码落地之前逐像素相同。这层先落地不等于线上开始放广告——过审后由作者本人
 *   填 client 与 slots，广告才真的出现。
 * - 同意状态只写 localStorage，本站**不为此设任何 cookie**：为了「不乱设 cookie」而先设一个
 *   cookie 记录同意，是个自拆台的做法。代价是换浏览器要重新问一次，可接受。
 * - 广告脚本只有 `loadAdsenseScript()` 这一个注入口，而它只在「已同意」之后被 <AdSlot> 调用。
 *
 * 状态是模块级单例，但所有读写都发生在客户端（onMounted 与点击回调），SSR 期间恒为初始值，
 * 因此不存在跨请求串状态的问题（生产是 `pnpm generate` 出的纯静态，dev 的 SSR 也只读不写）。
 */
const CONSENT_KEY = 'vv-site-consent'

export type SiteConsent = 'ads' | 'necessary'

const consent = ref<SiteConsent | null>(null)
const bannerOpen = ref(false)
let scriptRequested = false

/** 只认控制台给的那个形状，别把一个任意字符串写进 script src */
const CLIENT_ID_RE = /^ca-pub-\d{6,}$/

export const useSiteAds = () => {
  const config = useRuntimeConfig()
  const clientId = String(config.public.adsenseClientId ?? '')
  const slots = (config.public.adsenseSlots ?? {}) as Record<string, string>
  const adsConfigured = CLIENT_ID_RE.test(clientId)

  function slotId(name: string): string {
    return adsConfigured ? String(slots[name] ?? '') : ''
  }

  /** 这一格该不该出广告：开关开 + 这个位置建了广告位 + 访客已同意 */
  function adReady(name: string): boolean {
    return adsConfigured && consent.value === 'ads' && slotId(name) !== ''
  }

  function decide(choice: SiteConsent) {
    consent.value = choice
    bannerOpen.value = false
    if (import.meta.client) localStorage.setItem(CONSENT_KEY, choice)
  }

  /** 页脚「Cookie 设置」走这里：改主意永远比第一次选择更难，撤回入口必须一直留着 */
  function openBanner() {
    bannerOpen.value = true
  }

  function loadAdsenseScript() {
    if (!import.meta.client || !adsConfigured || scriptRequested) return
    scriptRequested = true
    const script = document.createElement('script')
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)
  }

  if (import.meta.client) {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'ads' || stored === 'necessary') consent.value = stored
    // 配置了广告但从没问过访客：横幅只在首访出现一次，之后就靠页脚那个入口
    if (adsConfigured && consent.value === null) bannerOpen.value = true
  }

  return { adsConfigured, consent, bannerOpen, slotId, adReady, decide, openBanner, loadAdsenseScript }
}
