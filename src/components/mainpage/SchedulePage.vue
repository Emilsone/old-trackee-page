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
          <div class="w-full md:w-3/5 my-14 md:py-6 text-center">
            <img
              class="w-full md:w-4/5 z-50 md:ml-12 ml-0"
              src="@/assets/trackee-mockup.png"
              alt
            />
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
              Manage your task for the better result
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
                >Planning and sharing goals
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
                >Split goals into task
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
  /* border-radius: 8px; */
}
.hero___content{
  background-color:#F9F9F9;
}

.paragraph{
    color:#0c0e2d;
}
</style>