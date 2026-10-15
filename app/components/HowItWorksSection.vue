<template>
  <section id="how-it-works" class="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">简单三步，轻松完成</h2>
      <p class="section-desc">从音视频到精准字幕，只需几分钟</p>

      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        <div v-for="(step, index) in steps" :key="step.title" class="relative text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-600/25">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ step.title }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ step.desc }}</p>
          <div v-if="index < steps.length - 1" class="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-brand-200 dark:border-brand-800"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: '导入音视频',
    desc: '拖拽或选择本地音视频文件，也可粘贴 URL 在线下载。支持 mp4、mp3、wav 等主流格式。',
  },
  {
    title: 'AI 自动转写',
    desc: '本地 Whisper 引擎高速转写，实时显示进度。转写完成后可上传参考稿进行比对。',
  },
  {
    title: '比对与纠错',
    desc: '自动 Diff 比对字幕与参考稿，点击「AI 纠错」获取智能分析与修正建议，确认后导出字幕。',
  },
]
</script>
