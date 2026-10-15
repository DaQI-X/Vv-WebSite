<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
    <div class="absolute top-20 left-1/4 w-96 h-96 bg-brand-200/30 dark:bg-brand-900/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>

    <div class="relative max-w-6xl mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 rounded-full text-brand-700 dark:text-brand-300 text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
        面向媒体人的专业工具
      </div>

      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
        AI 驱动的
        <br />
        <span class="text-brand-600 dark:text-brand-400">字幕转写与校对</span>
      </h1>

      <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        精准比对字幕与播出稿，AI 智能纠错，帮助广电从业者
        <br class="hidden md:block" />
        杜绝播出事故，让每一次播出都安心无忧
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a href="/#download" class="btn-primary text-lg px-10 py-4">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          免费下载
        </a>
        <a href="/#features" class="btn-secondary text-lg px-10 py-4">了解更多</a>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <div class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-brand-100 dark:border-gray-800 shadow-xl shadow-brand-100/20 dark:shadow-black/20 p-6 md:p-8">
          <div class="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Vv Transcribe" class="h-8 w-auto" />
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">正在转写：采访片段_01.mp4</span>
              <span class="px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs rounded-full font-medium">转写中</span>
            </div>
            <div class="ml-auto flex items-center gap-2">
              <div class="w-32 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="w-3/4 h-full bg-brand-500 rounded-full transition-all duration-1000"></div>
              </div>
              <span class="text-brand-600 dark:text-brand-400 text-sm font-medium">75%</span>
            </div>
          </div>

          <VoiceWaveAnimation />

          <div class="mt-6 space-y-2 text-left">
            <div class="flex gap-2 text-sm">
              <span class="text-gray-400 dark:text-gray-500 shrink-0 w-10">00:12</span>
              <span class="text-gray-700 dark:text-gray-300">各位观众朋友大家好，欢迎收看今天的节目。</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-gray-400 dark:text-gray-500 shrink-0 w-10">00:18</span>
              <span class="text-red-400 line-through opacity-60">今天邀请到了</span>
              <span class="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded font-medium">今天我们邀请到了</span>
              <span class="text-xs text-brand-500 dark:text-brand-400 ml-1 bg-brand-50 dark:bg-brand-950 px-1.5 py-0.5 rounded">AI 已纠错</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-gray-400 dark:text-gray-500 shrink-0 w-10">00:25</span>
              <span class="text-gray-700 dark:text-gray-300">某某领域的资深专家。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
