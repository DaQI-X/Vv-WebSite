<template>
  <div class="voice-wave-container" :class="{ active: isActive }">
    <svg viewBox="0 0 800 200" class="voice-wave-svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1b55f5" stop-opacity="0.1" />
          <stop offset="50%" stop-color="#1b55f5" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#1b55f5" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3378ff" stop-opacity="0.05" />
          <stop offset="50%" stop-color="#3378ff" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#3378ff" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#599dff" stop-opacity="0.05" />
          <stop offset="50%" stop-color="#599dff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#599dff" stop-opacity="0.05" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        :d="wavePath3"
        fill="none"
        stroke="url(#waveGradient3)"
        stroke-width="2"
        class="wave-line wave-line-3"
      />
      <path
        :d="wavePath2"
        fill="none"
        stroke="url(#waveGradient2)"
        stroke-width="2.5"
        class="wave-line wave-line-2"
      />
      <path
        :d="wavePath1"
        fill="none"
        stroke="url(#waveGradient1)"
        stroke-width="3"
        filter="url(#glow)"
        class="wave-line wave-line-1"
      />

      <circle
        v-for="(dot, i) in waveDots"
        :key="i"
        :cx="dot.x"
        :cy="dot.y"
        r="3"
        fill="#1b55f5"
        class="wave-dot"
        :style="{ animationDelay: `${i * 0.1}s` }"
      />
    </svg>

    <div class="wave-center-indicator">
      <div class="pulse-ring"></div>
      <div class="pulse-ring delay-1"></div>
      <div class="pulse-dot"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isActive = ref(true)
const time = ref(0)
let animationId: number

const wavePath1 = computed(() => generateWavePath(time.value, 100, 40, 3))
const wavePath2 = computed(() => generateWavePath(time.value + 1, 100, 30, 2.5))
const wavePath3 = computed(() => generateWavePath(time.value + 2, 100, 20, 2))

const waveDots = computed(() => {
  const dots = []
  for (let i = 0; i < 8; i++) {
    const x = 100 + i * 85
    const y = 100 + Math.sin(time.value * 2 + i * 0.8) * 35
    dots.push({ x, y })
  }
  return dots
})

function generateWavePath(t: number, centerY: number, amplitude: number, frequency: number): string {
  const points: [number, number][] = []
  const segments = 20
  const startX = 50
  const endX = 750

  for (let i = 0; i <= segments; i++) {
    const x = startX + (endX - startX) * (i / segments)
    const phase = t * 1.5 + i * 0.3
    const noise = Math.sin(phase * frequency) * amplitude
    const envelope = Math.sin((i / segments) * Math.PI)
    const y = centerY + noise * envelope
    points.push([x, y])
  }

  let path = `M ${points[0][0]} ${points[0][1]}`
  for (let i = 1; i < points.length - 1; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2
    const yc = (points[i][1] + points[i + 1][1]) / 2
    path += ` Q ${points[i][0]} ${points[i][1]} ${xc} ${yc}`
  }
  const last = points[points.length - 1]
  path += ` L ${last[0]} ${last[1]}`

  return path
}

onMounted(() => {
  let lastTime = performance.now()

  function animate(now: number) {
    const delta = (now - lastTime) / 1000
    lastTime = now
    time.value += delta
    animationId = requestAnimationFrame(animate)
  }

  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.voice-wave-container {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.voice-wave-svg {
  width: 100%;
  height: 100%;
}

.wave-line {
  transition: opacity 0.3s ease;
}

.wave-line-1 {
  animation: wavePulse1 3s ease-in-out infinite;
}

.wave-line-2 {
  animation: wavePulse2 4s ease-in-out infinite;
}

.wave-line-3 {
  animation: wavePulse3 5s ease-in-out infinite;
}

@keyframes wavePulse1 {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes wavePulse2 {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.9; }
}

@keyframes wavePulse3 {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

.wave-dot {
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 0.3; r: 2; }
  50% { opacity: 1; r: 4; }
}

.wave-center-indicator {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-ring {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #1b55f5;
  border-radius: 50%;
  animation: pulseRing 2s ease-out infinite;
}

.pulse-ring.delay-1 {
  animation-delay: 0.5s;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background: #1b55f5;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(27, 85, 245, 0.5);
}

@keyframes pulseRing {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
