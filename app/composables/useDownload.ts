// 模块级：镜像开关在所有 useDownload 调用方之间共享。
const mirrorOn = ref(false)

export const useDownload = () => {
  const config = useRuntimeConfig()

  // 浏览器 UA 无法可靠区分 Apple 芯片与 Intel Mac（两者都报 "Macintosh"，
  // 且 Safari 不支持 navigator.userAgentData），因此同时暴露两个 macOS 链接，由用户自选。
  const github = {
    win: config.public.downloadWinX64 as string,
    macArm: config.public.downloadMacArm64 as string,
    macIntel: config.public.downloadMacX64 as string,
  }
  // 镜像与 Release 资产同名，只换基底路径并钉到当前版本 tag。
  const mirrorUrl = (url: string) =>
    `${config.public.hfMirrorBase}/v${config.public.appVersion}/${url.slice(url.lastIndexOf('/') + 1)}`

  return {
    mirrorOn,
    winUrl: computed(() => (mirrorOn.value ? mirrorUrl(github.win) : github.win)),
    macArmUrl: computed(() => (mirrorOn.value ? mirrorUrl(github.macArm) : github.macArm)),
    macIntelUrl: computed(() => (mirrorOn.value ? mirrorUrl(github.macIntel) : github.macIntel)),
  }
}
