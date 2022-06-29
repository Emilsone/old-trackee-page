<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      space-y-8
      lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0
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
        dark:bg-gray-800 dark:border-gray-700
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
        dark:bg-gray-800 dark:border-gray-700
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
        dark:bg-gray-800 dark:border-gray-700
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
</template>
<script>
export default {
  name: "PricingList",
};
</script>