<template>
  <section id="features" class="py-20 md:py-28 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">{{ t('features.title') }}</h2>
      <p class="section-desc">{{ t('features.desc') }}</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.id" class="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 hover:shadow-lg hover:shadow-brand-100/50 dark:hover:shadow-brand-900/20 transition-all duration-300 bg-white dark:bg-gray-900">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" :class="feature.bgClass">
            <component :is="feature.icon" :class="feature.iconClass" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t(`features.items.${feature.id}.title`) }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ t(`features.items.${feature.id}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { t } = useI18n()

const MicIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' })]) }
const DiffIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })]) }
const AIIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })]) }
const LockIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' })]) }
const VideoIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' })]) }
const SubtitleIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' })]) }
const VoiceIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 5L6 9H2v6h4l5 4V5zM15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728' })]) }

// 文案在语言包里，这里只保留与语言无关的图标与配色
const features = [
  { id: 'transcribe', icon: MicIcon, bgClass: 'bg-brand-50', iconClass: 'text-brand-600' },
  { id: 'reference', icon: DiffIcon, bgClass: 'bg-amber-50', iconClass: 'text-amber-600' },
  { id: 'correction', icon: AIIcon, bgClass: 'bg-purple-50', iconClass: 'text-purple-600' },
  { id: 'voice', icon: VoiceIcon, bgClass: 'bg-cyan-50', iconClass: 'text-cyan-600' },
  { id: 'privacy', icon: LockIcon, bgClass: 'bg-green-50', iconClass: 'text-green-600' },
  { id: 'download', icon: VideoIcon, bgClass: 'bg-blue-50', iconClass: 'text-blue-600' },
  { id: 'export', icon: SubtitleIcon, bgClass: 'bg-rose-50', iconClass: 'text-rose-600' },
]
</script>
