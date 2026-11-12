<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <NuxtLink
          :to="localePath('/guides')"
          class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-6"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ t('guides.back') }}
        </NuxtLink>

        <div class="mb-10">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-100 dark:border-brand-900 mb-4">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {{ t('guides.badge') }}
          </span>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">{{ t(titleKey) }}</h1>
          <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{{ t(leadKey) }}</p>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 dark:text-gray-500">
            <span class="inline-flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ t('guides.updated', { date: GUIDE_UPDATED }) }}
            </span>
            <span class="inline-flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ t('guides.minutes', { n: minutes }) }}
            </span>
          </div>
        </div>

        <div class="space-y-12">
          <slot />
        </div>

        <div v-if="relatedGuides.length" class="mt-14">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">{{ t('guides.relatedTitle') }}</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="g in relatedGuides"
              :key="g.slug"
              :to="localePath(`/guides/${g.slug}`)"
              class="group min-w-0 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-600/5 transition-all duration-200"
            >
              <div class="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-1.5">{{ t(`guides.${g.key}.title`) }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{{ t(`guides.${g.key}.lead`) }}</div>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-800 dark:to-brand-950 p-8 text-center">
          <h2 class="text-xl md:text-2xl font-bold text-white mb-2">{{ t('guides.ctaTitle') }}</h2>
          <p class="text-brand-100 dark:text-brand-300 text-sm mb-6">{{ t('guides.ctaDesc') }}</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              :href="downloadUrl"
              class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-brand-700 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >{{ t('guides.ctaDownload') }}</a>
            <NuxtLink
              :to="localePath('/docs')"
              class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-colors"
            >{{ t('guides.ctaDocs') }}</NuxtLink>
          </div>
        </div>

        <!-- 长文页底部的广告位：没同意/没建广告位时整块不渲染，见 components/AdSlot.vue -->
        <AdSlot name="guideBottom" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  titleKey: string
  leadKey: string
  minutes: number
  related: GuideSlug[]
}>()

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()
const site = String(config.public.siteUrl).replace(/\/+$/, '')

const relatedGuides = computed(() => GUIDES.filter((g) => (props.related as string[]).includes(g.slug)))
const downloadUrl = computed(() => `${localePath('/').replace(/\/+$/, '')}/#download`)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: t(props.titleKey),
          description: t(props.leadKey),
          datePublished: GUIDE_UPDATED,
          dateModified: GUIDE_UPDATED,
          inLanguage: locale.value === 'en' ? 'en-US' : 'zh-CN',
          author: { '@type': 'Organization', name: 'Vv Transcribe', url: site },
          publisher: { '@type': 'Organization', name: 'Vv Transcribe', url: site },
          mainEntityOfPage: `${site}${route.path.replace(/\/+$/, '')}/`,
          image: `${site}/og-image.jpg`,
        }),
      ),
    },
  ],
})
</script>