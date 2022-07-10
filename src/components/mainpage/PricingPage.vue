<template>
  <main>
    <div class="bg-white">
      <div class="container px-6 py-8 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="py-6">
            <p class="mt-4 text-gray-500 dark:text-gray-400 uppercase">
              our plans
            </p>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Features
            </h2>
          </div>

          <PricingCategory @tabchange="changeTab($event)" />
        </div>
        <div v-show="tabActiveIndex == 0">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6">
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
                   <i class="fa fa-bell-o text-2xl" aria-hidden="true"></i>

                  </div>
                  <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                    100% free no subscription
                  </h2>
                  <p class="leading-relaxed text-base">
                    Trackee is a free tool you don't need any subscription or
                    credit card detials to get you started.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6">
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
                    <i class="fa fa-cog text-2xl " aria-hidden="true"></i>

                  </div>
                  <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                    Connect with your favorite tools
                  </h2>
                  <p class="leading-relaxed text-base">
                    One of the ways to boost productivity, is to work with the
                    right tools. You can work with your favorite tool using
                    trackee
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6">
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
                   <i class="fa fa-user-plus text-2xl " aria-hidden="true"></i>
                  </div>
                  <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                    Limitless Collaboration
                  </h2>
                  <p class="leading-relaxed text-base">
                    Team work brings value to a project, you can collaborate
                    with your other team members using trackee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="tabActiveIndex == 1">
          <PricingList />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import PricingCategory from "@/components/mainpage/PricingCategory.vue";
import PricingList from "@/components/mainpage/PricingList.vue";
export default {
  name: "PricingPage",
  components: {
    PricingCategory,
    PricingList,
  },
  data() {
    return {
      tabActiveIndex: 0,
    };
  },
  methods: {
    changeTab(val) {
      this.tabActiveIndex = val;
    },
  },
};
</script>
<style>
.bg-month {
  background: #0c0e2d;
}
.bg-year {
  background-color: #f2f5fa;
}
.heading-text {
  color: #0c0e2d;
}
.border-btn {
  border: 1px solid #0c0e2d;
}
.border-btn:hover {
  background-color: #0c0e2d;
  color: #fffefe;
}
</style>