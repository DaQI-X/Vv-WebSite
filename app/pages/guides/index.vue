<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12 max-w-3xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-100 dark:border-brand-900 mb-4">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {{ t('guides.badge') }}
          </span>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ t('guides.index.title') }}</h1>
          <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.index.lead') }}</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink
            v-for="g in GUIDES"
            :key="g.slug"
            :to="localePath(`/guides/${g.slug}`)"
            class="group min-w-0 flex flex-col bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-xl hover:shadow-brand-600/5 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span class="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-900 flex items-center justify-center text-xl mb-4">{{ g.icon }}</span>
            <h2 class="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug mb-2">{{ t(`guides.${g.key}.title`) }}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{{ t(`guides.${g.key}.lead`) }}</p>
            <span class="inline-flex items-center gap-1.5 text-sm text-brand-600 dark:text-brand-400 font-medium mt-4">
              {{ t('guides.index.readMore') }}
              <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ t('guides.minutes', { n: g.minutes }) }}</span>
          </NuxtLink>
        </div>

        <div class="mt-10 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 max-w-3xl">
          <h2 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.index.noteTitle') }}</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <RichText :text="t('guides.index.noteText', { version: config.public.appVersion })" />
          </p>
          <NuxtLink :to="localePath('/docs')" class="inline-flex items-center gap-1.5 text-sm text-brand-600 dark:text-brand-400 font-medium mt-3 hover:underline">
            {{ t('guides.index.noteLink') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <AdSlot name="guideBottom" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

useSeoMeta({
  title: () => t('meta.guides.title'),
  description: () => t('meta.guides.description'),
  keywords: () => t('meta.guides.keywords'),
  ogTitle: () => t('meta.guides.title'),
  ogDescription: () => t('meta.guides.description'),
  twitterTitle: () => t('meta.guides.title'),
  twitterDescription: () => t('meta.guides.description'),
})
</script>