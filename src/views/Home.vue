<template>
  <main>
    <NavBar />
    <hero />
    <HowWeWork />
    <WhyManagie />
    <!-- <SuscribePage /> -->
    <FooterPage />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import HowWeWork from "@/components/HowWeWork.vue";
import WhyManagie from "@/components/WhyManagie.vue";
// import SuscribePage from "@/components/SuscribePage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavBar,
    Hero,
    HowWeWork,
    WhyManagie,
    // SuscribePage,
    FooterPage,
  },
};
</script>
<style scoped>
</style>

