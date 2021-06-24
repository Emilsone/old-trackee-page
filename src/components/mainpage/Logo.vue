<template>
  <a
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl px-6 py-2 task-text"
    href="#"
    >Trackee
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
.task-text{
  border: 2px solid gray;

}
</style>
