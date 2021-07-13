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
              Get Our Reasonable Pricing
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
              <div class="flex-shrink-0">
                <h2
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-2
                    font-semibold
                    tracking-tight
                    heading-text
                    uppercase
                    bg-gray-50
                    dark:bg-gray-700
                  "
                >
                  Casual
                </h2>
              </div>
              <div class="flex-shrink-0">
                <span
                  class="
                    pt-2
                    text-4xl
                    font-bold
                    text-gray-800
                    uppercase
                    dark:text-gray-100
                  "
                >
                  Free
                </span>
              </div>
              <ul class="flex-1 space-y-4">
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Up to 5 projects
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Up to 10 collaborators
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >2Gb of storage
                </li>
              </ul>
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
              <div class="flex-shrink-0">
                <h2
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-2
                    font-semibold
                    tracking-tight
                    heading-text
                    uppercase
                    bg-gray-50
                    dark:bg-gray-700
                  "
                >
                  Profesional
                </h2>
              </div>
              <div class="flex-shrink-0">
                <span
                  class="
                    pt-2
                    text-4xl
                    font-bold
                    text-gray-800
                    uppercase
                    dark:text-gray-100
                  "
                >
                  $24.90
                </span>
                <span class="text-gray-500 dark:text-gray-400"> /month </span>
              </div>
              <ul class="flex-1 space-y-4">
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Up to 20 projects
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Up to 20 team members
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  10Gb of storage
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Chat support
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Real-time collaborations
                </li>
              </ul>
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
                  <i class="fa fa-shopping-cart px-1" aria-hidden="true"></i>
                  Purchase Now
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
              <div class="flex-shrink-0">
                <h2
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-2
                    font-semibold
                    tracking-tight
                    heading-text
                    uppercase
                    bg-gray-50
                    dark:bg-gray-700
                  "
                >
                  Expert
                </h2>
              </div>
              <div class="flex-shrink-0">
                <span
                  class="
                    pt-2
                    text-4xl
                    font-bold
                    text-gray-800
                    uppercase
                    dark:text-gray-100
                  "
                >
                  $49.90
                </span>
                <span class="text-gray-500 dark:text-gray-400"> /month </span>
              </div>
              <ul class="flex-1 space-y-4">
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited projects
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited team members
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited storage
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Chat support
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Real-time collaborations
                </li>
                <li class="text-gray-500 dark:text-gray-400">
                  <span
                    class="
                      heading-text
                      w-4
                      h-4
                      mr-2
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >24x7 Support
                </li>
              </ul>
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
                  <i class="fa fa-shopping-cart px-1" aria-hidden="true"></i>
                  Purchase Now
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
      tabAtiveIndex: 0,
    };
  },
  methods: {
    changeTab(val) {
      this.tabAtiveIndex = val;
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