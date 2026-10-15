<template>
  <section id="use-cases" class="py-20 md:py-28 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">适用场景</h2>
      <p class="section-desc">无论你在哪个环节，Vv Transcribe 都能帮到你</p>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="scene in scenes" :key="scene.title" class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900">
          <div class="text-3xl mb-4">{{ scene.emoji }}</div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ scene.title }}</h3>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{{ scene.desc }}</p>
          <ul class="space-y-2">
            <li v-for="item in scene.items" :key="item" class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-4 h-4 text-brand-500 dark:text-brand-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scenes = [
  {
    emoji: '\uD83D\uDCFA',
    title: '广播电视播出',
    desc: '节目播出前校对字幕，确保与审定稿完全一致，杜绝播出事故。',
    items: ['字幕与审定稿自动比对', 'AI 标注差异并给出修正建议', '支持批量处理，提高效率'],
  },
  {
    emoji: '\uD83C\uDFAC',
    title: '新闻采编制作',
    desc: '采访素材快速转写，自动生成文字稿，加速新闻制作流程。',
    items: ['采访录音/录像一键转写', '自动生成可编辑文字稿', '多格式导出对接编辑系统'],
  },
  {
    emoji: '\uD83C\uDF99\uFE0F',
    title: '播客与自媒体',
    desc: '音视频内容快速生成字幕，方便发布文字版或添加字幕轨。',
    items: ['长音频/视频高效转写', '生成 SRT 字幕文件', '本地处理保护原创内容'],
  },
  {
    emoji: '\uD83C\uDFE2',
    title: '企业与会议',
    desc: '会议录音转写为文字记录，方便存档、检索和分享。',
    items: ['会议录音批量转写', '清晰的时间轴标记', '文字记录方便归档检索'],
  },
]
</script>
