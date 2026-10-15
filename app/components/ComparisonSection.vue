<template>
  <section class="pt-8 pb-20 md:pt-12 md:pb-28 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">为什么选择 Vv Transcribe</h2>
      <p class="section-desc">与主流方案的对比，优势一目了然</p>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[640px]">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">功能特性</th>
              <th class="text-center py-4 px-4 text-sm font-bold text-brand-700 dark:text-brand-300 bg-brand-50/50 dark:bg-brand-950/50 rounded-t-xl">
                <div class="flex flex-col items-center gap-1">
                  <span>Vv Transcribe</span>
                  <span class="text-xs font-normal text-brand-500 dark:text-brand-400">推荐</span>
                </div>
              </th>
              <th class="text-center py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">在线转写工具</th>
              <th class="text-center py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">人工校对</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in rows" :key="row.feature" :class="i % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/50' : ''">
              <td class="py-4 px-4 text-sm text-gray-700 dark:text-gray-300 font-medium">{{ row.feature }}</td>
              <td class="py-4 px-4 text-center bg-brand-50/30 dark:bg-brand-950/30">
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.online === 'yes'" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span v-else-if="row.online === 'partial'" class="text-amber-500 dark:text-amber-400 text-xs">部分</span>
                <span v-else class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-400 dark:text-red-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.manual === 'yes'" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span v-else-if="row.manual === 'partial'" class="text-amber-500 dark:text-amber-400 text-xs">部分</span>
                <span v-else class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-400 dark:text-red-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 grid sm:grid-cols-3 gap-4 text-center">
        <div class="p-4 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-100 dark:border-green-900">
          <div class="text-2xl font-bold text-green-700 dark:text-green-400">¥0</div>
          <div class="text-sm text-green-600 dark:text-green-500 mt-1">Vv Transcribe 永久免费</div>
        </div>
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900">
          <div class="text-2xl font-bold text-amber-700 dark:text-amber-400">¥99+/月</div>
          <div class="text-sm text-amber-600 dark:text-amber-500 mt-1">在线转写工具订阅费</div>
        </div>
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900">
          <div class="text-2xl font-bold text-red-700 dark:text-red-400">¥200+/小时</div>
          <div class="text-sm text-red-600 dark:text-red-500 mt-1">人工校对服务费</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { feature: '本地数据处理', vv: true, online: 'no', manual: 'yes' },
  { feature: 'AI 自动转写', vv: true, online: 'yes', manual: 'no' },
  { feature: '参考稿 Diff 比对', vv: true, online: 'no', manual: 'partial' },
  { feature: 'AI 智能纠错', vv: true, online: 'partial', manual: 'no' },
  { feature: 'API 配置扩展', vv: true, online: 'no', manual: 'no' },
  { feature: '多格式字幕导出', vv: true, online: 'partial', manual: 'no' },
  { feature: '永久免费', vv: true, online: 'no', manual: 'no' },
  { feature: '无需联网', vv: true, online: 'no', manual: 'yes' },
]
</script>
