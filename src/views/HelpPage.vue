<template>
  <main>
    <TheHeader />
    <section class="text-white body-font help-hero mt-24">
      <div
        class="
          container
          mx-auto
          flex flex-col
          px-5
          py-24
          justify-center
          items-center
        "
      >
        <div
          class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold">
            How can we Help you?
          </h1>
          <p class="mb-8 leading-relaxed">
            This page is a guide to every information you need to get started
            with Trackee
          </p>
          <div class="flex w-full justify-center items-end">
            <div class="lg:w-full xl:w-3/4 w-2/4 md:w-full text-left">
              <input
                type="text"
                id="hero-field"
                name="search-input"
                placeholder="Search anything........"
                class="
                  w-full
                  input
                  rounded
                  focus:ring-2 focus:ring-gray-200 focus:bg-transparent
                  border border-gray-300
                  focus:border-gray-500
                  text-base
                  outline-none
                  text-white
                  py-4
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        @tabchange="changeTab($event)"
        class="flex items-center flex-wrap justify-center my-12 text-black"
      >
        <div className="md:w-72 rounded-3xl md:p-1 text-center flex flex-wrap ">
          <button
            :class="{ active: tabActiveIndex == 0 }"
            @click="changeTab(0)"
            type="button"
            class="
              inline-flex
              text-black
              bg-btn
              rounded-full
              text-sm
              px-5
              py-3
              text-center
              mr-2
              mb-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 -ml-1 w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>

            <span
              class="
                px-2
                py-4
                text-2xl text-gray-100
                border-l-2 border-gray-100
              "
            >
            </span>
            <div class="text-xl pt-0.5">Getting Started</div>
          </button>

          <button
            :class="{ active: tabActiveIndex == 1 }"
            @click="changeTab(1)"
            type="button"
            class="
              inline-flex
              text-black
              bg-btn
              rounded-full
              text-sm
              px-5
              py-3
              text-center
              mr-2
              mb-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 -ml-1 w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <span
              class="
                px-2
                py-4
                text-2xl text-gray-100
                border-l-2 border-gray-100
              "
            >
            </span>
            <div class="text-xl pt-0.5">Asked Questions</div>
          </button>
          <button
            :class="{ active: tabActiveIndex == 2 }"
            @click="changeTab(2)"
            type="button"
            class="
              inline-flex
              text-black
              bg-btn
              rounded-full
              text-sm
              px-5
              py-3
              text-center
              mr-2
              mb-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 -ml-1 w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>

            <span
              class="
                px-2
                py-4
                text-2xl text-gray-100
                border-l-2 border-gray-100
              "
            >
            </span>
            <div class="text-xl pt-0.5">Articles</div>
          </button>
          <button
            :class="{ active: tabActiveIndex == 3 }"
            @click="changeTab(3)"
            type="button"
            class="
              inline-flex
              text-black
              bg-btn
              rounded-full
              text-sm
              px-5
              py-3
              text-center
              mr-2
              mb-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 -ml-1 w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <span
              class="
                px-2
                py-4
                text-2xl text-gray-100
                border-l-2 border-gray-100
              "
            >
            </span>
            <div class="text-xl pt-0.5">Support</div>
          </button>
        </div>
      </div>
    </section>

    <main>
      <div v-show="tabActiveIndex == 0">
        <div class="container px-5 py-6 mx-auto">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-bold text-center"
          >
            Getting Started with Trackee
          </h1>
          <p class="mb-8 leading-relaxed text-center lg:w-1/2 mx-auto">
            Welcome to Trackee! This manual will provide you with all of the
            information you need to get started, from setup to project creation
            and management. You don't need any prior project management
            knowledge because this tutorial will cover all of the essentials.
          </p>

          <!--======== First card section ========== -->
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-600 p-6">
                <div
                  class="
                    w-16
                    h-16
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-black
                    mb-4
                  "
                >
                  <i class="fa fa-leanpub text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Learn Trackee basics
                </h2>
                <p class="leading-relaxed text-base">
                  Trackee is a free tool you don't need any subscription or
                  credit card detials to get you started.
                </p>
                <div class="pt-6">
                  <a href="#" class="pt-6">Learn More <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-600 p-6">
                <div
                  class="
                    w-16
                    h-16
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-black
                    mb-4
                  "
                >
                  <i class="fa fa-plus text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Create your Project
                </h2>
                <p class="leading-relaxed text-base">
                  One of the ways to boost productivity, is to work with the
                  right tools. You can work with your favorite tool using
                  trackee
                </p>
                <div class="pt-6">
                  <a href="#" class="pt-6">Learn More <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-600 p-6">
                <div
                  class="
                    w-16
                    h-16
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-black
                    mb-4
                  "
                >
                  <i class="fa fa-tasks text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Manage Project and Task
                </h2>
                <p class="leading-relaxed text-base">
                  Team work brings value to a project, you can collaborate with
                  your other team members using trackee
                </p>
                <div class="pt-6">
                  <a href="#" class="pt-6">Learn More <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!--====== second card section ======== -->
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-600 p-6">
                <div
                  class="
                    w-16
                    h-16
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-black
                    mb-4
                  "
                >
                  <i class="fa fa-step-forward text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Track progress
                </h2>
                <p class="leading-relaxed text-base">
                  Trackee is a free tool you don't need any subscription or
                  credit card detials to get you started.
                </p>
                <div class="pt-6">
                  <a href="#" class="pt-6">Learn More <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-600 p-6">
                <div
                  class="
                    w-16
                    h-16
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-black
                    mb-4
                  "
                >
                  <i class="fa fa-bug text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Report Progress
                </h2>
                <p class="leading-relaxed text-base">
                  One of the ways to boost productivity, is to work with the
                  right tools. You can work with your favorite tool using
                  trackee
                </p>
                <div class="pt-6">
                  <a href="#" class="pt-6">Learn More <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-600 p-6">
                <div
                  class="
                    w-16
                    h-16
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-black
                    mb-4
                  "
                >
                  <i class="fa fa-share-alt text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Invite Friends to the board
                </h2>
                <p class="leading-relaxed text-base">
                  Team work brings value to a project, you can collaborate with
                  your other team members using trackee
                </p>
                <div class="pt-6">
                  <a href="#" class="pt-6">Learn More <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="
                flex
                mx-auto
                text-black
                mt-16
                bg-btn
                py-2
                px-12
                rounded-full
                text-lg
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div v-show="tabActiveIndex == 1">
        <AskQuestion />
      </div>
      <div v-show="tabActiveIndex == 2">
        <ArticleSection />
      </div>
      <div v-show="tabActiveIndex == 3">
        <SupportSection />
      </div>
    </main>
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
import AskQuestion from "../components/mainpage/AskQuestion.vue";
import ArticleSection from "../components/mainpage/ArticleSection.vue";
import SupportSection from "../components/mainpage/SupportSection.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    AskQuestion,
    ArticleSection,
    SupportSection,
  },
  data() {
    return {
      tabActiveIndex: 0,
    };
  },
  methods: {
    changeTab(val) {
      this.tabActiveIndex = val;
      this.$emit("tabchange", this.tabActiveIndex);
    },
  },
};
</script>
<style>
.help-hero {
  background-color: #1d1d20;
}
.input {
  background-color: #2e2f32;
}
.bg-btn {
  background-color: #eeefef;
}
</style>