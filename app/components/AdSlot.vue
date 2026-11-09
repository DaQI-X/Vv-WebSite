<template>
  <!--
    整块在「不该出广告」时渲染不出任何节点，连占位框都没有：空着 250px 的灰框比没有广告更像坏了。
    真出广告时先把 minHeight 撑住，Google 异步塞创意进来才不会把下面的内容往下顶（CLS）。
  -->
  <aside
    v-if="visible"
    class="my-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3"
    :aria-label="t('ads.label')"
  >
    <p class="mb-2 text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">{{ t('ads.label') }}</p>
    <!-- 这里不能加 overflow-hidden：手机上 full-width-responsive 会把 ins 撑到整屏宽（Google 自己写负 margin 抵掉内边距），裁它就是遮住广告。整页不破版靠外层 grid 项的 min-w-0 -->
    <div :style="{ minHeight: `${minHeight}px` }">
      <ins
        class="adsbygoogle"
        style="display: block"
        :data-ad-client="clientId"
        :data-ad-slot="slot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
/**
 * 一格广告位。三个条件缺一个就整块不渲染（见 composable/useSiteAds.ts）：
 * 开关没填 client、这个位置没建广告位、访客没同意。
 * `name` 对上 runtimeConfig.public.adsenseSlots 的键，中英两份页面共用同一个键。
 */
const props = withDefaults(defineProps<{ name: string; minHeight?: number }>(), { minHeight: 250 })

const { t } = useI18n()
const config = useRuntimeConfig()
const { slotId, adReady, loadAdsenseScript } = useSiteAds()

const clientId = String(config.public.adsenseClientId ?? '')
const mounted = ref(false)
const slot = computed(() => slotId(props.name))
const visible = computed(() => mounted.value && adReady(props.name))

// 同意状态可能在这页上刚被改（横幅就在同一屏底部），所以 watch 而不是只在 onMounted 判一次
watch(
  visible,
  async (on) => {
    if (!on) return
    loadAdsenseScript()
    await nextTick()
    const w = window as unknown as { adsbygoogle?: Array<Record<string, unknown>> }
    w.adsbygoogle = w.adsbygoogle || []
    // 队列先于脚本存在是 Google 文档认可的用法；脚本自己出错不该把整页带红
    try {
      w.adsbygoogle.push({})
    } catch {
      /* 广告这一层永远不该让页面失败 */
    }
  },
  { immediate: true },
)

onMounted(() => {
  mounted.value = true
})
</script>
