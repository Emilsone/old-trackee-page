<template>
  <section class="hero___content">
    <div class="md:py-12 py-24">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full md:w-2/5 justify-center lg:items-start items-center text-center md:text-left hero-text"
        >
          <p class="text-md font-bold task-text px-6 py-3 uppercase">
           100% Trusted plartform ✔
          </p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            The Best Tool to <span> Manage </span> your Task
          </h1>
          <p class="leading-normal text-lg mb-4 py-2">
            Trackee is a task management tool that allows you to easily measure the progress and time spent on your task and keep them on track in a fun and flexible way
          </p>
          <div class="flex w-full md:justify-start justify-center items-end items-center flex-wrap sm:m-4">
            <a
                class="
                  inline-block
                  text-white
                  shadow-2xl
                  btn-sign
                  px-10
                  no-underline
                  hover:text-underline
                  py-3
                  
                "
                href="#"
                ><router-link to="/register"> Start Free Trial </router-link></a
              >
              <p>No credit card required</p>
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="@/assets/bg-hero.png"
            alt
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>
<style scoped>
.btn-start {
  background: #0c0e2d;
  border-radius: 8px;
}
.hero-text,
.task-text,
p {
  color: #07080D;
}
.task-text {
  border: 2px solid gray;
}
</style>


		
