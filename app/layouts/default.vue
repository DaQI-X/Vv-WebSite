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

// Pages 会把 /docs 308 到 /docs/，canonical 与 sitemap 统一使用带斜杠形式，避免权重分裂
const canonical = computed(() => {
  const path = route.path.replace(/\/+$/, '')
  return path ? `${site}${path}/` : site
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  meta: [{ property: 'og:url', content: canonical }],
})
</script>
