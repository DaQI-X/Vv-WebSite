<template>
  <GuideSection :n="n" :title="t('guides.faqTitle')" id="faq">
    <div class="space-y-4">
      <div v-for="id in ids" :key="id" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
        <h3 class="font-medium text-gray-900 dark:text-white mb-2">{{ t(`${prefix}.${id}.q`) }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"><RichText :text="t(`${prefix}.${id}.a`)" /></p>
      </div>
    </div>
  </GuideSection>
</template>

<script setup lang="ts">
defineProps<{ prefix: string; ids: string[]; n: number }>()
const { t } = useI18n()
</script>