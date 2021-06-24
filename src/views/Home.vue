<template>
  <main>
    <TheHeader />
    <hero />
    <FeaturePage />
    <SchedulePage />
    <PricingPage />
    <TestimonialPage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import Hero from "@/components/mainpage/Hero.vue";
import FeaturePage from "@/components/mainpage/FeaturePage.vue";
import SchedulePage from "@/components/mainpage/SchedulePage.vue";
import PricingPage from "@/components/mainpage/PricingPage.vue";
import TestimonialPage from "@/components/mainpage/TestimonialPage.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Hero, 
    FeaturePage,
    SchedulePage,
    PricingPage,
    TestimonialPage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

