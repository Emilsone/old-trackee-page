<template>
  <section class="">
    <div class="">
      <div
        class="
          container
          px-3
          mx-auto
          flex flex-wrap flex-col
          md:flex-row
          items-center
        "
      >
        <!--Left Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
            src="@/assets/team-work.png"
            alt
          />
        </div>
        <!--Right Col-->
        <div
          class="
            flex flex-col
            w-full
            md:w-2/5
            justify-center
            lg:items-start
            items-center
            text-center
            md:text-left
            hero-text
          "
        >
          <p class="text-md font-bold task-text px-6 py-3 uppercase">
            100% Trusted plartform ✔
          </p>
          <h1 class="my-4 text-5xl font-bold leading-tight capitalize">
            Best tool for your team to work  <span class="hero-span">efficiently</span> 
          </h1>
          <p class="leading-normal text-lg mb-4 py-2">
           Rememeber projects management is the work of leading the team to acheive goals


          </p>

    

          <div class="flex w-full md:justify-start justify-center items-center">
            <input
              type="email"
              class="
                md:w-4/5
                w-full
                px-2
                py-4
                mr-2
                bg-gray-100
                shadow-inner
                border border-gray-400
                focus:outline-none
              "
              placeholder="jane@example.com"
              required
            />
            <button
              class="btn-bg text-gray-200 px-5 py-4  shadow"
              style="margin-left: -7.3rem"
            >
              Notify Me
            </button>
          </div>
          <p class="leading-7 text-md text-gray-600 py-2">
            👌 Notify me when the App is launched 👌
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WaitlistPage",
};
</script>
<style scoped>
.btn-bg {
  background: #0c0e2d;
  /* border-radius: 8px; */
}
.hero-text,
.task-text,
p {
  color: #07080d;
}
.task-text {
  border: 2px solid gray;
}

</style>


		
