<template>
  <section class="pt-8 pb-20 md:pt-12 md:pb-28 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">{{ t('compare.title') }}</h2>
      <p class="section-desc">{{ t('compare.desc') }}</p>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[640px]">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">{{ t('compare.thFeature') }}</th>
              <th class="text-center py-4 px-4 text-sm font-bold text-brand-700 dark:text-brand-300 bg-brand-50/50 dark:bg-brand-950/50 rounded-t-xl">
                <div class="flex flex-col items-center gap-1">
                  <span>Vv Transcribe</span>
                  <span class="text-xs font-normal text-brand-500 dark:text-brand-400">{{ t('common.recommended') }}</span>
                </div>
              </th>
              <th class="text-center py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">{{ t('compare.thOnline') }}</th>
              <th class="text-center py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">{{ t('compare.thManual') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in rows" :key="row.id" :class="i % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/50' : ''">
              <td class="py-4 px-4 text-sm text-gray-700 dark:text-gray-300 font-medium">{{ t(`compare.rows.${row.id}`) }}</td>
              <td class="py-4 px-4 text-center bg-brand-50/30 dark:bg-brand-950/30">
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.online === 'yes'" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span v-else-if="row.online === 'partial'" class="text-amber-500 dark:text-amber-400 text-xs">{{ t('common.partial') }}</span>
                <span v-else class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-400 dark:text-red-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span v-if="row.manual === 'yes'" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span v-else-if="row.manual === 'partial'" class="text-amber-500 dark:text-amber-400 text-xs">{{ t('common.partial') }}</span>
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
          <div class="text-2xl font-bold text-green-700 dark:text-green-400">{{ t('compare.costVvVal') }}</div>
          <div class="text-sm text-green-600 dark:text-green-500 mt-1">{{ t('compare.costVv') }}</div>
        </div>
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900">
          <div class="text-2xl font-bold text-amber-700 dark:text-amber-400">{{ t('compare.costOnlineVal') }}</div>
          <div class="text-sm text-amber-600 dark:text-amber-500 mt-1">{{ t('compare.costOnline') }}</div>
        </div>
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900">
          <div class="text-2xl font-bold text-red-700 dark:text-red-400">{{ t('compare.costManualVal') }}</div>
          <div class="text-sm text-red-600 dark:text-red-500 mt-1">{{ t('compare.costManual') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const rows = [
  { id: 'local', vv: true, online: 'no', manual: 'yes' },
  { id: 'asr', vv: true, online: 'yes', manual: 'no' },
  { id: 'diff', vv: true, online: 'no', manual: 'partial' },
  { id: 'correction', vv: true, online: 'partial', manual: 'no' },
  { id: 'api', vv: true, online: 'no', manual: 'no' },
  { id: 'export', vv: true, online: 'partial', manual: 'no' },
  { id: 'free', vv: true, online: 'no', manual: 'no' },
  { id: 'offline', vv: true, online: 'no', manual: 'yes' },
]
</script>
