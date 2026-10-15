<template>
  <section class="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">用户怎么说</h2>
      <p class="section-desc">来自媒体从业者的真实反馈</p>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="review in reviews" :key="review.name" class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">"{{ review.text }}"</p>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center text-brand-700 dark:text-brand-300 text-sm font-semibold">
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">{{ review.name }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: '张编辑',
    role: '省级电视台 · 字幕编辑',
    text: '以前校对字幕要人工逐字对比播出稿，一期节目花两小时。现在用 Vv Transcribe 自动比对加 AI 纠错，半小时搞定，而且准确率比人工还高。',
  },
  {
    name: '李导播',
    role: '市级广电中心 · 导播',
    text: '最看重的是本地处理这一点。我们的节目内容敏感，不能上传到任何云端。Vv Transcribe 完全本地运行，用着放心。',
  },
  {
    name: '王记者',
    role: '新闻机构 · 记者',
    text: '采访录音转写又快又准，直接生成文字稿。以前要外包给转写公司，现在自己就能搞定，省了不少钱。',
  },
]
</script>
