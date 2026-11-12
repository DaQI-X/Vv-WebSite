<template>
  <section :id="id" class="scroll-mt-24">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
      <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm shrink-0">{{ String(n).padStart(2, '0') }}</span>
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ n: number; title: string; id?: string }>()
</script>