<template>
  <section id="download" class="py-20 md:py-28 bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-800 dark:to-brand-950 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
      <div class="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full"></div>
    </div>

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        {{ t('cta.badge', { version: config.public.appVersion }) }}
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ t('cta.title') }}</h2>
      <p class="text-brand-100 dark:text-brand-300 text-lg mb-10">{{ t('cta.subtitle') }}</p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <a :href="winUrl" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-700 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
          {{ t('cta.winBtn') }}
        </a>
        <a :href="macArmUrl" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-700 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          {{ t('cta.macArmBtn') }}
        </a>
      </div>

      <p class="text-brand-100 dark:text-brand-300 text-sm mb-8">
        {{ t('cta.macIntelLead') }}
        <a :href="macIntelUrl" target="_blank" rel="noopener" class="underline font-medium hover:text-white transition-colors">{{ t('cta.macIntelLink') }}</a>
      </p>

      <div class="max-w-xl mx-auto mb-10 px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-brand-100 dark:text-brand-300 text-xs leading-relaxed text-left">
        <RichText :text="t('cta.notice')" strong-class="font-semibold text-white" />
        <a :href="docsInstallPath" class="underline hover:text-white transition-colors">{{ t('cta.noticeLink') }}</a>
      </div>

      <div class="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
        <div>
          <div class="text-2xl font-bold text-white">{{ t('cta.statLocal') }}</div>
          <div class="text-brand-200 dark:text-brand-400 text-xs mt-1">{{ t('cta.statLocalLabel') }}</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-white">{{ t('cta.statFree') }}</div>
          <div class="text-brand-200 dark:text-brand-400 text-xs mt-1">{{ t('cta.statFreeLabel') }}</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-white">{{ t('cta.statFormats') }}</div>
          <div class="text-brand-200 dark:text-brand-400 text-xs mt-1">{{ t('cta.statFormatsLabel') }}</div>
        </div>
      </div>

      <p class="text-brand-200 dark:text-brand-400 text-sm">
        {{ t('cta.footnoteLead') }}
        <a :href="config.public.githubRepo" target="_blank" rel="noopener" class="underline hover:text-white transition-colors">{{ t('cta.footnoteLink') }}</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const localePath = useLocalePath()
const { winUrl, macArmUrl, macIntelUrl } = useDownload()

const docsInstallPath = computed(() => `${localePath('/docs')}#install`)
</script>
