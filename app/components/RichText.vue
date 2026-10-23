<template>
  <span
    ><template v-for="(part, i) in parts" :key="i"
      ><strong v-if="part.bold" :class="strongClass">{{ part.text }}</strong><span v-else>{{ part.text }}</span></template
    ></span
  >
</template>

<script setup lang="ts">
/**
 * 文案里用 ** 包起来的片段渲染成 <strong>，避免把 HTML 塞进语言包再走 v-html。
 */
const props = defineProps<{ text: string; strongClass?: string }>()

const parts = computed(() => {
  const out: { bold: boolean; text: string }[] = []
  let rest = props.text
  while (rest.length) {
    const start = rest.indexOf('**')
    const end = start < 0 ? -1 : rest.indexOf('**', start + 2)
    if (end < 0) {
      out.push({ bold: false, text: rest })
      break
    }
    if (start > 0) out.push({ bold: false, text: rest.slice(0, start) })
    out.push({ bold: true, text: rest.slice(start + 2, end) })
    rest = rest.slice(end + 2)
  }
  return out
})
</script>
