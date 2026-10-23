<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const site = String(useRuntimeConfig().public.siteUrl).replace(/\/+$/, '')
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Pages 会把 /docs 308 到 /docs/，canonical、hreflang 与 sitemap 统一使用带斜杠形式，避免权重分裂
const abs = (path: string) => {
  const clean = path.replace(/\/+$/, '')
  return clean ? `${site}${clean}/` : site
}

const canonical = computed(() => abs(route.path))
const zhUrl = computed(() => abs(switchLocalePath('zh')))
const enUrl = computed(() => abs(switchLocalePath('en')))

useHead({
  htmlAttrs: { lang: computed(() => (locale.value === 'en' ? 'en-US' : 'zh-CN')) },
  link: [
    { rel: 'canonical', href: canonical },
    { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl },
    { rel: 'alternate', hreflang: 'en-US', href: enUrl },
    // 没有语言前缀的地址（含入口）默认给中文，与 sitemap 里的无前缀 URL 一致
    { rel: 'alternate', hreflang: 'x-default', href: zhUrl },
  ],
  meta: [{ property: 'og:url', content: canonical }],
})
</script>
