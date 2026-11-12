<template>
  <GuideShell title-key="guides.video.title" lead-key="guides.video.lead" :minutes="6" :related="['srt-editing', 'podcast-transcription']">
    <GuideSection :n="1" :title="t('guides.video.s1Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{{ t('guides.video.s1Lead') }}</p>
      <div class="grid sm:grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t(`guides.video.path${i}Title`) }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t(`guides.video.path${i}Desc`) }}</p>
        </div>
      </div>
    </GuideSection>

    <GuideSection :n="2" :title="t('guides.video.s2Title')">
      <ol class="space-y-3 mb-5">
        <li v-for="i in 4" :key="i" class="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{{ i }}</span>
          <span class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"><RichText :text="t(`guides.video.step${i}`)" /></span>
        </li>
      </ol>
      <GuideCallout :title="t('guides.video.tipTitle')">
        {{ t('guides.video.tipText') }}
      </GuideCallout>
    </GuideSection>

    <GuideSection :n="3" :title="t('guides.video.s3Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.video.s3Lead') }}</p>
      <div class="grid sm:grid-cols-2 gap-4 mb-4">
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.video.s3AudioLabel') }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.video.s3AudioText') }}</p>
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.video.s3VideoLabel') }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.video.s3VideoText') }}</p>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4"><RichText :text="t('guides.video.s3Note1')" /></p>
      <GuideCallout type="warn" :title="t('guides.video.warnTitle')">
        {{ t('guides.video.warnText') }}
      </GuideCallout>
    </GuideSection>

    <GuideSection :n="4" :title="t('guides.video.s4Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.video.s4Lead') }}</p>
      <div class="grid sm:grid-cols-2 gap-4 mb-4">
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.video.s4LocalTitle') }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.video.s4LocalDesc') }}</p>
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('guides.video.s4AiTitle') }}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.video.s4AiDesc') }}</p>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.video.s4Ref') }}</p>
      <GuideCallout :title="t('guides.video.s4NoteTitle')">
        {{ t('guides.video.s4NoteText') }}
      </GuideCallout>
    </GuideSection>

    <GuideSection :n="5" :title="t('guides.video.s5Title')">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ t('guides.video.s5Lead') }}</p>
      <div class="space-y-3 mb-4">
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ t('guides.video.s5Cmd1Desc') }}</div>
          <CommandCopy text="vv transcribe interview.mp4 -o interview.srt" />
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ t('guides.video.s5Cmd2Desc') }}</div>
          <CommandCopy text="vv check interview.srt --preset broadcast-cn" />
        </div>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('guides.video.s5Note') }}</p>
    </GuideSection>

    <GuideFaq prefix="guides.video.faq" :ids="['upload', 'free', 'accuracy', 'lang']" :n="6" />
  </GuideShell>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.videoToSubtitles.title'),
  description: () => t('meta.videoToSubtitles.description'),
  keywords: () => t('meta.videoToSubtitles.keywords'),
  ogTitle: () => t('meta.videoToSubtitles.title'),
  ogDescription: () => t('meta.videoToSubtitles.description'),
  twitterTitle: () => t('meta.videoToSubtitles.title'),
  twitterDescription: () => t('meta.videoToSubtitles.description'),
})
</script>