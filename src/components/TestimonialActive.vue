<template>
  <section>
    <div class="flex align-center justify-center px-6 pt-2 pb-2 md:py-6">
      <div
        class="tab text-center"
        :class="{ active: tabActiveIndex == 0 }"
        @click="changeTab(0)"
      >
        <div class="">
          <span
            class="pt-6 block h-16 w-16 mx-4 rounded-full overflow-hidden shadow-xl focus:outline-none hover:bg-gray-400"
          >
            JD
          </span>
        </div>
      </div>

      <div
        class="tab text-center"
        :class="{ active: tabActiveIndex == 1 }"
        @click="changeTab(1)"
      >
        <div class="">
          <span
            class="block pt-6 h-16 w-16 mx-4 rounded-full overflow-hidden shadow-xl focus:outline-none hover:bg-gray-400"
          >
            WD
          </span>
        </div>
      </div>

      <div
        class="tab text-center"
        :class="{ active: tabActiveIndex == 2 }"
        @click="changeTab(2)"
      >
        <div class="">
          <span
            class="block pt-6 h-16 w-16 mx-4 rounded-full overflow-hidden shadow-xl focus:outline-none hover:bg-gray-400"
          >
            ED
          </span>
        </div>
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
.tab {
  cursor: pointer;
}
</style>
