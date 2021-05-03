<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0 header___bar">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <span
          class="flex items-center p-1 text-black hover:text-gray-900"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <title>Menu</title>
          </svg>
        </span>
      </div>

      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-center flex-1 items-center">
          <li class="mr-3">
            <a class="inline-block py-2 px-4 text-black no-underline" href="#"
              ><router-link to="/">Home</router-link></a
            >
          </li>

          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#"
              ><router-link to="/">About Us </router-link></a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#"
              ><router-link to="/dashboard">Track Team </router-link></a
            >
          </li>
          <template v-if="!CurrentUser">
            <li class="mr-3">
              <a
                class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
                ><router-link to="/login">Sign In</router-link></a
              >
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-white shadow-2xl btn-sign px-10 no-underline hover:text-underline py-3 md:mx-6"
                href="#"
                ><router-link to="/register"> Sign Up </router-link></a
              >
            </li>
          </template>
          <template v-else>
            <li class="mr-3">
              <a
                class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                @click="LogOut"
                >Log Out</a
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
// import database from "../services/database";

export default {
  name: "NavBar",
  components: {
    logo: Logo,
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
    };
  },
  computed: {
    // currentUser() {
    //   return this.$store.state.currentUser;
    // },
    isSticky() {
      return this.scrollY > 10;
    },
    headerClassList() {
      return this.isSticky ? "bg-white shadow" : "";
    },
    navActionClassList() {
      return this.isSticky ? "gradient text-white" : "bg-white text-gray-800";
    },
    navContentClassList() {
      let classList = this.isSticky ? "bg-white" : "bg-gray-100";
      if (!this.isOpen) {
        classList += ` hidden`;
      }
      return classList;
    },
  },
  methods: {
    // async logOut() {
    //   await database.logOut();
    //   this.$router.push("/");
    // },
    onClick() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollY = window.scrollY;
    },
    onToggleClick() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.scrollY = window.scrollY;
    document.addEventListener("click", this.onClick);
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("scroll", this.onScroll, true);
  },
};
</script>
<style>
.btn-sign {
  background-color: #273335;
  border-radius: 8px;
}
</style>
