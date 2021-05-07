<template>
  <div class="flex h-screen font-roboto">
    <SideBar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <NavLink />

      <!-- <main class="flex-1 overflow-x-hidden overflow-y-auto bg-back">
        <div class="container mx-auto px-6 py-8">
         <router-view />
        </div>
      </main> -->
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script>
import NavLink from "@/components/NavLink.vue";
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "Dashboard",
  components: { SideBar, NavLink, Footer },
};
</script>

<style scoped>
.bg-back {
  background: #f0f4f6;

}
</style>
