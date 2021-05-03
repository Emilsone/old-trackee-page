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
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Start organizing Your projects With Managie
          </h1>
          <p class="leading-normal text-lg mb-4 py-2">
            Managie helps you to organize and priotize your projects and keep
            them on track in a fun and flexible way
          </p>
          <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                for="hero-field"
                class="leading-7 text-sm text-gray-600"
              ></label>
              <input
                type="text"
                placeholder="email@name.com"
                class="w-full bg-gray-200 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-black focus:bg-transparent focus:border-black text-base outline-none text-gray-700 py-1 xs:py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="inline-flex text-white btn-start border-0 py-3 px-4 xs:px-8 focus:outline-none rounded text-sm xs:text-lg z-10"
              style="margin-left: -2.2rem"
            >
              Get early access
            </button>
          </div>
          <p class="leading-7 text-md text-gray-600 py-2">
            Get notified when we are live ✌
          </p>
          
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="../assets/bg-2.png"
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
  background: #273335;
  border-radius: 8px;
}
.hero-text {
  color: #273335;
}
</style>


		
