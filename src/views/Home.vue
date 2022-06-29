<template>
  <main>
    <TheHeader />
    <hero />
    <Report />
    <FeaturePage />
    <SchedulePage />
    <TestimonialPage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import Hero from "@/components/mainpage/Hero.vue";
import Report from "@/components/mainpage/Report.vue";
import FeaturePage from "@/components/mainpage/FeaturePage.vue";
import SchedulePage from "@/components/mainpage/SchedulePage.vue";
import TestimonialPage from "@/components/mainpage/TestimonialPage.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Hero, 
    Report,
    FeaturePage,
    SchedulePage,
    TestimonialPage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

