export const useDownload = () => {
  const config = useRuntimeConfig()

  // 浏览器 UA 无法可靠区分 Apple 芯片与 Intel Mac（两者都报 "Macintosh"，
  // 且 Safari 不支持 navigator.userAgentData），因此同时暴露两个 macOS 链接，由用户自选。
  const winUrl = config.public.downloadWinX64 as string
  const macArmUrl = config.public.downloadMacArm64 as string
  const macIntelUrl = config.public.downloadMacX64 as string

  return { winUrl, macArmUrl, macIntelUrl }
}
