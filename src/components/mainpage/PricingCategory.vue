<template>
  <div>
    <div class="overflow-hidden p-0.5 mt-6">
      <div class="sm:-mx-0.5 flex">
        <button
          class="
            focus:outline-none
            px-6
            w-1/2
            sm:w-auto
            py-2
            sm:mx-0.5
            text-white
            bg-month
          "
          :class="{ active: tabActiveIndex == 0 }"
          @click="changeTab(0)"
        >
          Monthly
        </button>
        <button
          class="
            focus:outline-none
            px-6
            w-1/2
            sm:w-auto
            py-2
            sm:mx-0.5
            text-gray-800 text-black
            bg-year
          "
          :class="{ active: tabAtiveIndex == 1 }"
          @click="changeTab(1)"
        >
          Yearly
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PricingCategory",
  data() {
    return {
      tabAtiveIndex: 0,
    };
  },
  methods: {
    changeTab(val) {
      this.tabAtiveIndex = val;
      this.$emit("tabchange", this.tabAtiveIndex);
    },
  },
};
</script>