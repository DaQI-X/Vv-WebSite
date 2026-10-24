<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-400 transition-colors mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ t('common.backHome') }}
          </NuxtLink>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ t('docs.title') }}</h1>
          <p class="text-lg text-gray-500 dark:text-gray-400">{{ t('docs.subtitle') }}</p>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          <aside class="lg:col-span-1">
            <nav class="sticky top-24 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4 space-y-1">
              <a
                v-for="section in sections"
                :key="section.id"
                :href="`#${section.id}`"
                class="block px-3 py-2 text-sm rounded-lg transition-colors"
                :class="activeSection === section.id ? 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 dark:text-brand-300 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'"
              >
                {{ t(`docs.nav.${section.key}`) }}
              </a>
            </nav>
          </aside>

          <main class="lg:col-span-3 space-y-16">
            <section id="overview" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">01</span>
                {{ t('docs.nav.overview') }}
              </h2>
              <div class="prose prose-gray max-w-none">
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {{ t('docs.overview.intro') }}
                </p>
                <div class="grid sm:grid-cols-3 gap-4 mt-6">
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">{{ t('docs.overview.card1Title') }}</div>
                    <div class="text-sm text-gray-500 mt-1">{{ t('docs.overview.card1Desc') }}</div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">{{ t('docs.overview.card2Title') }}</div>
                    <div class="text-sm text-gray-500 mt-1">{{ t('docs.overview.card2Desc') }}</div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">{{ t('docs.overview.card3Title') }}</div>
                    <div class="text-sm text-gray-500 mt-1">{{ t('docs.overview.card3Desc') }}</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="install" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">02</span>
                {{ t('docs.nav.install') }}
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.install.reqTitle') }}</h3>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.install.winLabel') }}</strong>{{ t('docs.install.winText') }}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.install.macLabel') }}</strong>{{ t('docs.install.macText') }}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.install.diskLabel') }}</strong>{{ t('docs.install.diskText') }}</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.install.stepsTitle') }}</h3>
                  <ol class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li v-for="i in 4" :key="i" class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{{ i }}</span>
                      <span>{{ t(`docs.install.step${i}`) }}</span>
                    </li>
                  </ol>
                  <p class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
                    {{ t('docs.install.brewLead') }}<CommandCopy class="mt-1" text="brew tap DaQI-X/tap && brew trust DaQI-X/tap && brew install --cask vv-transcribe" />
                    <span class="block mt-2 text-xs text-gray-500 dark:text-gray-400">{{ t('docs.install.brewNoteLead') }}<CommandCopy text="brew reinstall --cask vv-transcribe" />{{ t('docs.install.brewNoteTail') }}</span>
                  </p>
                </div>
              </div>

              <div class="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <h3 class="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {{ t('docs.install.warnTitle') }}
                </h3>
                <p class="text-sm text-amber-700 dark:text-amber-400 mb-3">
                  {{ t('docs.install.warnIntro') }}
                </p>
                <ol class="space-y-3 text-sm text-amber-700 dark:text-amber-400 list-decimal list-inside">
                  <li><strong>{{ t('docs.install.warn1Label') }}</strong><RichText :text="t('docs.install.warn1Text')" /></li>
                  <li><strong>{{ t('docs.install.warn2Label') }}</strong><RichText :text="t('docs.install.warn2Text')" /></li>
                  <li><strong>{{ t('docs.install.warn3Label') }}</strong>{{ t('docs.install.warn3Text') }}<br><CommandCopy class="mt-1" :text="xattrCommand" /></li>
                  <li><strong>{{ t('docs.install.warn4Label') }}</strong>{{ t('docs.install.warn4Text') }}</li>
                </ol>
              </div>
            </section>

            <section id="transcribe" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">03</span>
                {{ t('docs.nav.transcribe') }}
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.transcribe.importTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ t('docs.transcribe.importLead') }}</p>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.dragLabel') }}</strong>{{ t('docs.transcribe.dragText') }}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.pickLabel') }}</strong>{{ t('docs.transcribe.pickText') }}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.urlLabel') }}</strong>{{ t('docs.transcribe.urlText') }}</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.transcribe.urlPrepTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <RichText :text="t('docs.transcribe.urlPrepIntro')" />
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.urlPrep1Label') }}</strong>{{ t('docs.transcribe.urlPrep1Text') }}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.urlPrep2Label') }}</strong><RichText :text="t('docs.transcribe.urlPrep2Text')" /></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.urlPrep3Label') }}</strong><RichText :text="t('docs.transcribe.urlPrep3Text')" /></span>
                    </li>
                  </ul>
                  <div class="mt-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-400">
                    <RichText :text="t('docs.transcribe.urlPrepNote')" />
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.transcribe.formatsTitle') }}</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fmt in formats" :key="fmt" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">{{ fmt }}</span>
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.transcribe.langTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <RichText :text="t('docs.transcribe.langText')" />
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.langNoAutoLabel') }}</strong>{{ t('docs.transcribe.langNoAutoText') }}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>{{ t('docs.transcribe.langProofreadLabel') }}</strong>{{ t('docs.transcribe.langProofreadText') }}</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.transcribe.processTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {{ t('docs.transcribe.processText') }}
                  </p>
                  <div class="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
                    <strong>{{ t('docs.transcribe.tipLabel') }}</strong>{{ t('docs.transcribe.tipText') }}
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.transcribe.engineTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <RichText :text="t('docs.transcribe.engineText')" />
                  </p>
                  <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-400">
                    <strong>{{ t('docs.transcribe.engineNoteLabel') }}</strong>{{ t('docs.transcribe.engineNoteText') }}
                  </div>
                </div>
              </div>
            </section>

            <section id="reference" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">04</span>
                {{ t('docs.nav.reference') }}
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.reference.uploadTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {{ t('docs.reference.uploadLead') }}
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li v-for="i in 3" :key="i" class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{{ t(`docs.reference.upload${i}`) }}</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.reference.diffTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('docs.reference.diffLead') }}</p>
                  <div class="space-y-2 text-sm">
                    <!-- 英文下「改前 → 改后 + 说明」一行放不下，允许换行 -->
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span class="px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-600 rounded line-through">{{ t('docs.reference.diffFrom') }}</span>
                      <span class="text-gray-400">→</span>
                      <span class="px-3 py-1 bg-green-50 dark:bg-green-950/50 text-green-600 rounded">{{ t('docs.reference.diffTo') }}</span>
                      <span class="text-gray-500">{{ t('docs.reference.diffNote') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ai-correction" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">05</span>
                {{ t('docs.nav.correction') }}
              </h2>
              <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {{ t('docs.correction.lead') }}
                </p>
                <div class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg">🖥️</span>
                    <div>
                      <strong class="text-gray-900 dark:text-white">{{ t('docs.correction.item1Title') }}</strong>
                      <p class="mt-1">{{ t('docs.correction.item1Desc') }}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg">🤖</span>
                    <div>
                      <strong class="text-gray-900 dark:text-white">{{ t('docs.correction.item2Title') }}</strong>
                      <p class="mt-1">{{ t('docs.correction.item2Desc') }}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg">✅</span>
                    <div>
                      <strong class="text-gray-900 dark:text-white">{{ t('docs.correction.item3Title') }}</strong>
                      <p class="mt-1">{{ t('docs.correction.item3Desc') }}</p>
                    </div>
                  </div>
                </div>
                <div class="mt-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-300">
                  <strong>{{ t('docs.correction.noteLabel') }}</strong>{{ t('docs.correction.noteText') }}
                </div>
              </div>
            </section>

            <section id="export" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">06</span>
                {{ t('docs.nav.export') }}
              </h2>
              <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ t('docs.export.lead') }}</p>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div v-for="fmt in exportFormats" :key="fmt" class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">{{ t(`docs.export.${fmt}Title`) }}</div>
                    <div class="text-xs text-gray-500">{{ t(`docs.export.${fmt}Desc`) }}</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="api-config" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">07</span>
                {{ t('docs.nav.api') }}
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.api.aboutTitle') }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {{ t('docs.api.aboutText') }}
                  </p>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.api.vendorsTitle') }}</h3>
                  <div class="grid sm:grid-cols-2 gap-3 text-sm">
                    <div v-for="i in 4" :key="i" class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div class="font-medium text-gray-900 dark:text-white">{{ t(`docs.api.vendor${i}Name`) }}</div>
                      <div class="text-xs text-gray-500 mt-1">{{ t(`docs.api.vendor${i}Desc`) }}</div>
                    </div>
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('docs.api.stepsTitle') }}</h3>
                  <ol class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li v-for="i in 5" :key="i" class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{{ i }}</span>
                      <span>{{ t(`docs.api.step${i}`) }}</span>
                    </li>
                  </ol>
                </div>

                <div class="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
                  <strong>{{ t('docs.api.noteLabel') }}</strong>{{ t('docs.api.noteText') }}
                </div>
              </div>
            </section>

            <section id="faq" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">08</span>
                {{ t('docs.nav.faq') }}
              </h2>
              <div class="space-y-4">
                <div v-for="id in faqIds" :key="id" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-5">
                  <h3 class="font-medium text-gray-900 dark:text-white mb-2">{{ t(`docs.faq.${id}.q`) }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ t(`docs.faq.${id}.a`) }}</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('meta.docs.title'),
  description: () => t('meta.docs.description'),
  ogTitle: () => t('meta.docs.title'),
  ogDescription: () => t('meta.docs.description'),
  twitterTitle: () => t('meta.docs.title'),
  twitterDescription: () => t('meta.docs.description'),
})

const activeSection = ref('overview')

// 命令与扩展名与语言无关
const xattrCommand = 'xattr -cr "/Applications/Vv Transcribe.app"'
const formats = ['MP4', 'MOV', 'MKV', 'AVI', 'WEBM', 'FLV', 'MP3', 'WAV', 'M4A', 'FLAC', 'OGG', 'WMA']
const exportFormats = ['srt', 'txt', 'json', 'md']

// id 是页面锚点（中英共用），key 对应语言包里的导航文案
const sections = [
  { id: 'overview', key: 'overview' },
  { id: 'install', key: 'install' },
  { id: 'transcribe', key: 'transcribe' },
  { id: 'reference', key: 'reference' },
  { id: 'ai-correction', key: 'correction' },
  { id: 'export', key: 'export' },
  { id: 'api-config', key: 'api' },
  { id: 'faq', key: 'faq' },
]

const faqIds = ['net', 'language', 'engine', 'appManagement', 'urlFailed', 'accuracy', 'security', 'speed', 'cancel', 'referenceFormat', 'update', 'slowDownload']

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-20% 0px -70% 0px' }
  )

  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  }
})
</script>
