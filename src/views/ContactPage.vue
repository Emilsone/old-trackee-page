<template>
  <div class="flex min-h-screen items-center justify-start bg-white">
    <div class="mx-auto w-full max-w-lg">
      <h1 class="text-4xl font-bold">Contact us</h1>
      <p class="mt-3">Email us at hello@trackee.com or message us here:</p>

      <form action="" class="mt-10">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input
              type="text"
              name="name"
              class="
                peer
                block
                w-full
                appearance-none
                border-0 border-b border-gray-500
                bg-transparent
                py-2.5
                px-0
                text-sm text-gray-900
                focus:border-blue-600 focus:outline-none focus:ring-0
              "
              placeholder=" "
            />
            <label class="">Your name</label>
          </div>
          <div class="relative z-0">
            <input
              type="text"
              name="email"
              class="
                peer
                block
                w-full
                appearance-none
                border-0 border-b border-gray-500
                bg-transparent
                py-2.5
                px-0
                text-sm text-gray-900
                focus:border-blue-600 focus:outline-none focus:ring-0
              "
              placeholder=" "
            />
            <label class="">Your email</label>
          </div>
          <div class="relative z-0 col-span-2">
            <textarea
              name="message"
              rows="5"
              class="
                peer
                block
                w-full
                appearance-none
                border-0 border-b border-gray-500
                bg-transparent
                py-2.5
                px-0
                text-md text-gray-900
                focus:border-blue-600 focus:outline-none focus:ring-0
              "
              placeholder=" "
            ></textarea>
            <label class="">Your message</label>
          </div>
        </div>

        <button
          class="
            mt-6
            inline-block
            text-white
            shadow-2xl
            btn-sign
            px-10
            no-underline
            hover:text-underline
            py-4
          "
          href="#"
        >
          <router-link to="/login">Send Message</router-link>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contactpage",
};
</script>