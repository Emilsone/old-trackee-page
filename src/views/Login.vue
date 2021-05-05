
<template>
  <div class="h-scrren bg-white">
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 mx-auto">
        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="signIn">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Username</label>
              <input
                v-model="form.name"
                type="text"
                name=""
                id=""
                placeholder="Username"
                class="border border-gray-500 p-2"
                required
                autocomplete="password"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input
                v-model="form.email"
                type="text"
                name=""
                id=""
                placeholder="your@gmail.com"
                class="border border-gray-500 p-2"
                required
                autocomplete=""
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input
                v-model="form.password"
                type="text"
                name=""
                id=""
                placeholder="Your Password"
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
              <p class="text-gray-600 text-md py-2">Remember Me My Password</p>
            </div>
            <div
              class="flex flex-wrap align-center justify-between lg:space-x-5 py-3"
            >
              <button
                type="submit"
                class="bg-black text-white d text-lg p-2 px-8"
              >
                Sign In
              </button>
              <!-- <div class=""> -->
              <p class="py-3 md:pt-4">
                <router-link
                  to="/register"
                  class="underline font-semibold py-3 md:py-6"
                  >DON'T HAVE AN ACCOUNT?</router-link
                >
              </p>
              <!-- </div> -->
            </div>
            <div class="lg:p-4 text-center flex space-x-4 py-3">
              <h1>Sign In With</h1>

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
            </div>

            <!-- Error====section -->
            <div
              class="bg-red-light border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative my-3"
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
      <div class="w-1/2 shadow-2xl login-bg">
        <img class="object-cover w-full h-screen hidden md:block" src="" />
      </div>
    </div>
  </div>
</template>



    
  

<script>
export default {
  name: "Login",

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
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#error {
  color: red;
}

.login-bg {
  background: #f2c98a;
}
</style>
