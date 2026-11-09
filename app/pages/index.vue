<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <UseCasesSection />
    <ComparisonSection />
    <CTASection />
    <!-- 下载按钮之后再放广告位：不抢转化，也不在没同意时留空框 -->
    <div class="max-w-6xl mx-auto px-6">
      <AdSlot name="homeBottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.home.title'),
  description: () => t('meta.home.description'),
  keywords: () => t('meta.home.keywords'),
  ogTitle: () => t('meta.home.title'),
  ogDescription: () => t('meta.home.ogDescription'),
  twitterTitle: () => t('meta.home.title'),
  twitterDescription: () => t('meta.home.twitterDescription'),
})
</script>
