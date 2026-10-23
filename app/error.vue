<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-br from-brand-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <img src="/logo.png" alt="Vv Transcribe" class="h-14 w-auto mb-10" />
    <div class="text-6xl md:text-7xl font-bold text-brand-600 dark:text-brand-400 leading-none mb-5">
      {{ statusCode }}
    </div>
    <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
      {{ isNotFound ? t('error.notFoundTitle') : t('error.errorTitle') }}
    </h1>
    <p class="text-gray-500 dark:text-gray-400 max-w-md mb-10 leading-relaxed">
      {{ isNotFound ? t('error.notFoundDesc') : (error?.message || t('error.errorDesc')) }}
    </p>
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <a :href="homePath" class="btn-primary">{{ t('error.backHome') }}</a>
      <a :href="docsPath" class="btn-secondary">{{ t('error.openDocs') }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const statusCode = computed(() => props.error?.statusCode || 500)
const isNotFound = computed(() => statusCode.value === 404)

const { t, locale, setLocale } = useI18n()
const homePath = computed(() => (locale.value === 'en' ? '/en/' : '/'))
const docsPath = computed(() => (locale.value === 'en' ? '/en/docs/' : '/docs/'))

// 静态导出只有一份 404.html（空壳，正文在客户端渲染），语言只能在这里判定：
// 先看地址是不是 /en/*，再退回浏览器语言
onMounted(async () => {
  const path = window.location.pathname
  const wantsEn = path === '/en' || path.startsWith('/en/') || (navigator.language || '').toLowerCase().startsWith('en')
  if (wantsEn && locale.value !== 'en') await setLocale('en')
})

useHead({
  title: computed(() => `${isNotFound.value ? t('error.notFoundTitle') : t('error.errorTitle')} - Vv Transcribe`),
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>
