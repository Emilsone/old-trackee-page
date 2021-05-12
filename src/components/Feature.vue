<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="text-3xl font-bold title-font text-black mb-12 text-center">
        FEATURES
      </h1>
      <p class="text-lg paragraph-font text-black mb-6 text-center">
        Trackee is an intuitive task management tool that your employees will
        love!
      </p>
      <div class="flex flex-wrap justify-around md:justify-center">
        <div class="lg:w-1/3 w-5/6 lg:mb-0 mb-6 p-4">
          <feature-page class="h-full text-center">
            <img
              alt="testimonial"
              class="w-20 h-20 mb-8 object-cover object-center inline-block"
              src="../assets/clipboard.png"
            />
            <template
              v-slot:headline
              class="text-gray-900 font-bold title-font tracking-wider text-xl"
            >
              Time Measurement
            </template>
            <template v-slot:content class="leading-relaxed">
              It measures time in a friendly way it;'s a trusted assistant for
              your team members not a hard task master
            </template>
          </feature-page>
        </div>
        <div class="lg:w-1/3 w-5/6 lg:mb-0 mb-6 p-4 md:mx-auto">
          <feature-page class="h-full text-center">
            <img
              alt="testimonial"
              class="w-20 h-20 mb-8 object-cover object-center inline-block"
              src="../assets/easy.png"
            />
            <template action="Action"
              v-slot:headline
              class="text-gray-900 font-bold title-font tracking-wider text-xl"
            >
              Track Progress
            </template>
            <template action="Action" v-slot:content class="leading-relaxed">
              It shows you at what stage you are at and what work is needed to
              complete a given assignment. Its a motivational aid that helps get
              things done.
            </template>
          </feature-page>
        </div>
        <div class="lg:w-1/3 w-5/6 lg:mb-0 p-4 md:mx-auto">
          <feature-page class="h-full text-center">
            <img
              alt="testimonial"
              class="w-20 h-20 mb-8 object-cover object-center inline-block"
              src="../assets/laugh.png"
            />
            <template
              v-slot:headline
              class="text-gray-900 font-bold title-font tracking-wider text-xl"
            >
              Learning from history
            </template>
            <template v-slot:content class="leading-relaxed">
              When you need to evaluate a new project you can simply tasks and
              accurately estimate how much effort and it will involve
            </template>
          </feature-page>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import FeaturePage from "@/components/FeaturePage";
export default {
  name: "Feature",
  components: {
    "feature-page": FeaturePage,
  },
};
</script>
<style scoped>
</style>


