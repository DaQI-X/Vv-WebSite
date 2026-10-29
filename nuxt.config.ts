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
      routes: ['/en', '/en/docs', '/en/privacy'],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://vvscribe.com',
      githubRepo: 'https://github.com/DaQI-X/Vv-Transcribe',
      contactEmail: 'hi@vvscribe.com',
      /** 发版时只改这一行，页面上的版本号都取自这里 */
      appVersion: '1.0.7',
      downloadWinX64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-win-x64.exe',
      downloadMacArm64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-mac-arm64.dmg',
      downloadMacX64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-mac-x64.dmg',
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-01-01',
})
