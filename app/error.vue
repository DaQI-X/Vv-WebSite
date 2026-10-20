<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-br from-brand-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <img src="/logo.png" alt="Vv Transcribe" class="h-14 w-auto mb-10" />
    <div class="text-6xl md:text-7xl font-bold text-brand-600 dark:text-brand-400 leading-none mb-5">
      {{ statusCode }}
    </div>
    <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
      {{ isNotFound ? '页面不存在' : '页面出错了' }}
    </h1>
    <p class="text-gray-500 dark:text-gray-400 max-w-md mb-10 leading-relaxed">
      {{ isNotFound ? '这个地址可能已经变更或下架，从首页重新出发吧。' : (error?.message || '请稍后重试。') }}
    </p>
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <NuxtLink to="/" class="btn-primary">返回首页</NuxtLink>
      <NuxtLink to="/docs" class="btn-secondary">查看使用文档</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const statusCode = computed(() => props.error?.statusCode || 500)
const isNotFound = computed(() => statusCode.value === 404)

useHead({
  title: computed(() => `${isNotFound.value ? '页面不存在' : '出错了'} - Vv Transcribe`),
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>
