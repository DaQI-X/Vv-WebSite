<template>
  <section id="use-cases" class="py-20 md:py-28 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">{{ t('scenes.title') }}</h2>
      <p class="section-desc">{{ t('scenes.desc') }}</p>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="scene in scenes" :key="scene.id" class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900">
          <div class="text-3xl mb-4">{{ scene.emoji }}</div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t(`scenes.items.${scene.id}.title`) }}</h3>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{{ t(`scenes.items.${scene.id}.desc`) }}</p>
          <ul class="space-y-2">
            <li v-for="point in ['a', 'b', 'c']" :key="point" class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-4 h-4 text-brand-500 dark:text-brand-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ t(`scenes.items.${scene.id}.points.${point}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
// emoji 与语言无关，留在组件里；文案按 id 取
const scenes = [
  { id: 'broadcast', emoji: '\uD83D\uDCFA' },
  { id: 'news', emoji: '\uD83C\uDFAC' },
  { id: 'podcast', emoji: '\uD83C\uDF99\uFE0F' },
  { id: 'enterprise', emoji: '\uD83C\uDFE2' },
]
</script>
