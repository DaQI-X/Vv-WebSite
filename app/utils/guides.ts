/** 指南清单：枢纽页卡片与文章页「相关指南」共用同一份，slug 即路由 /guides/<slug> */
export const GUIDE_UPDATED = '2026-11-12'

export const GUIDES = [
  { slug: 'video-to-subtitles', key: 'video', minutes: 6, icon: '🎬' },
  { slug: 'srt-editing', key: 'srt', minutes: 7, icon: '⏱️' },
  { slug: 'podcast-transcription', key: 'podcast', minutes: 5, icon: '🎙️' },
] as const

export type GuideSlug = (typeof GUIDES)[number]['slug']