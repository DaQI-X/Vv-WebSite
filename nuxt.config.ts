export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Vv Transcribe - 专业字幕转写校对工具',
      htmlAttrs: { lang: 'zh-CN' },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Vv Transcribe 是面向媒体专业人士的 AI 字幕转写与校对工具，帮助广播电视从业者精准比对字幕与播出稿，杜绝播出事故。' },
        { name: 'keywords', content: '字幕转写,语音识别,AI校对,播出事故,广播电视,Whisper,本地转写' },
        { name: 'author', content: 'Vv Transcribe' },
        { property: 'og:title', content: 'Vv Transcribe - 专业字幕转写校对工具' },
        { property: 'og:description', content: 'AI 驱动的字幕转写与校对，精准比对字幕与播出稿，杜绝播出事故。本地运行，永久免费。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://vvscribe.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Vv Transcribe - 专业字幕转写校对工具' },
        { name: 'twitter:description', content: 'AI 驱动的字幕转写与校对，精准比对字幕与播出稿，杜绝播出事故。' },
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
  runtimeConfig: {
    public: {
      siteUrl: 'https://vvscribe.com',
      githubRepo: 'https://github.com/DaQI-X/Vv-Transcribe',
      contactEmail: 'hi@vvscribe.com',
      /** 发版时只改这一行，页面上的版本号都取自这里 */
      appVersion: '1.0.1',
      downloadWinX64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-win-x64.exe',
      downloadMacArm64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-mac-arm64.dmg',
      downloadMacX64: 'https://github.com/DaQI-X/Vv-Transcribe/releases/latest/download/Vv-Transcribe-mac-x64.dmg',
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-01-01',
})
