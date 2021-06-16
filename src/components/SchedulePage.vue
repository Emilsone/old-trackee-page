<template>
  <main>
    <section class="hero___content ">
      <div class="md:py-12 py-24">
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
          <!--Right Col-->
          <div class="w-full md:w-3/5 my-12 md:py-6 text-center">
            <!-- <img
              class="w-full md:w-4/5 z-50 md:ml-24 ml-0"
              src="../assets/bg-hero.png"
              alt
            /> -->
          </div>
          <!--Left Col-->
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
            <p class="text-md font-bold py-3 uppercase paragraph">Create ~ Plan ~ Execute</p>
            <h1 class="my-4 text-5xl font-bold leading-tight">
              Manage your team for the better result
            </h1>

            <nav
              class="
                flex flex-col
                sm:items-start
                sm:text-left
                text-center
                items-center
                -mb-1
                space-y-4
              "
            >
              <a>
                <span
                  class="
                    bg-indigo-100
                    text-indigo-500
                    w-4
                    h-4
                    mr-2
                    rounded-full
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Meeting and sharing ideas
              </a>
              <a>
                <span
                  class="
                    bg-indigo-100
                    text-indigo-500
                    w-4
                    h-4
                    mr-2
                    rounded-full
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Create team task
              </a>
              <a>
                <span
                  class="
                    bg-indigo-100
                    text-indigo-500
                    w-4
                    h-4
                    mr-2
                    rounded-full
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Report progress and challenges
              </a>
            </nav>
            <div
              class="flex w-full md:justify-start justify-center items-end mt-6"
            >
              <button
                class="
                  inline-flex
                  text-white
                  btn-start
                  border-0
                  py-3
                  px-8
                  xs:px-8
                  focus:outline-none
                  rounded
                  text-md
                  xs:text-lg
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "SchedulePage",
};
</script>
<style>
.btn-start {
  background: #0c0e2d;
  border-radius: 8px;
}
.hero___content{
  background-color:#F2F5FA;
}

.paragraph{
    color:#0c0e2d;
}
</style>