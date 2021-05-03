<template>
  <a
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    href="#"
    >Trackee<span class="text-4xl word-spacing dot-text">.</span>
  </a>
</template>

<script>
export default {
  name: "Logo",
  props: {
    isStickable: {
      type: Boolean,
      default: false,
    },
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      let classList = "";
      if (this.isStickable) {
        classList = this.isSticky ? "text-black" : "text-gray-800";
      } else {
        classList = "text-black";
      }
      return classList;
    },
  },
};
</script>
<style scoped>
.dot-text {
  color: #66d4d7;
}
</style>
