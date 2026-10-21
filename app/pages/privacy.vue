<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="mb-12">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-400 transition-colors mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </NuxtLink>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">隐私政策</h1>
          <p class="text-gray-500 dark:text-gray-400">最后更新：2026 年 10 月 21 日</p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">概述</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Vv Transcribe（以下简称"本应用"）是一款面向媒体专业人士的本地字幕转写与校对工具。本隐私政策说明我们如何收集、使用和保护您的信息。核心原则：<strong>默认全程在本地处理</strong>，只有在您主动配置第三方 API 之后，相关数据才会发往您指定的服务商。
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">数据本地处理</h2>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span>本地模式下的音视频转写全程在本机完成，文件不上传任何服务器</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span>参考稿比对在本地完成，不上传播出稿内容</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span>转写结果和字幕文件仅保存在您的设备上</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">API 配置（可选）</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              AI 纠错需要配置第三方 AI API（如 OpenAI、通义千问等）才能使用；若您把「转写配置」里的转写模式切到云端，转写也会请求您指定的 API 端点。此时：
            </p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01" /></svg>
                <span>字幕文本（AI 纠错）或音频（云端转写）将发送至您配置的第三方 API 服务商</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01" /></svg>
                <span>数据处理受该 API 服务商的隐私政策约束</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01" /></svg>
                <span>API Key 仅保存在您的本地设备上，不会上传</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">我们收集的信息</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">本应用不收集任何个人信息。以下数据仅在本地存储：</p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>应用设置和偏好配置</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>API 配置信息（如已配置）</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>使用日志（仅用于本地问题排查）</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">模型下载</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              首次转写时，本应用需要从 Hugging Face 下载 Whisper 模型文件（base 模型，约 150MB，国内经 hf-mirror.com 镜像加速）。下载过程仅涉及模型文件传输，不上传任何用户数据。模型文件下载后缓存在本地，后续使用无需重复下载。
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">联系我们</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              如对本隐私政策有任何疑问，请通过
              <a :href="config.public.githubRepo + '/issues'" target="_blank" rel="noopener" class="text-brand-600 dark:text-brand-400 hover:underline">GitHub Issues</a>
              或邮件
              <a :href="`mailto:${config.public.contactEmail}`" class="text-brand-600 dark:text-brand-400 hover:underline">{{ config.public.contactEmail }}</a>
              联系我们。
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useHead({ title: '隐私政策 - Vv Transcribe' })
</script>
