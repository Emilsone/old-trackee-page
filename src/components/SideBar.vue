<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      class="
        fixed
        z-20
        inset-0
        bg-black
        opacity-50
        transition-opacity
        lg:hidden
      "
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="
        fixed
        z-30
        inset-y-0
        left-0
        w-64
        transition
        duration-300
        transform
        bg-color
        overflow-y-auto
        lg:translate-x-0
        lg:static
        lg:inset-0
      "
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <div clas="w-24 h-24 bg-gray-900 rounded-lg">
            <p>T</p>
          </div>

          <span class="text-white text-2xl mx-2 font-semibold">Trackee.</span>
        </div>
      </div>

      <nav class="pt-24">
        <ul>
          <router-link to="/dashboard"
            ><li>
              <i class="fa fa-home px-2" aria-hidden="true"></i>Dashboard
            </li></router-link
          >
          <router-link to="/teampage"
            ><li>
              <i class="fa px-2" aria-hidden="true"></i> Project Board
            </li></router-link
          >

          <router-link to="/personal"
            ><li>
              <i class="fa fa-users px-2" aria-hidden="true"></i>Team Members
            </li></router-link
          >
          <router-link to="/personal"
            ><li>
              <i class="fa fa-calendar px-2" aria-hidden="true"></i> Schedule
            </li></router-link
          >

          <router-link to="/personal"
            ><li>
              <i class="fa fa-envelope px-2" aria-hidden="true"></i> Inbox
            </li></router-link
          >

          <router-link to="/personal"
            ><li>
              <i class="fa fa-pie-chart px-2" aria-hidden="true"></i> Report
            </li></router-link
          >
        </ul>
      </nav>
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
  padding: 90px 20px;
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
