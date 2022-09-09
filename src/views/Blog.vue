<template>
  <main>
    <TheHeader />
    <section class="text-gray-600 body-font mt-24">
      <div class="container px-5 py-4 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 px-8 mt-5 flex flex-wrap md:flex-nowrap bg-btn">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-bold title-font text-black text-xl"
                >CATEGORY</span
              >
              <span class="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                5 Reasons why you are not productive at home
              </h2>
              <p class="leading-relaxed">
                There are so many reason why your productivity can drop as a
                remote developer, in this article you will see those 5 reasons.
              </p>
              <a class="text-white inline-flex items-center mt-4 bg-month p-3"
                >Read More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="py-8 px-8 mt-5 flex flex-wrap md:flex-nowrap bg-btn">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-bold title-font text-black text-xl"
                >CATEGORY</span
              >
              <span class="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                Is Trackee the best tool for task management?
              </h2>
              <p class="leading-relaxed">
                One of the ways to be 100% productive is to use the right tool.
                Find out why Trackee is the best tool for task management
              </p>
              <a class="text-white inline-flex items-center mt-4 bg-month p-3"
                >Read More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="py-8 px-8 mt-5 flex flex-wrap md:flex-nowrap bg-btn">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-bold title-font text-black text-xl"
                >CATEGORY</span
              >
              <span class="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-bold text-gray-900 title-font mb-2">
                Increase your Productivity with Trackee
              </h2>
              <p class="leading-relaxed">
                This article covers how you can increase your productivity and
                track your progress while using trackee task management system
              </p>
              <a class="text-white inline-flex items-center mt-4 bg-month p-3"
                >Read More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style>
</style>