<template>
  <div
    class="rounded-xl border p-5"
    :class="type === 'warn'
      ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
      : 'bg-brand-50 dark:bg-brand-950/50 border-brand-100 dark:border-brand-900'"
  >
    <h3
      v-if="title"
      class="font-semibold mb-2 flex items-center gap-2 text-sm"
      :class="type === 'warn' ? 'text-amber-800 dark:text-amber-300' : 'text-brand-800 dark:text-brand-300'"
    >
      <svg v-if="type === 'warn'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <svg v-else class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {{ title }}
    </h3>
    <div
      class="text-sm leading-relaxed"
      :class="type === 'warn' ? 'text-amber-700 dark:text-amber-400' : 'text-brand-800 dark:text-brand-200'"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'tip' | 'warn'; title?: string }>(), { type: 'tip' })
</script>