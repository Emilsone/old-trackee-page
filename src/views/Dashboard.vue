<template>
  <div class="flex h-screen">
    <!-- <SideBar /> -->

    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- <NavLink /> -->

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-back">
        <div class="container mx-auto px-6 py-8">
          <!-- <overview /> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import NavLink from "@/components/NavLink.vue";
// import SideBar from "@/components/sidebar/SideBar.vue";
// import overview from "@/components/overview.vue";
export default {
  name: "Dashboard",
  // components: { SideBar,  },
};
</script>

<style scoped>
.bg-back {
  background: #f0f4f6;
}
</style>
