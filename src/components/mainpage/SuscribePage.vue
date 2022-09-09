<template>
  <section>
    <div class="bg-white flex items-center justify-center p-12 my-12 py-6">
      <div
        class="
          mx-auto
          w-full
          max-w-screen-lg
          suscribe-container
          shadow-2xl
          rounded-xl
          px-5
          py-16
        "
      >
        <div
          class="
            flex
            lg:w-5/6
            w-full
            sm:flex-row
            flex-col
            lg:mx-12
            px-8
            sm:space-x-4 sm:space-y-0
            space-y-4
            sm:px-0
            items-end
          "
        >
          <div class="relative flex-grow w-full">
            <h3 class="text-4xl font-bold text-white">Subscribe</h3>
            <p class="mt-2 text-white">
              Join our weekly digest. You'll also receive some of our best posts
              weekly.
            </p>
          </div>
          <div class="relative flex-grow w-full">
            <form @submit.prevent="sendEmail">
              <label for="email" class="leading-7 text-sm text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="
                  w-full
                  bg-white bg-opacity-50
                  rounded
                  border border-white
                  focus:border-white
                  focus:bg-transparent
                  focus:ring-2
                  focus:ring-indigo-200
                  text-base
                  outline-none
                  text-white
                  py-2
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </form>
          </div>
          <button
            class="
              text-black
              bg-white
              border-0
              py-3
              px-8
              focus:outline-none
              rounded
              text-lg
              sm:mx-none
              mx-auto
            "
          >
            Suscribe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "SubscribePage",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID",
          {
            email: this.email,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.email = "";
    },
  },
};
</script>
<style>
.suscribe-container {
  background-color: #1c1d1c;
}
</style>
