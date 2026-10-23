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
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">本地转写零费用</div>
                    <div class="text-sm text-gray-500 mt-1">开源引擎，不依赖付费 API</div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-4">
                    <div class="text-2xl font-bold text-brand-600 dark:text-brand-400">多格式支持</div>
                    <div class="text-sm text-gray-500 mt-1">SRT/TXT/JSON/Markdown 导出</div>
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
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">系统要求</h3>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Windows：</strong>Windows 10/11，64 位系统，建议 8GB 以上内存</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>macOS：</strong>macOS 12+，支持 Intel 和 Apple Silicon（M 系列全系）</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>磁盘空间：</strong>安装包约 307MB（Apple 芯片）/ 348MB（Intel Mac）/ 413MB（Windows），已内置链接转写组件；首次转写再下载约 150MB 模型文件</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">安装步骤</h3>
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
                      <span>首次转写时，应用会自动下载 Whisper 模型（base，约 150MB），请耐心等待</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                      <span>模型下载完成后即可开始使用</span>
                    </li>
                  </ol>
                  <p class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
                    macOS 也可以用 Homebrew 安装：<CommandCopy class="mt-1" text="brew tap DaQI-X/tap && brew trust DaQI-X/tap && brew install --cask vv-transcribe" />
                    <span class="block mt-2 text-xs text-gray-500 dark:text-gray-400">Homebrew 7 之后必须先 trust 才允许加载第三方 tap；以后拿新版用 <CommandCopy text="brew reinstall --cask vv-transcribe" />，cask 跟的是 latest，upgrade 不会提示有新版。</span>
                  </p>
                </div>
              </div>

              <div class="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <h3 class="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  首次打开提示「无法验证开发者 / 已损坏」或「Windows 已保护你的电脑」？
                </h3>
                <p class="text-sm text-amber-700 dark:text-amber-400 mb-3">
                  这是正常现象。Vv Transcribe 是个人开源项目，暂未购买付费代码签名证书，系统因此会拦截提示——应用本身安全、功能完整，本地模式下的转写与比对不出这台电脑。按下面顺序操作即可正常打开，都只需做一次：
                </p>
                <ol class="space-y-3 text-sm text-amber-700 dark:text-amber-400 list-decimal list-inside">
                  <li><strong>macOS 首选：</strong>先点掉那个「无法打开」弹窗，打开 <strong>系统设置 → 隐私与安全性</strong>，滚到最下方会看到一条「已阻止使用 Vv Transcribe」，点它右边的 <strong>「仍要打开」</strong>，可能需要输入开机密码。</li>
                  <li><strong>macOS 备选：</strong>打开「应用程序」文件夹，<strong>右键</strong>点 Vv Transcribe → 选「打开」→ 弹窗里再点「打开」。</li>
                  <li><strong>若提示「应用已损坏，无法打开」：</strong>这是下载带来的隔离属性造成的，把下面这行复制进「终端」回车执行（没有输出就是成功），再重新打开应用：<br><CommandCopy class="mt-1" :text="xattrCommand" /></li>
                  <li><strong>Windows：</strong>蓝色的 SmartScreen 弹窗点「更多信息」→「仍要运行」。</li>
                </ol>
              </div>
            </section>

            <section id="transcribe" class="scroll-mt-24">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-sm">03</span>
                音视频转写
              </h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">导入文件</h3>
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
                      <span><strong>链接导入：</strong>粘贴公开视频链接，应用自动下载并导入；部分站点有防盗链，失败时请改用本地文件。首次使用请看下方「链接转写的准备工作」</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">链接转写的准备工作</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    解析下载音视频用的 <strong>yt-dlp</strong> 已经内置在安装包里，不用再自己装。链接转写还会借用本机的一个浏览器
                    （Chrome / Edge / Chromium）去通过站点的前端校验，所以首次使用时 macOS 会弹一次授权。
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>无需安装任何东西：</strong>转写组件随包提供，装好应用即可直接粘贴链接转写；未装浏览器时链接解析会失败并给出可见提示，此时改用「本地文件」上传。</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>macOS 首次会弹授权：</strong>提交链接后系统会问 <strong>「"Vv Transcribe"想修改Mac上的App。」</strong>，请点 <strong>「允许…」</strong>。这是应用要启动本机浏览器来完成校验，每台 Mac 只需授权一次；授权后 macOS 会自动重启应用，若没自动重启，请自己完全退出再打开一次。</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span><strong>不小心点了拒绝：</strong>链接转写会一直失败。打开 <strong>系统设置 → 隐私与安全性 → App 管理</strong>，找到 Vv Transcribe 把开关打开，再重启应用即可。</span>
                    </li>
                  </ul>
                  <div class="mt-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-400">
                    浏览器只用于打开您粘贴的那个页面，用的是系统在临时目录里新建的一份独立空白配置，<strong>不会读取您的账号登录状态、密码、书签或浏览记录</strong>。Windows 不出现上面那个授权弹窗，装好应用即可直接用。
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">支持格式</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fmt in formats" :key="fmt" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">{{ fmt }}</span>
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">转写过程</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    点击「开始转写」后，Whisper 引擎在本机 CPU 上对音频进行语音识别，结果逐句上屏、进度按真实音频位置计算，转写过程中可随时取消。速度取决于音频长度与本机 CPU 性能，全程不需要把文件上传到任何服务器。
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
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">上传参考稿</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    转写完成后，可上传播出稿或参考稿进行比对。参考稿用于与转写结果逐字对比，快速发现差异。
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span>点击「上传参考」按钮，选择 TXT / Markdown / SRT / DOCX / PDF 文件（老式 .doc 请先另存为 .docx）</span>
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
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">Diff 比对结果</h3>
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
                  点击「AI 纠错」即可运行，参考稿不是前置条件：已上传参考稿时，AI 以参考稿为准逐处比对差异并解释原因；没有参考稿时，AI 会通读转写文本，并结合内置的中文词库给出修正建议。纠错需要您在「设置 → 纠错配置」里填好 API Key。
                </p>
                <div class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg"></span>
                    <div>
                      <strong class="text-gray-900 dark:text-white">差异分析</strong>
                      <p class="mt-1">AI 逐一分析每个差异点，判断是转写错误还是参考稿表述不同</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg">💡</span>
                    <div>
                      <strong class="text-gray-900 dark:text-white">纠错建议</strong>
                      <p class="mt-1">针对转写错误，AI 给出修正建议，一键采纳即可更新字幕</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-lg"></span>
                    <div>
                      <strong class="text-gray-900 dark:text-white">参考稿问题</strong>
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
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">校对完成后，点击「导出」会弹出系统「另存为」对话框，可选择格式与保存位置：</p>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">SRT 格式</div>
                    <div class="text-xs text-gray-500">标准字幕格式，带时间轴，可直接导入视频编辑软件</div>
                  </div>
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">TXT 格式</div>
                    <div class="text-xs text-gray-500">纯文本格式，方便复制粘贴和二次编辑</div>
                  </div>
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">JSON 格式</div>
                    <div class="text-xs text-gray-500">保留时间轴与逐句结构，便于接入自动化流程</div>
                  </div>
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div class="font-medium text-gray-900 dark:text-white mb-1">Markdown 格式</div>
                    <div class="text-xs text-gray-500">带时间标记的文稿，适合归档与审阅</div>
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
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">功能说明</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    转写默认使用打包在应用内的本地 Whisper 引擎，切换为「本地模式」后不需要联网、也不产生任何 API 费用。AI 纠错则依赖第三方大模型：需要在「纠错配置」里填写您自己的 API Key 才能运行，未填写时点击纠错会直接提示去设置。您也可以在「转写配置」里把转写模式切到云端，用第三方 ASR API 替代本地引擎。
                  </p>
                </div>

                <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">支持的 API 厂商</h3>
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
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">配置步骤</h3>
                  <ol class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <span>打开应用，进入「设置」→「纠错配置」（要把转写切到云端则进「转写配置」）</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <span>选择「服务商」，填写 API Key 与 API Base URL，必要时改「模型」</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <span>点击「保存设置」——所有配置都要保存后才会生效，切换服务商不会自动改接口</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                      <span>回到首页导入文件完成转写，点击「AI 纠错」即可验证配置是否可用；Key 缺失或调用失败都会给出可见提示</span>
                    </li>
                  </ol>
                </div>

                <div class="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
                  <strong>注意：</strong>使用第三方 API 会产生相应费用，费用由 API 厂商收取，与 Vv Transcribe 无关。未配置 API 时，本地转写、参考稿比对和导出仍可正常使用；只有 AI 纠错必须有 Key 才能运行。
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

const xattrCommand = 'xattr -cr "/Applications/Vv Transcribe.app"'

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

const formats = ['MP4', 'MOV', 'MKV', 'AVI', 'WEBM', 'FLV', 'MP3', 'WAV', 'M4A', 'FLAC', 'OGG', 'WMA']

const faqs = [
  {
    q: '首次使用需要联网吗？',
    a: '需要一次：首次转写会下载约 150MB 的 Whisper 模型（国内经 hf-mirror.com 镜像）。模型缓存后，本地模式下的转写、比对和导出都不再需要联网；AI 纠错要调用您配置的第三方 API，始终需要网络。',
  },
  {
    q: '转写支持哪些语言？',
    a: '当前转写固定为中文（普通话）。英文及其他语言支持在后续版本规划中。',
  },
  {
    q: '用链接转写时，Mac 弹出「“Vv Transcribe”想修改Mac上的App。」怎么办？',
    a: '点「允许…」就行，每台 Mac 只需授权一次。链接转写要启动本机的 Chrome/Edge 打开您粘贴的页面来完成站点校验，macOS 把这类操作归进「App 管理」权限，所以会弹窗确认。授权后系统会自动重启应用；如果当初点了拒绝，去「系统设置 → 隐私与安全性 → App 管理」打开 Vv Transcribe 的开关再重启应用即可。这一步不会读取您的浏览器账号、密码或浏览记录。',
  },
  {
    q: '链接转写失败怎么办？',
    a: 'v1.0.2 起 yt-dlp 已内置在安装包，不用再自行安装，所以失败基本不是「缺组件」。若提示内置转写组件没能启动，请完全退出 Vv Transcribe 再重新打开，仍不行就重装一次；若提示权限问题（macOS 未在「隐私与安全性」放行），按弹窗里的「打开隐私设置」按钮授权。部分站点有防盗链或需要登录，仍可能解析失败，此时请改用「本地文件」上传下载好的音视频。',
  },
  {
    q: '转写准确率如何？',
    a: '准确率与音频质量、口音和专有名词密度关系很大，我们不放没有实测依据的百分比。对播出字幕这类零容错场景，请务必用参考稿比对 + AI 纠错做二次校对，不要直接采信识别结果。',
  },
  {
    q: '文件数据安全吗？',
    a: '转写和参考稿比对全程在本机完成，音视频不会上传到任何服务器。若您启用云端转写或 AI 纠错，音频/字幕文本会发送给您自己配置的第三方 API，受该服务商的隐私政策约束。',
  },
  {
    q: '为什么转写速度有时较慢？',
    a: '本地引擎在本机 CPU 上以 int8 推理，不依赖 GPU，速度主要取决于音频长度和 CPU 性能；首次转写还要额外等待模型下载与加载，开屏页和转写卡片会显示当前阶段。',
  },
  {
    q: '转写中途可以停下来吗？',
    a: '可以。转写卡片上有「取消转写」按钮，点击后会中止本次任务并回收引擎占用，您可以换文件或换模式重新开始。',
  },
  {
    q: '参考稿支持什么格式？',
    a: '支持 TXT、Markdown、SRT、DOCX、PDF 五种；老式 .doc 请先在 Word 里另存为 .docx。每次只能上传一份，更换需先点参考稿气泡上的清除按钮。',
  },
  {
    q: '怎么获取新版本？',
    a: '应用不会自动安装更新（未做代码签名）。在「设置 → 关于与更新」点「检查更新」可看到是否有新版，按提示前往发布页下载新安装包覆盖安装即可。',
  },
  {
    q: '从官网/GitHub 下载特别慢怎么办？',
    a: '安装包放在 GitHub Releases，国内访问 GitHub 的资源域名没有 CDN 加速，有时只有几十 KB/s，几百 MB 的包要等很久。我们不提供第三方镜像站——来路不明的镜像可能被改动过，无法保证安全。最稳妥的做法：开网络加速后用浏览器直接下载本页的链接；macOS 也可以用 Homebrew 安装（同样走 GitHub，但支持断点续传、失败重试比浏览器稳定）。「设置 → 检查更新」连不上时，会把发布页地址复制到剪贴板，方便您在浏览器里粘贴下载。',
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
