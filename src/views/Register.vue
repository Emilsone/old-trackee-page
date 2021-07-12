
<template>
  <div class="bg-white h-screen">
    <div class="w-full">
      <!-- Register Section -->
      <div class="w-full md:w-1/2 mx-auto">
        <div
          class="
            flex flex-col
            justify-center
            md:justify-start
            my-auto
            pt-8
            md:pt-0
            px-8
            md:px-24
            lg:px-32
          "
        >
          <span class="text-xs font-bold md:pt-12">BEGIN YOUR JOURNEY </span>
          <p class="text-3xl font-bold pt-0 md:pt-2">Sign Up Now</p>
          <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="signUp">
            <!-- <div class="flex flex-col pt-4">
              <label for="name" class="text-lg">NAME</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                placeholder="John Smith"
                class="border border-gray-500 p-2"
                required
              />
            </div> -->

            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">EMAIL</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                placeholder="your@email.com"
                class="border border-gray-500 p-2"
                required
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">PASSWORD</label>
              <input
                v-model="form.password"
                type="text"
                name="password"
                id="form-password"
                placeholder="Your Password"
                class="border border-gray-500 p-2"
                required
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">CONFIRM PASSWORD</label>
              <input
                v-model="form.password"
                type="password"
                id="password"
                placeholder="Password"
                class="border border-gray-500 p-2"
                required
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
              <p class="text-gray-600 md:text-lg text-sm py-2">
                I Accept the Terms and Conditions
              </p>
            </div>
            <div
              class="
                flex flex-wrap
                align-center
                justify-between
                lg:space-x-5
                py-3
              "
            >
              <button
                type="submit"
                class="bg-black text-white d text-lg p-2 px-8"
              >
                REGISTER
              </button>
              <!-- <div class=""> -->
              <p class="py-3 md:pt-4">
                <router-link
                  to="/login"
                  class="underline font-semibold py-3 md:py-6"
                >
                  HAVE AN ACCOUNT?</router-link
                >
              </p>
              <!-- </div> -->
            </div>
            <div class="lg:p-4 text-center flex space-x-4">
              <h1>Sign up With</h1>

              <svg class="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              <span>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </span>
            </div>

             <p class="text-sm text-black py-2">
            By signing up you agree to our Terms of Service and Privacy Policy
          </p>
            <!-- component -->
            <div
              class="
                bg-red
                border border-red-light
                text-red-dark
                pl-4
                pr-8
                py-3
                rounded
                relative
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
    </div>
  </div>
</template>



    
  

<script>
// import { mapActions } from "vuex";
import database from "../services/database";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        // name: "",
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    async signUp() {
      let result = await database.signUp(this.email, this.password);
      // this.$router.push("/");
      if (result.message) {
        this.error = result.message;
      }
      console.log("user is created");
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>