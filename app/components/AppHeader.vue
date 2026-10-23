<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
        <img src="/logo.png" alt="Vv Transcribe" class="h-8 w-auto" />
        <span class="text-lg font-bold text-gray-900 dark:text-white">Vv Transcribe</span>
      </NuxtLink>
      <div class="hidden md:flex items-center gap-6">
        <a :href="homeHash('features')" class="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{{ t('nav.features') }}</a>
        <a :href="homeHash('how-it-works')" class="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{{ t('nav.flow') }}</a>
        <a :href="homeHash('use-cases')" class="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{{ t('nav.scenes') }}</a>
        <NuxtLink :to="localePath('/docs')" class="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{{ t('nav.docs') }}</NuxtLink>
        <NuxtLink
          :to="switchLocalePath(otherLocale)"
          class="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          :title="t('common.switchLang')"
          :aria-label="t('common.switchLang')"
        >{{ localeName(otherLocale) }}</NuxtLink>
        <ClientOnly><DarkModeToggle /></ClientOnly>
        <a :href="config.public.githubRepo" target="_blank" rel="noopener" class="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a :href="homeHash('download')" class="btn-primary !py-2 !px-5 !text-sm">{{ t('nav.download') }}</a>
      </div>
      <div class="flex items-center gap-2 md:hidden">
        <NuxtLink
          :to="switchLocalePath(otherLocale)"
          class="px-2 py-1 shrink-0 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg"
          :aria-label="t('common.switchLang')"
        >{{ shortLocaleName(otherLocale) }}</NuxtLink>
        <ClientOnly><DarkModeToggle /></ClientOnly>
        <button class="p-2 text-gray-600 dark:text-gray-300" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
    <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-6 py-4 space-y-3">
      <a :href="homeHash('features')" class="block text-sm text-gray-600 dark:text-gray-300" @click="mobileMenuOpen = false">{{ t('nav.features') }}</a>
      <a :href="homeHash('how-it-works')" class="block text-sm text-gray-600 dark:text-gray-300" @click="mobileMenuOpen = false">{{ t('nav.flow') }}</a>
      <a :href="homeHash('use-cases')" class="block text-sm text-gray-600 dark:text-gray-300" @click="mobileMenuOpen = false">{{ t('nav.scenes') }}</a>
      <NuxtLink :to="localePath('/docs')" class="block text-sm text-gray-600 dark:text-gray-300" @click="mobileMenuOpen = false">{{ t('nav.docs') }}</NuxtLink>
      <a :href="homeHash('download')" class="btn-primary !py-2 !px-5 !text-sm w-full text-center" @click="mobileMenuOpen = false">{{ t('nav.download') }}</a>
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const mobileMenuOpen = ref(false)
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const otherLocale = computed(() => (locale.value === 'en' ? 'zh' : 'en'))
// 语言名固定用各自语言的自称，不跟随界面语言翻译
const localeName = (code: string) => (code === 'en' ? 'English' : '简体中文')
// 移动端空间小，用缩写；CJK 无空格会被逐字断行，所以配 whitespace-nowrap
const shortLocaleName = (code: string) => (code === 'en' ? 'EN' : '中文')
// 锚点必须指向当前语言的首页，否则英文页点「功能特性」会跳回中文首页
const homeHash = (hash: string) => `${localePath('/').replace(/\/+$/, '')}/#${hash}`
</script>
