<template>
  <div class="flex-1 mb-6 py-2">
    <a
      class="
        no-underline
        hover:no-underline
        font-bold
        text-2xl
        lg:text-4xl
        task-text
        px-6
        py-2
      "
      href="#"
      >Trackee
    </a>
    <p class="text-md py-6">
      Best tool for effective team<br />
      collaboration, with a high performance results
    </p>

     <i class="fa fa-envelope text-xl px-1" aria-hidden="true"></i> <a href="mailto:" class="px-2">hello@trackee.com</a>

    <div class="flex mt-6 -mx-2">
      <a
        href="#"
        class="
          mx-2
          text-gray-700
          dark:text-gray-200
          hover:text-gray-600
          dark:hover:text-gray-400
        "
        aria-label="Linkden"
      >
      <i class="fa fa-facebook text-xl" aria-hidden="true"></i>

      </a>

      <a
        href="#"
        class="
          mx-2
          text-gray-700
          dark:text-gray-200
          hover:text-gray-600
          dark:hover:text-gray-400
        "
        aria-label="Facebook"
      >
       <i class="fa fa-github text-xl" aria-hidden="true"></i>

      </a>

      <a
        href="#"
        class="
          mx-2
          text-gray-700
          dark:text-gray-200
          hover:text-gray-600
          dark:hover:text-gray-400
        "
        aria-label="Twitter"
      >
       <i class="fa fa-linkedin text-xl" aria-hidden="true"></i>

      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogoFooter",
};
</script>
<style scoped>
.task-text {
  border: 2px solid gray;
}
</style>