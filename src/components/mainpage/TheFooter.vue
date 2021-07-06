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
             <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Blog</a>
            </li>
             <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Resources</a>
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
              <a href="#" class="no-underline">Progress Tracking</a>
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
            <span class="flex">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:" class="px-2">hello@trackee.com</a>
            </span>
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
import LogoFooter from "@/components/mainpage/LogoFooter";
export default {
  name: "TheFooter",
  components: {
    LogoFooter,
  },
};
</script>	
<style  scoped>
.footer___bg {
  /* background-color: #050f1d; */
  color: #0c0e2d;
  background-color: #F9F9F9;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23f9f9f9' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

</style>
