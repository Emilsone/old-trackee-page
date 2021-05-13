<template>
  <main>
    <NavBar />
    <hero />
    <Feature />
    <TestimonialPage />
    <FooterPage />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import Feature from "@/components/Feature.vue";
import TestimonialPage from "@/components/TestimonialPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavBar,
    Hero, 
    Feature,
    TestimonialPage,
    FooterPage,
  },
};
</script>
<style scoped>
</style>

