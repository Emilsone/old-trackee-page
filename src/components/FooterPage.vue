<template>
  <footer class="footer___bg">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <LogoFooter />

        <div class="flex-1 py-6">
          <p class="uppercase md:mb-6 font-bold">MENU</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">About Us </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Features </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Pricing</a>
            </li>
          </ul>
        </div>
        <div class="flex-1 py-6">
          <p class="uppercase md:mb-6 font-bold">Features</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Team Management </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Time Schedule</a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Task List </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Activity Report</a>
            </li>
          </ul>
        </div>
        <div class="flex-1 py-6">
          <p class="uppercase md:mb-6 font-bold">Help Center</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Terms & Condition </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Cookies</a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Privacy </a>
            </li>
            <i class="fa fa-envelope text-xl" aria-hidden="true"></i>
            <a href="mailto:" class="px-2">hello@trackee.com</a>
          </ul>
        </div>
      </div>
      <div class="flex md:text-center text-right">
        <p>© Trackee 2021. All rights reserved.</p>
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
  /* background-color: #050f1d; */
  color: #0c0e2d;
}
.blog-text {
  color: #66d4d7;
}
</style>
