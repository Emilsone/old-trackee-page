<template>
  <main>
    <NavBar />
    <hero />
    <FeaturePage />
    <SchedulePage />
    <PricingPage />
    <TestimonialPage />
    <FooterPage />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import FeaturePage from "@/components/FeaturePage.vue";
import SchedulePage from "@/components/SchedulePage.vue";
import PricingPage from "@/components/PricingPage.vue";
import TestimonialPage from "@/components/TestimonialPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavBar,
    Hero, 
    FeaturePage,
    SchedulePage,
    PricingPage,
    TestimonialPage,
    FooterPage,
  },
};
</script>
<style scoped>
</style>

