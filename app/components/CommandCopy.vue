<template>
  <span class="inline-flex items-stretch align-middle rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden max-w-full">
    <!-- 命令含空格，窄屏按词断行即可；不给 nowrap，否则整条命令的最小宽度会撑破外层 grid -->
    <code class="px-2 py-1 text-xs font-mono text-gray-800 dark:text-gray-200 break-words min-w-0">{{ text }}</code>
    <button
      type="button"
      class="px-2.5 py-1 text-xs shrink-0 border-l border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      :aria-label="t('common.copyCommandAria', { text })"
      @click="copy"
    >{{ label }}</button>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
const { t } = useI18n()

const state = ref<'idle' | 'copied' | 'failed'>('idle')
const label = computed(() =>
  state.value === 'copied' ? t('common.copied') : state.value === 'failed' ? t('common.copyFailed') : t('common.copy')
)
let timer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
    state.value = 'copied'
  } catch {
    state.value = 'failed'
  }
  clearTimeout(timer)
  timer = setTimeout(() => { state.value = 'idle' }, 2000)
}

onUnmounted(() => clearTimeout(timer))
</script>
