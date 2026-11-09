<template>
  <!--
    只在「配置了广告 + 这个浏览器从没表过态 + 用户主动打开过设置」时出现（判定都在 composable 里）。
    没填 adsenseClientId 的今天：这里一个节点都不渲染，线上与改造前相同。
  -->
  <Transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0 translate-y-2"
    leave-to-class="opacity-0"
  >
    <div
      v-if="bannerOpen"
      class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
      role="region"
      :aria-label="t('consent.title')"
    >
      <div
        class="mx-auto max-w-2xl max-h-[75vh] overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl p-5"
      >
        <h2 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">{{ t('consent.title') }}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {{ t('consent.body') }}
          <a
            :href="privacyUrl"
            class="text-brand-600 dark:text-brand-400 hover:underline whitespace-nowrap"
            >{{ t('consent.more') }}</a
          >
        </p>
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors"
            @click="decide('ads')"
          >
            {{ t('consent.accept') }}
          </button>
          <button
            type="button"
            class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium transition-colors"
            @click="decide('necessary')"
          >
            {{ t('consent.necessary') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { bannerOpen, decide } = useSiteAds()

const privacyUrl = `${localePath('/privacy')}#site-ads`
</script>
