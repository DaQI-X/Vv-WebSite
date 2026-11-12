<template>
  <GuideShell title-key="guides.srt.title" lead-key="guides.srt.lead" :minutes="7" :related="['video-to-subtitles', 'podcast-transcription']">
    <GuideSection :n="1" :title="t('guides.srt.s1Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.srt.s1Lead') }}</p>
      <div class="rounded-xl bg-gray-900 border border-gray-800 p-5 overflow-x-auto mb-4">
        <pre class="text-sm leading-relaxed font-mono text-gray-300"><code><span class="text-gray-500">1</span>
<span class="text-brand-300">00:00:01,200 --&gt; 00:00:04,500</span>
{{ t('guides.srt.sample1') }}

<span class="text-gray-500">2</span>
<span class="text-brand-300">00:00:04,800 --&gt; 00:00:07,100</span>
{{ t('guides.srt.sample2') }}</code></pre>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.srt.s1Note') }}</p>
    </GuideSection>

    <GuideSection :n="2" :title="t('guides.srt.s2Title')">
      <div class="grid sm:grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t(`guides.srt.prob${i}Title`) }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t(`guides.srt.prob${i}Desc`) }}</p>
        </div>
      </div>
    </GuideSection>

    <GuideSection :n="3" :title="t('guides.srt.s3Title')">
      <div class="space-y-3">
        <div v-for="key in ['Ref', 'Local', 'Ai']" :key="key" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <span class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"><strong class="text-gray-900 dark:text-white">{{ t(`guides.srt.s3${key}Label`) }}</strong>{{ t(`guides.srt.s3${key}Text`) }}</span>
        </div>
      </div>
    </GuideSection>

    <GuideSection :n="4" :title="t('guides.srt.s4Title')">
      <div class="space-y-4 mb-4">
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.srt.s4ShiftLabel') }}</div>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3"><RichText :text="t('guides.srt.s4ShiftText')" /></p>
          <p class="text-sm text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900 rounded-lg px-3 py-2 leading-relaxed"><RichText :text="t('guides.srt.s4Example')" /></p>
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.srt.s4SingleLabel') }}</div>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('guides.srt.s4SingleText') }}</p>
        </div>
      </div>
      <GuideCallout :title="t('guides.srt.s4TipTitle')">
        {{ t('guides.srt.s4TipText') }}
      </GuideCallout>
    </GuideSection>

    <GuideSection :n="5" :title="t('guides.srt.s5Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.srt.s5Lead') }}</p>
      <div class="space-y-3 mb-4">
        <div v-for="key in ['Split', 'Merge', 'Delete']" :key="key" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <span class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"><strong class="text-gray-900 dark:text-white">{{ t(`guides.srt.s5${key}Label`) }}</strong>{{ t(`guides.srt.s5${key}Text`) }}</span>
        </div>
      </div>
      <GuideCallout type="warn" :title="t('guides.srt.s5WarnTitle')">
        {{ t('guides.srt.s5WarnText') }}
      </GuideCallout>
    </GuideSection>

    <GuideSection :n="6" :title="t('guides.srt.s6Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.srt.s6Lead') }}</p>
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <CommandCopy text="vv check evening-news.srt --preset broadcast-cn" />
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.srt.s6Note') }}</p>
    </GuideSection>

    <GuideFaq prefix="guides.srt.faq" :ids="['vtt', 'external', 'precision', 'text']" :n="7" />
  </GuideShell>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.srtEditing.title'),
  description: () => t('meta.srtEditing.description'),
  keywords: () => t('meta.srtEditing.keywords'),
  ogTitle: () => t('meta.srtEditing.title'),
  ogDescription: () => t('meta.srtEditing.description'),
  twitterTitle: () => t('meta.srtEditing.title'),
  twitterDescription: () => t('meta.srtEditing.description'),
})
</script>