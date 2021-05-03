<template>
  <main>
    <NavBar />
    <hero />
    <WhyManagie />
    <Testimonial />
    <FooterPage />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import WhyManagie from "@/components/WhyManagie.vue";
import Testimonial from "@/components/Testimonial.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavBar,
    Hero, 
    WhyManagie,
    Testimonial,
    FooterPage,
  },
};
</script>
<style scoped>
</style>

