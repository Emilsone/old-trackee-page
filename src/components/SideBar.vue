<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-color overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            class="h-12 w-12"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
              fill="#4C51BF"
              stroke="#4C51BF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
              fill="white"
            />
          </svg>

          <span class="text-white text-2xl mx-2 font-semibold">Trackee.</span>
        </div>
      </div>

      <nav>
        <div class="p-12">
          <button
            class="w-full cta-btn font-semibold py-2 mt-5 shadow-xl hover:shadow-xl flex items-center justify-center"
          >
            <i class="fa fa-plus mr-3"></i> Create New Team
          </button>
        </div>

        <router-link to="/overview"
          ><li>
            <i class="fa fa-home px-2" aria-hidden="true"></i>Dashboard
          </li></router-link
        >
        <router-link to="/teampage"
          ><li>
            <i class="fa fa-users px-2" aria-hidden="true"></i> All Team
          </li></router-link
        >
        <router-link to="/manage"
          ><li>
            <i class="fa fa-align-left px-2" aria-hidden="true"></i> Active Task
          </li></router-link
        >
        <router-link to="/personal"
          ><li>
            <i class="fa fa-calendar px-2" aria-hidden="true"></i>Calendar
          </li></router-link
        >

        <router-link to="/personal"
          ><li>
            <i class="fa fa-commenting px-2" aria-hidden="true"></i> Messages
          </li></router-link
        >
        <router-link to="/personal"
          ><li>
            <i class="fa fa-cog px-2" aria-hidden="true"></i>Settings
          </li></router-link
        >
        <router-link to="/personal"
          ><li>
            <i class="fa fa-sign-out px-2" aria-hidden="true"></i> Logout
          </li></router-link
        >
      </nav>
      <!-------------- Category Section------------------------- -->
      <!-- <nav>
        <div class="p-6">
          <h2
            class="font-semibold py-2 mt-5 text-white flex items-center space-between"
          >
            <span class="mr-5">Categories </span>
            <i class="fa fa-plus ml-12"></i>
          </h2>
        </div>

        <router-link to="/engineeringboard"><li>#Development</li></router-link>
        <router-link to="/designboard"><li>#Design</li></router-link>
        <router-link to="/marketingboard"><li>#Bussiness</li></router-link>
        <router-link to="/"><li>#Management</li></router-link>
      </nav> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Side-Bar",
};
</script>

<style scoped>
.cta-btn {
  color: white;
  border-style: dotted;
}
nav {
  padding: 7px 0;
}

li {
  padding: 0px 30px;
  list-style-type: none;
}

a {
  padding: 15px 0px;
  display: block;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

a:hover {
  background-color: #1947ee;
}
.bg-color {
  background-color: #0d2ccd;
}
</style>
