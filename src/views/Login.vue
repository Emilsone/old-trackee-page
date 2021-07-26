
<template>
  <div class="h-scrren bg-white">
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 mx-auto my-auto">
        <div
          class="
            flex flex-col
            justify-center
            items-center
            flex-end
            pt-8
            md:pt-0
            px-8
            md:px-24
            lg:px-32
          "
        >
          <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="signIn">
            <h1 class="text-2xl capitalize font-bold">
              Get started with our free plan
            </h1>

            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input
                v-model="form.email"
                type="text"
                name=""
                id=""
                placeholder="name@company.com"
                class="border border-gray-500 p-2"
                required
                autocomplete=""
              />
            </div>

            <div class="flex items-baseline space-x-2 mt-2">
              <input
                type="checkbox"
                name=""
                id=""
                class="inline-block"
                required
              />
              <p class="text-gray-600 text-sm py-2">
                By signing up you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>

            <div class="py-3">
              <button
                type="submit"
                class="btn-bg text-white d text-lg p-2 px-8"
              >
                Sign In
              </button>
            </div>

            <!-- Error====section -->
            <div
              class="
                bg-red-light
                border border-red-light
                text-red-dark
                pl-4
                pr-8
                py-3
                rounded
                relative
                my-3
              "
              role="alert"
              v-if="error"
            >
              <strong class="font-bold px-2">oops</strong>
              <span class="block sm:inline">{{ error }}</span>
              <span class="absolute pin-t pin-b pin-r pr-3">
                <svg
                  class="h-6 w-6 text-red"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                  />
                </svg>
              </span>
            </div>
          </form>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl form-bg">
        <div class="object-cover w-full h-screen hidden md:block">
          <div class="max-w-3xl flex h-full m-4 md:m-6">
            <div class="flex flex-col w-full">

              <div class="md:pr-10 md:py-2">
                <div class="flex relative pb-12">
                  <div
                    class="
                      h-full
                      w-10
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      class="h-full w-1 bg-gray-200 pointer-events-none"
                    ></div>
                  </div>
                  <div
                    class="
                      flex-shrink-0
                      w-10
                      h-10
                      rounded-full
                     btn-bg
                      inline-flex
                      items-center
                      justify-center
                      text-white
                      relative
                      z-10
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2
                      class="
                        font-medium
                        title-font
                        text-sm text-gray-900
                        mb-1
                        tracking-wider
                      "
                    >
                      STEP 1
                    </h2>
                    <p class="leading-relaxed">
                    Create an account
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div
                    class="
                      h-full
                      w-10
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      class="h-full w-1 bg-gray-200 pointer-events-none"
                    ></div>
                  </div>
                  <div
                    class="
                      flex-shrink-0
                      w-10
                      h-10
                      rounded-full
                     btn-bg
                      inline-flex
                      items-center
                      justify-center
                      text-white
                      relative
                      z-10
                    "
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2
                      class="
                        font-medium
                        title-font
                        text-sm text-gray-900
                        mb-1
                        tracking-wider
                      "
                    >
                      STEP 2
                    </h2>
                    <p class="leading-relaxed">
                     Invite team members into the application
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div
                    class="
                      h-full
                      w-10
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  ></div>
                  <div
                    class="
                      flex-shrink-0
                      w-10
                      h-10
                      rounded-full
                     btn-bg
                      inline-flex
                      items-center
                      justify-center
                      text-white
                      relative
                      z-10
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2
                      class="
                        font-medium
                        title-font
                        text-sm text-gray-900
                        mb-1
                        tracking-wider
                      "
                    >
                      STEP 3
                    </h2>
                    <p class="leading-relaxed">
                     Get verified and start managing your team members
                    </p>
                  </div>
                </div>
              </div>
              <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 mx-auto" src="../assets/login-bro.png" alt="step">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { mapActions } from "vuex";
// import database from "../services/database";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: "",
    };
  },
  // methods: {
  //   async signIn() {
  //     let result = await database.signIn(this.email, this.password);
  //     if (result.message) {
  //       this.error = result.message;
  //     } else {
  //       console.log("User is Logged in");
  //     }
  //   },
  // },
};
</script>

<style scoped>
.form-bg {
  background-color: #f9f9f9;
}
.btn-bg {
  background: #0c0e2d;
  /* border-radius: 8px; */
}
* {
  box-sizing: border-box;
}

#error {
  color: red;
}
</style>
