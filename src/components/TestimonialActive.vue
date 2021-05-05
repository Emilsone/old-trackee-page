<template>
  <section>
    <div class="flex justify-center px-6 pt-2 pb-6 md:py-6">
      <div
        class="tab text-center"
        :class="{ active: tabActiveIndex == 0 }"
        @click="changeTab(0)"
      >
        <div
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
        >
        
        </div>
        <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">
          John Doe
        </h2>
        <small class="text-gray-500 text-xs md:text-sm truncate"
          >CEO, ABC Inc.</small
        >
      </div>

      <div
        class="tab text-center"
        :class="{ active: tabActiveIndex == 1 }"
        @click="changeTab(1)"
      >
        <div
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
        >
         
        </div>
        <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">
          Winter Doe
        </h2>
        <small class="text-gray-500 text-xs md:text-sm truncate"
          >CTO, XYZ Corp.</small
        >
      </div>

      <div
        class="tab text-center"
        :class="{ active: tabActiveIndex == 2 }"
        @click="changeTab(2)"
      >
        <div
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
        >
        
        </div>
        <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">
          John Wick
        </h2>
        <small class="text-gray-500 text-xs md:text-sm truncate"
          >Product Manager</small
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TestimonialIndex",
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
.tab{
  cursor: pointer;
}
</style>
