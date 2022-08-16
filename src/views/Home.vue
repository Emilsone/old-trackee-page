<template>
  <main>
    <TheHeader />
    <hero />
    <Report />
    <!-- <Arrow /> -->
    <FeaturePage />
    <SchedulePage />
    <PricingPage />
    <TestimonialPage />
    <SuscribePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import Hero from "@/components/mainpage/Hero.vue";
import Report from "@/components/mainpage/Report.vue";
// import Arrow from "@/components/mainpage/Arrow.vue";
import FeaturePage from "@/components/mainpage/FeaturePage.vue";
import SchedulePage from "@/components/mainpage/SchedulePage.vue";
import PricingPage from "@/components/mainpage/PricingPage.vue";
import TestimonialPage from "@/components/mainpage/TestimonialPage.vue";
import SuscribePage from "@/components/mainpage/SuscribePage.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Hero, 
    Report,
    // Arrow,
    FeaturePage,
    SchedulePage,
    PricingPage,
    TestimonialPage,
    SuscribePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

