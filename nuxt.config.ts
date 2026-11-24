export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      // 标题/描述/关键词等按语言在页面里用 useSeoMeta 设置；这里只保留与语言无关的静态项与兜底
      title: 'Vv Transcribe',
      htmlAttrs: { lang: 'zh-CN' },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Vv Transcribe' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://vvscribe.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://vvscribe.com/og-image.jpg' },
      ],
      // Cloudflare Web Analytics 无 Cookie 埋点，token 是公开值，不做隐私告知
      script: [
        {
          type: 'module',
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': '{"token": "29a4ad3432324333888e6499035ea5e6"}',
        },
      ],
    },
  },
  i18n: {
    locales: [
      { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'zh',
    // 模块按 rootDir 解析：rootDir/app/i18n + locales = app/i18n/locales
    restructureDir: 'app/i18n',
    langDir: 'locales',
    // 中文保持原有无前缀 URL（/、/docs/、/privacy/），英文走 /en/*，避免破坏已收录页面
    strategy: 'prefix_except_default',
    // 不做浏览器语言自动跳转：URL 完全由用户点选切换器决定，静态生成结果确定、SEO 稳定
    detectBrowserLanguage: false,
    baseUrl: 'https://vvscribe.com/',
    // v10 会移除该特性，且当前实现有已知问题；显式关闭以消除构建告警
    bundle: { optimizeTranslationDirective: false },
  },
  nitro: {
    prerender: {
      routes: ['/try', '/en/try', '/en', '/en/docs', '/en/privacy', '/en/guides', '/en/guides/video-to-subtitles', '/en/guides/srt-editing', '/en/guides/podcast-transcription'],
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // ort 的 proxy worker 拿 ort 所在模块的 import.meta.url 当 worker 脚本；引擎混进页面 chunk
          // 会让 worker 连 Nuxt runtime 一起加载并死在顶层 document 引用上。隔离成无 DOM 引用的纯库 chunk。
          manualChunks(id) {
            if (id.includes('node_modules') && (id.includes('@huggingface/transformers') || id.includes('onnxruntime'))) return 'try-engine';
          },
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://vvscribe.com',
      githubRepo: 'https://github.com/DaQI-X/Vv-Transcribe',
      contactEmail: 'hi@vvscribe.com',
      /** 发版时只改这一行，页面上的版本号都取自这里 */
      appVersion: '1.2.3',
      /**
       * AdSense 变现开关（#357）。空字符串＝整层不生效：同意横幅、页脚「Cookie 设置」、所有广告位
       * 一律不渲染，页面与今天逐像素相同。这层代码先落地不代表线上开始放广告——过审后由作者本人
       * 把 `ca-pub-…` 填进来、并在 `adsenseSlots` 里对上控制台建好的广告位 id，广告才真的出现。
       * 键名与 <AdSlot :name> 一一对应；某个位置没填 id 就那一格不渲染（宁可没有，不挂一个空框）。
       */
      adsenseClientId: '',
      adsenseSlots: {} as Record<string, string>,
      downloadWinX64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-win-x64.exe',
      downloadMacArm64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-mac-arm64.dmg',
      downloadMacX64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-mac-x64.dmg',
      /**
       * HF 数据集镜像（发版 CI 逐字节同步自 GitHub Release）。
       * 文件名与 Release 资产同名；链接钉到 v<appVersion> tag，旧版本永不被后版覆盖。
       * 走哪一边由 useDownload 按浏览器出口 IP 的国家码自动选：CN 取这里，其余取上面的 GitHub 直链。
       */
      hfMirrorBase: 'https://hf-mirror.com/datasets/Seven7Q/vv-transcribe-releases/resolve',
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-01-01',
})
