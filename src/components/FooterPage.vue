<template>
  <footer class="footer___bg">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <LogoFooter />

        <div class="flex-1 px-4 py-6">
          <p class="uppercase md:mb-6 font-bold">Features</p>
          
        </div>
        <div class="flex-1 px-4 py-6">
          <p class="uppercase md:mb-6 font-bold">Further Information</p>
         
        </div>

       
      </div>
    </div>
  </footer>
</template>

<script>
import LogoFooter from "@/components/LogoFooter";
export default {
  name: "Footer",
  components: {
    LogoFooter,
  },
};
</script>	
<style  scoped>
.footer___bg {
  background-color: black;
  color: white;
}
.blog-text {
  color: #66d4d7;
}
</style>
