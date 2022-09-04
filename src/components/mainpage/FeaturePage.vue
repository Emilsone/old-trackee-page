<template>
  <section class="body-font">
    <div class="container px-5 py-12 mx-auto">
      <div class="text-center">
        <h1
          class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4"
        >
          Our Unique Features
        </h1>
        <p
          class="
            text-base
            leading-relaxed
            xl:w-2/4
            lg:w-3/4
            mx-auto
            text-gray-800
          "
        >
          We also offer team building activities that are designed to enhance
          your teams communication and also build freindships.
        </p>
      </div>
      <div
        class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div
          class="
            flex flex-col
            w-full
            md:w-2/5
            justify-center
            lg:items-start
            items-center
            text-center
            md:text-left
            hero-text
            space-y-10
          "
        >
          <p class="text-md font-bold uppercase paragraph">
            <span class="px-3 bg-num">01.</span> Time
          </p>
          <h1 class="my-4 text-4xl font-bold leading-tight">
            Time Measurement
          </h1>
          <p class="leading-relaxed">
            It measures time in a friendly way it's a trusted assistant for your
            team members not a hard task master for your team
          </p>
          <p class="py-4">
            <a class="paragraph inline-flex items-center bg-explore py-4 px-8"
              >ExploFeatures
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
          </p>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="@/assets/Time-img.png"
            alt
          />
        </div>
      </div>
    </div>

    <!-- <div>
      <Arrow />
    </div> -->

    <div class="md:py-4 py-4">
      <div
        class="
          container
          px-3
          mx-auto
          flex flex-wrap flex-col
          md:flex-row
          items-center
        "
      >
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="@/assets/Progress-2.png"
            alt
          />
        </div>
        <!--Left Col-->
        <div
          class="
            flex flex-col
            w-full
            md:w-2/5
            justify-center
            lg:items-start
            items-center
            text-center
            md:text-left
            hero-text
            space-y-10
          "
        >
          <p class="text-md font-bold uppercase paragraph">
            <span class="px-3 bg-num">02.</span> Progress
          </p>
          <h1 class="my-4 text-4xl font-bold leading-tight">Track Progress</h1>
          <p class="leading-relaxed">
            It shows you at what stage you are at and what work is needed to
            complete a given assignment. It's a motivational aid that helps get
            things done.
          </p>
          <p class="py-4">
            <a class="paragraph inline-flex items-center bg-explore py-4 px-8"
              >Explore Features
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
          </p>
        </div>
      </div>
    </div>
    <div class="md:py-4 py-12">
      <div
        class="
          container
          px-3
          mx-auto
          flex flex-wrap flex-col
          md:flex-row
          items-center
        "
      >
        <!--Right Col-->

        <div
          class="
            flex flex-col
            w-full
            md:w-2/5
            justify-center
            lg:items-start
            items-center
            text-center
            md:text-left
            hero-text
            space-y-10
          "
        >
          <p class="text-md font-bold uppercase paragraph">
            <span class="px-3 bg-num">03.</span> History
          </p>
          <h1 class="my-4 text-4xl font-bold leading-tight">
            Learning from history
          </h1>
          <p class="leading-relaxed">
            When you need to evaluate a new project, you can simplify the task
            and accurately estimate how much effort it will involve
          </p>

          <p class="py-4">
            <a class="paragraph inline-flex items-center bg-explore py-4 px-8"
              >Explore Features
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
          </p>
        </div>

        <!--Left Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="@/assets/Learning-pana.png"
            alt
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import Arrow from "@/components/mainpage/Arrow.vue";
export default {
  name: "Feature",
  components: {
    // Arrow
  },
};
</script>
<style scoped>
.paragraph {
  color: #0c0e2d;
}
.bg-explore {
  /* background-color: #f2f5fa; */
  background-color: #0c0e2d;
  color: #ffffff;
}
.bg-num {
  background-color: #0c0e2d;
  border-radius: 40px;
  color: #f2f5fa;
}
</style>


