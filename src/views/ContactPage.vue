<template>
  <main>
    <TheHeader />
    <section>
      <div class="w-full flex items-center justify-center my-12">
        <div class="mt-24 bg-white shadow rounded py-12 lg:px-28 px-8">
          <p
            class="
              md:text-3xl
              text-xl
              font-bold
              leading-7
              text-center text-black
            "
          >
            Let’s chat and get a quote!
          </p>

          <div class="items-center mt-8">
            <div class="md:w-72 flex flex-col md:mt-0 mt-4">
              <label class="text-base font-semibold leading-none text-gray-800"
                >Name</label
              >
              <input
                tabindex="0"
                arial-label="Please input your name"
                type="name"
                class="
                  text-base
                  leading-none
                  text-gray-900
                  p-3
                  focus:oultine-none focus:border-indigo-700
                  mt-4
                  bg-gray-100
                  border
                  rounded
                  border-gray-200
                  placeholder-gray-100
                "
                placeholder="Please input your name"
              />
            </div>
          </div>
          <div class="items-center mt-8">
            <div class="md:w-72 flex flex-col md:mt-0 mt-4">
              <label class="text-base font-semibold leading-none text-gray-800"
                >Email Address</label
              >
              <input
                tabindex="0"
                arial-label="Please input your name"
                type="name"
                class="
                  text-base
                  leading-none
                  text-gray-900
                  p-3
                  focus:oultine-none focus:border-indigo-700
                  mt-4
                  bg-gray-100
                  border
                  rounded
                  border-gray-200
                  placeholder-gray-100
                "
                placeholder="Please input your name"
              />
            </div>
          </div>
          <div class="items-center mt-8">
            <div class="md:w-72 flex flex-col md:mt-0 mt-4">
              <label class="text-base font-semibold leading-none text-gray-800"
                >Country</label
              >
              <input
                tabindex="0"
                arial-label="Please input country name"
                type="name"
                class="
                  text-base
                  leading-none
                  text-gray-900
                  p-3
                  focus:oultine-none focus:border-indigo-700
                  mt-4
                  bg-gray-100
                  border
                  rounded
                  border-gray-200
                  placeholder-gray-100
                "
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div class="w-full flex flex-col mt-8">
              <label class="text-base font-semibold leading-none text-gray-800"
                >Message</label
              >
              <textarea
                tabindex="0"
                aria-label="leave a message"
                role="textbox"
                type="name"
                class="
                  h-36
                  text-base
                  leading-none
                  text-gray-900
                  p-3
                  focus:oultine-none focus:border-indigo-700
                  mt-4
                  bg-gray-100
                  border
                  rounded
                  border-gray-200
                  placeholder-gray-100
                  resize-none
                "
              ></textarea>
            </div>
          </div>
          <p class="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div class="flex items-center justify-center w-full">
            <button
              class="
                lg:mt-12
                mt-4
                btn-sign
                text-base
                font-semibold
                leading-none
                text-white
                py-4
                px-10
                rounded
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-700
                focus:outline-none
              "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/mainpage/TheHeader.vue";
import TheFooter from "@/components/mainpage/TheFooter.vue";
import emailjs from "emailjs-com";
export default {
  name: "ContactPage",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      email: "",
      name: "",
      Message: "",
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
            name: this.name,
            message: this.Message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.email = "";
      this.name = "";
      this.Message = "";
    },
  },
};
</script>


