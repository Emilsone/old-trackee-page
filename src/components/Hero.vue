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
            The Best Way to <span> Manage </span> Your Team work
          </h1>
          <p class="leading-normal text-lg mb-4 py-2">
            Trackee is a task management tool that allows teams to easily
            measure the progress and time spent on given task, To help them make
            the most of their effort.
          </p>
          <div class="flex w-full md:justify-start justify-center items-end">
            <button
              class="inline-flex text-white btn-start border-0 py-3 px-8 xs:px-8 focus:outline-none rounded text-md xs:text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="../assets/bg-hero.png"
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
  color: #0c0e2d;
}
.task-text {
  border: 2px solid gray;
}
</style>


		
