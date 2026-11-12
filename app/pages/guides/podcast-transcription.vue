<template>
  <GuideShell title-key="guides.podcast.title" lead-key="guides.podcast.lead" :minutes="5" :related="['video-to-subtitles', 'srt-editing']">
    <GuideSection :n="1" :title="t('guides.podcast.s1Title')">
      <div class="grid sm:grid-cols-2 gap-4">
        <div v-for="i in 4" :key="i" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t(`guides.podcast.value${i}Title`) }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t(`guides.podcast.value${i}Desc`) }}</p>
        </div>
      </div>
    </GuideSection>

    <GuideSection :n="2" :title="t('guides.podcast.s2Title')">
      <ol class="space-y-3 mb-5">
        <li v-for="i in 3" :key="i" class="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{{ i }}</span>
          <span class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"><RichText :text="t(`guides.podcast.s2Step${i}`)" /></span>
        </li>
      </ol>
      <GuideCallout :title="t('guides.podcast.s2SpeedTitle')">
        <RichText :text="t('guides.podcast.s2SpeedText')" />
      </GuideCallout>
    </GuideSection>

    <GuideSection :n="3" :title="t('guides.podcast.s3Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.podcast.s3Lead') }}</p>
      <ol class="space-y-3">
        <li v-for="i in 3" :key="i" class="flex items-start gap-3">
          <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{{ i }}</span>
          <span class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ t(`guides.podcast.s3Point${i}`) }}</span>
        </li>
      </ol>
    </GuideSection>

    <GuideSection :n="4" :title="t('guides.podcast.s4Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.podcast.s4Lead') }}</p>
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div v-for="fmt in ['Txt', 'Md', 'Json', 'Tsv']" :key="fmt" class="flex items-start gap-4 px-5 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
          <span class="shrink-0 w-20 text-sm font-mono font-semibold text-brand-600 dark:text-brand-400">{{ t(`guides.podcast.fmt${fmt}`) }}</span>
          <span class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ t(`guides.podcast.fmt${fmt}Desc`) }}</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.podcast.s4History') }}</p>
    </GuideSection>

    <GuideSection :n="5" :title="t('guides.podcast.s5Title')">
      <div class="space-y-3">
        <GuideCallout :title="t('guides.podcast.s5LocalTitle')">
          {{ t('guides.podcast.s5Local') }}
        </GuideCallout>
        <GuideCallout :title="t('guides.podcast.s5CostTitle')">
          {{ t('guides.podcast.s5Cost') }}
        </GuideCallout>
      </div>
    </GuideSection>

    <GuideFaq prefix="guides.podcast.faq" :ids="['speakers', 'mixed', 'long', 'free']" :n="6" />
  </GuideShell>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.podcastTranscription.title'),
  description: () => t('meta.podcastTranscription.description'),
  keywords: () => t('meta.podcastTranscription.keywords'),
  ogTitle: () => t('meta.podcastTranscription.title'),
  ogDescription: () => t('meta.podcastTranscription.description'),
  twitterTitle: () => t('meta.podcastTranscription.title'),
  twitterDescription: () => t('meta.podcastTranscription.description'),
})
</script>