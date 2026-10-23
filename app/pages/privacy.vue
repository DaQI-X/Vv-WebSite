<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="mb-12">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-400 transition-colors mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ t('common.backHome') }}
          </NuxtLink>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.title') }}</h1>
          <p class="text-gray-500 dark:text-gray-400">{{ t('privacy.updated') }}</p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.overviewTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              <RichText :text="t('privacy.overviewText')" />
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.localTitle') }}</h2>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li v-for="i in 3" :key="i" class="flex items-start gap-2">
                <svg class="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span>{{ t(`privacy.local${i}`) }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.apiTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {{ t('privacy.apiLead') }}
            </p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li v-for="i in 3" :key="i" class="flex items-start gap-2">
                <svg class="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01" /></svg>
                <span>{{ t(`privacy.api${i}`) }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.collectTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{{ t('privacy.collectLead') }}</p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li v-for="i in 3" :key="i" class="flex items-start gap-2">
                <svg class="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>{{ t(`privacy.collect${i}`) }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.modelTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t('privacy.modelText') }}
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('privacy.contactTitle') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t('privacy.contactLead') }}
              <a :href="config.public.githubRepo + '/issues'" target="_blank" rel="noopener" class="text-brand-600 dark:text-brand-400 hover:underline">{{ t('privacy.contactIssues') }}</a>
              {{ t('privacy.contactMid') }}
              <a :href="`mailto:${config.public.contactEmail}`" class="text-brand-600 dark:text-brand-400 hover:underline">{{ config.public.contactEmail }}</a>
              {{ t('privacy.contactTail') }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('meta.privacy.title'),
  description: () => t('meta.privacy.description'),
  ogTitle: () => t('meta.privacy.title'),
  ogDescription: () => t('meta.privacy.description'),
  twitterTitle: () => t('meta.privacy.title'),
  twitterDescription: () => t('meta.privacy.description'),
})
</script>
