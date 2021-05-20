<template>
  <main>
    <NavBar />
    <hero />
    <FeaturePage />
    <TestimonialPage />
    <FooterPage />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import FeaturePage from "@/components/FeaturePage.vue";
import TestimonialPage from "@/components/TestimonialPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavBar,
    Hero, 
    FeaturePage,
    TestimonialPage,
    FooterPage,
  },
};
</script>
<style scoped>
</style>

