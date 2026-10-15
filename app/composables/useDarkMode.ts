const isDark = ref(false)
let initialized = false

export const useDarkMode = () => {
  function applyDark(value: boolean) {
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', value)
      localStorage.setItem('theme', value ? 'dark' : 'light')
    }
  }

  function toggle() {
    isDark.value = !isDark.value
    applyDark(isDark.value)
  }

  if (import.meta.client && !initialized) {
    initialized = true
    const stored = localStorage.getItem('theme')
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyDark(isDark.value)
  }

  return { isDark, toggle }
}
