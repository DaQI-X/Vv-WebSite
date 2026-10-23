<template>
  <section id="how-it-works" class="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="section-title">{{ t('flow.title') }}</h2>
      <p class="section-desc">{{ t('flow.desc') }}</p>

      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        <div v-for="(step, index) in steps" :key="step" class="relative text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-600/25">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t(`flow.steps.${step}.title`) }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ t(`flow.steps.${step}.desc`) }}</p>
          <div v-if="index < steps.length - 1" class="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-brand-200 dark:border-brand-800"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const steps = ['import', 'run', 'review']
</script>
