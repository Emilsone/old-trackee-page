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
          <div
            class="
              flex flex-col
              items-center 
              justify-center
              space-y-8
              lg:-mx-4
              lg:flex-row
              lg:items-stretch
              lg:space-y-0
            "
          >
            <div
              class="
                flex flex-col
                w-full
                max-w-sm
                p-8
                space-y-8
                bg-white
                border-2 border-gray-200
                lg:mx-4
                dark:bg-gray-800
                dark:border-gray-700
              "
            >
             
              <router-link to="/register">
                <a
                  to="/register"
                  class="
                    flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    font-semibold
                    btn-text
                    uppercase
                    transition-colors
                    border-btn
                    focus:outline-none
                  "
                >
                  Get Started
                </a>
              </router-link>
            </div>

            <div
              class="
                flex flex-col
                w-full
                max-w-sm
                p-8
                space-y-8
                bg-white
                border-2 border-gray-200
                lg:mx-4
                dark:bg-gray-800
                dark:border-gray-700
              "
            >
              
              <router-link to="/">
                <a
                  class="
                    flex
                    items-center
                    justify-center
                    px-4
                    py-4
                    font-semibold
                    btn-text
                    uppercase
                    transition-colors
                    border-btn
                    focus:outline-none
                  "
                >
                 
                  Get started
                </a>
              </router-link>
            </div>

            <div
              class="
                flex flex-col
                w-full
                max-w-sm
                p-8
                space-y-8
                bg-white
                border-2 border-gray-200
                lg:mx-4
                dark:bg-gray-800
                dark:border-gray-700
              "
            >
             
              <router-link to="/">
                <a
                  class="
                    flex
                    items-center
                    justify-center
                    px-4
                    py-4
                    font-semibold
                    btn-text
                    uppercase
                    transition-colors
                    border-btn
                    focus:outline-none
                  "
                >
                  
                  Get started
                </a>
              </router-link>
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