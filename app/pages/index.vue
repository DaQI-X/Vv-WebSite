<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <UseCasesSection />
    <ComparisonSection />
    <CTASection />
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
