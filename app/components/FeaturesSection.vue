<template>
  <section id="features" class="py-20 md:py-28 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">强大的核心功能</h2>
      <p class="section-desc">为媒体从业者量身打造，每一个功能都直击痛点</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" class="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 hover:shadow-lg hover:shadow-brand-100/50 dark:hover:shadow-brand-900/20 transition-all duration-300 bg-white dark:bg-gray-900">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" :class="feature.bgClass">
            <component :is="feature.icon" :class="feature.iconClass" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const MicIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' })]) }
const DiffIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })]) }
const AIIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })]) }
const LockIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' })]) }
const VideoIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' })]) }
const SubtitleIcon = { render: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' })]) }

const features = [
  {
    title: 'AI 语音转写',
    desc: '基于 Whisper 引擎，支持中英文等多种语言的音视频转写，本地运行，识别精准。',
    icon: MicIcon,
    bgClass: 'bg-brand-50',
    iconClass: 'text-brand-600',
  },
  {
    title: '参考稿比对',
    desc: '上传播出稿或参考稿，自动与转写结果逐字 Diff 比对，差异一目了然。',
    icon: DiffIcon,
    bgClass: 'bg-amber-50',
    iconClass: 'text-amber-600',
  },
  {
    title: 'AI 智能纠错',
    desc: 'AI 分析差异原因，给出纠错建议与解释，帮助快速定位并修正字幕问题。',
    icon: AIIcon,
    bgClass: 'bg-purple-50',
    iconClass: 'text-purple-600',
  },
  {
    title: '本地隐私保护',
    desc: '所有转写与比对均在本地完成，文件不上传云端，数据安全有保障。',
    icon: LockIcon,
    bgClass: 'bg-green-50',
    iconClass: 'text-green-600',
  },
  {
    title: '视频下载',
    desc: '支持通过 URL 直接下载视频素材，省去额外下载步骤，一站式完成工作流。',
    icon: VideoIcon,
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-600',
  },
  {
    title: '多格式字幕导出',
    desc: '支持 SRT、TXT 等多种字幕格式导出，无缝对接后期制作流程。',
    icon: SubtitleIcon,
    bgClass: 'bg-rose-50',
    iconClass: 'text-rose-600',
  },
]
</script>
