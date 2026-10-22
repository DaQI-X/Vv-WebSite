<template>
  <span class="inline-flex items-stretch align-middle rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden max-w-full">
    <code class="px-2 py-1 text-xs font-mono text-gray-800 dark:text-gray-200 whitespace-nowrap overflow-x-auto">{{ text }}</code>
    <button
      type="button"
      class="px-2.5 py-1 text-xs shrink-0 border-l border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      :aria-label="`复制命令：${text}`"
      @click="copy"
    >{{ label }}</button>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()

const label = ref('复制')
let timer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
    label.value = '已复制'
  } catch {
    label.value = '复制失败'
  }
  clearTimeout(timer)
  timer = setTimeout(() => { label.value = '复制' }, 2000)
}

onUnmounted(() => clearTimeout(timer))
</script>
