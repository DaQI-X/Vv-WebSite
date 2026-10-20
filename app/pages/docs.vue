<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="pt-24 pb-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-400 transition-colors mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </NuxtLink>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Vv Transcribe 使用文档</h1>
          <p class="text-lg text-gray-500 dark:text-gray-400">从安装到精通，全面了解 Vv Transcribe 的每一个功能</p>
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
                {{ section.title }}
              </a>
            </nav>
          </aside>

          <main class="lg:col-span-3 space-y-16">
            <section id="overview" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">01</span>
                产品概述
              </h2>
              <div class="prose prose-gray max-w-none">
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Vv Transcribe 是一款面向媒体专业人士的 AI 字幕转写与校对工具。基于本地 Whisper 语音识别引擎，支持音视频文件的高速转写，并提供参考稿比对、AI 智能纠错等核心功能，帮助广播电视从业者精准校对字幕，杜绝播出事故。
                </p>
                <div class="grid sm:grid-cols-3 gap-4 mt-6">
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">本地运行</div>
                    <div class="text-sm text-gray-500 mt-1">文件不上传云端，数据安全</div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">零 API 费用</div>
                    <div class="text-sm text-gray-500 mt-1">开源引擎，无持续成本</div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">多格式支持</div>
                    <div class="text-sm text-gray-500 mt-1">SRT/TXT 等多种导出格式</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="install" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">02</span>
                安装与启动
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">系统要求</h3>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Windows：</strong>Windows 10/11，64 位系统，建议 8GB 以上内存</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>macOS：</strong>macOS 12+，支持 Intel 和 Apple Silicon (M1/M2/M3)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>磁盘空间：</strong>首次运行需下载约 1-2GB 模型文件</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">安装步骤</h3>
                  <ol class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <span>从官网下载对应系统的安装包（Windows .exe / macOS .dmg）</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <span>运行安装程序，按提示完成安装</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <span>首次启动时，应用会自动下载 Whisper 模型（约 1-2GB），请耐心等待</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                      <span>模型下载完成后即可开始使用</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <h3 class="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  首次打开提示「无法验证开发者 / 已损坏」或「Windows 已保护你的电脑」？
                </h3>
                <p class="text-sm text-amber-700 dark:text-amber-400 mb-3">
                  这是正常现象。Vv Transcribe 是个人开源项目，暂未购买付费代码签名证书，系统因此会拦截提示——应用本身安全、功能完整、数据全程本地处理。按下面方法即可正常打开：
                </p>
                <ul class="space-y-2 text-sm text-amber-700 dark:text-amber-400">
                  <li><strong>macOS：</strong>在「应用程序」里右键点 Vv Transcribe → 选「打开」→ 弹窗再点「打开」；若仍提示已损坏，在终端执行 <code class="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-800/40 rounded text-xs">xattr -cr "/Applications/Vv Transcribe.app"</code>。</li>
                  <li><strong>Windows：</strong>SmartScreen 弹窗点「更多信息」→「仍要运行」即可。</li>
                </ul>
              </div>
            </section>

            <section id="transcribe" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">03</span>
                音视频转写
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">导入文件</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">支持以下方式导入音视频：</p>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>拖拽导入：</strong>直接将文件拖入应用窗口</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>文件选择：</strong>点击「导入文件」按钮选择本地文件</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>URL 下载：</strong>粘贴视频 URL，应用自动下载并导入</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">支持格式</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fmt in formats" :key="fmt" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">{{ fmt }}</span>
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">转写过程</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    点击「开始转写」后，Whisper 引擎将在本地对音频进行语音识别。转写过程中会实时显示进度条和已识别的文字内容。转写速度取决于音频长度和计算机性能，通常 1 小时音频约需 5-15 分钟。
                  </p>
                  <div class="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
                    <strong>提示：</strong>首次转写需要下载 AI 模型文件，请确保网络连接正常。后续转写将使用本地缓存的模型，无需联网。
                  </div>
                </div>
              </div>
            </section>

            <section id="reference" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">04</span>
                参考稿比对
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">上传参考稿</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    转写完成后，可上传播出稿或参考稿进行比对。参考稿用于与转写结果逐字对比，快速发现差异。
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span>点击「上传参考」按钮，选择 TXT 或 DOC 文件</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span>每次仅支持上传一份参考稿，上传后按钮将禁用</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span>如需更换参考稿，先点击参考稿气泡上的清除按钮</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">Diff 比对结果</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">比对结果以颜色标注差异：</p>
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center gap-3">
                      <span class="px-3 py-1 bg-red-50 dark:bg-red-950/50 text-red-600 rounded line-through">转写结果</span>
                      <span class="text-gray-400">→</span>
                      <span class="px-3 py-1 bg-green-50 dark:bg-green-950/50 text-green-600 rounded">参考稿内容</span>
                      <span class="text-gray-500">— 差异部分高亮显示</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ai-correction" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">05</span>
                AI 智能纠错
              </h2>
              <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  完成参考稿比对后，点击「AI 纠错」按钮，AI 将自动分析所有差异，给出纠错建议与原因解释。
                </p>
                <div class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg"></span>
                    <div>
                      <strong class="text-gray-900">差异分析</strong>
                      <p class="mt-1">AI 逐一分析每个差异点，判断是转写错误还是参考稿表述不同</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg">💡</span>
                    <div>
                      <strong class="text-gray-900">纠错建议</strong>
                      <p class="mt-1">针对转写错误，AI 给出修正建议，一键采纳即可更新字幕</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg"></span>
                    <div>
                      <strong class="text-gray-900">参考稿问题</strong>
                      <p class="mt-1">如发现参考稿本身存在问题（如错别字），AI 也会标注提醒</p>
                    </div>
                  </div>
                </div>
                <div class="mt-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-blue-800 dark:text-blue-300">
                  <strong>注意：</strong>AI 纠错过程中，参考稿的清除按钮将被禁用，防止误操作中断分析。
                </div>
              </div>
            </section>

            <section id="export" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">06</span>
                导出字幕
              </h2>
              <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">校对完成后，可将字幕导出为多种格式：</p>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">SRT 格式</div>
                    <div class="text-xs text-gray-500">标准字幕格式，带时间轴，可直接导入视频编辑软件</div>
                  </div>
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">TXT 格式</div>
                    <div class="text-xs text-gray-500">纯文本格式，方便复制粘贴和二次编辑</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="api-config" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">07</span>
                API 配置
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">功能说明</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Vv Transcribe 默认使用本地 Whisper 引擎进行转写和纠错，所有处理在本地完成，无需联网。同时支持接入第三方 AI 厂商 API，自定义转写和纠错引擎，灵活适配不同场景需求。
                  </p>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">支持的 API 厂商</h3>
                  <div class="grid sm:grid-cols-2 gap-3 text-sm">
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div class="font-medium text-gray-900 dark:text-white">OpenAI</div>
                      <div class="text-xs text-gray-500 mt-1">GPT-4o / Whisper API</div>
                    </div>
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div class="font-medium text-gray-900 dark:text-white">通义千问</div>
                      <div class="text-xs text-gray-500 mt-1">阿里云 DashScope</div>
                    </div>
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div class="font-medium text-gray-900 dark:text-white">DeepSeek</div>
                      <div class="text-xs text-gray-500 mt-1">DeepSeek API</div>
                    </div>
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div class="font-medium text-gray-900 dark:text-white">自定义 OpenAI 兼容</div>
                      <div class="text-xs text-gray-500 mt-1">任何兼容 OpenAI 格式的 API</div>
                    </div>
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 mb-3">配置步骤</h3>
                  <ol class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <span>打开应用，进入「设置」→「API 配置」</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <span>选择 API 厂商，填写 API Key 和 Base URL</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <span>选择要使用 API 的功能（转写 / 纠错 / 两者）</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                      <span>点击「测试连接」验证配置是否正确</span>
                    </li>
                  </ol>
                </div>

                <div class="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
                  <strong>注意：</strong>使用第三方 API 会产生相应费用，费用由 API 厂商收取，与 Vv Transcribe 无关。未配置 API 时，所有功能均使用本地引擎，完全免费。
                </div>
              </div>
            </section>

            <section id="faq" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">08</span>
                常见问题
              </h2>
              <div class="space-y-4">
                <div v-for="(item, i) in faqs" :key="i" class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-5">
                  <h3 class="font-medium text-gray-900 dark:text-white mb-2">{{ item.q }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.a }}</p>
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
useHead({ title: '使用文档 - Vv Transcribe' })

const activeSection = ref('overview')

const sections = [
  { id: 'overview', title: '产品概述' },
  { id: 'install', title: '安装与启动' },
  { id: 'transcribe', title: '音视频转写' },
  { id: 'reference', title: '参考稿比对' },
  { id: 'ai-correction', title: 'AI 智能纠错' },
  { id: 'export', title: '导出字幕' },
  { id: 'api-config', title: 'API 配置' },
  { id: 'faq', title: '常见问题' },
]

const formats = ['MP4', 'MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A', 'WEBM', 'MOV', 'AVI']

const faqs = [
  {
    q: '首次使用需要联网吗？',
    a: '是的，首次启动时需要下载 Whisper AI 模型（约 1-2GB）。下载完成后，后续所有转写操作均在本地完成，无需联网。',
  },
  {
    q: '转写支持哪些语言？',
    a: '目前支持中文（普通话）和英文的语音转写，后续版本将增加更多语言支持。',
  },
  {
    q: '转写准确率如何？',
    a: '基于 OpenAI Whisper 引擎，在清晰音频条件下中文转写准确率可达 95% 以上。配合参考稿比对和 AI 纠错功能，可进一步提升最终字幕的准确性。',
  },
  {
    q: '文件数据安全吗？',
    a: '所有转写和比对均在本地完成，文件不会上传到任何云端服务器。您的音视频内容和字幕数据完全保存在本地。',
  },
  {
    q: '为什么转写速度有时较慢？',
    a: '转写速度取决于音频长度、计算机性能（CPU/GPU）以及模型大小。Apple Silicon Mac 通常速度最快。1 小时音频一般需 5-15 分钟。',
  },
  {
    q: '参考稿支持什么格式？',
    a: '目前支持 TXT 纯文本格式。建议将 Word 文档另存为 TXT 后上传。',
  },
]

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
