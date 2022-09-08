<template>
  <main>
    <TheHeader />
    <!-- component -->
    <main id="content" role="main" class="w-full max-w-md mx-auto p-6 mt-24">
      <div
        class="
          mt-7
          bg-white
          rounded-xl
          shadow-lg
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
              Reset password 
            </h1>
          </div>

          <div class="mt-5">
            <form>
              <div class="grid gap-y-4">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >Email address</label
                  >
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="
                        py-3
                        px-4
                        block
                        w-full
                        border-2 border-gray-200
                        rounded-md
                        text-sm
                        focus:border-blue-500 focus:ring-blue-500
                        shadow-sm
                      "
                      required
                      aria-describedby="email-error"
                    />
                  </div>

                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                
                <button
                  type="submit"
                  class="
                    py-3
                    px-4
                    inline-flex
                    justify-center
                    items-center
                    gap-2
                    rounded-md
                    border border-transparent
                    font-semibold
                    bg-btn
                    text-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:ring-offset-2
                    transition-all
                    text-sm
                    dark:focus:ring-offset-gray-800
                  "
                >
                 Reset Password
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <TheFooter />
  </main>
</template>
  <script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
  <style scoped>
.bg-btn {
  background-color: #0c0e2d;
}
</style>