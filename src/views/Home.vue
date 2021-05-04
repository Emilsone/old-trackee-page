<template>
  <main>
    <NavBar />
    <hero />
    <WhyManagie />
    <TestimonialPage />
    <FooterPage />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import WhyManagie from "@/components/WhyManagie.vue";
import TestimonialPage from "@/components/TestimonialPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavBar,
    Hero, 
    WhyManagie,
    TestimonialPage,
    FooterPage,
  },
};
</script>
<style scoped>
</style>

