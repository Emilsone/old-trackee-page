<template>
  <div class="relative">
    <!-- Dropdown toggle button -->
    <div
      class="
        relative
        z-10
        block
        p-2
        bg-white
        rounded-md
        dark:bg-gray-800
        focus:outline-none
        inline-flex
      "
    >
    Resources
      <svg
        class="w-5 h-5 text-gray-800 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Dropdown menu -->
    <div
      class="
        absolute
        right-0
        z-20
        w-64
        py-2
        mt-2
        bg-white
        rounded-md
        shadow-xl
        dark:bg-gray-800
      "
    >
      <a
        href="#"
        class="
          block
          px-4
          py-2
          text-sm text-gray-700
          capitalize
          transition-colors
          duration-200
          transform
          dark:text-gray-300
          hover:bg-blue-500
          hover:text-white
          dark:hover:text-white
        "
      >
        Blog
      </a>
      <a
        href="#"
        class="
         
          px-4
          py-2
          text-sm text-gray-700
          capitalize
          transition-colors
          duration-200
          transform
          dark:text-gray-300
          hover:bg-blue-500
          hover:text-white
          dark:hover:text-white
          inline-block
        "
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
        Documentation
      </a>
      <a
        href="#"
        class="
          
          px-4
          py-2
          text-sm text-gray-700
          capitalize
          transition-colors
          duration-200
          transform
          dark:text-gray-300
          hover:bg-blue-500
          hover:text-white
          dark:hover:text-white
          inline-block
          space-x-4
        "
      >
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>  Developers & Api
      </a>
     
      <a
        href="#"
        class="
        
          px-4
          py-2
          text-sm text-gray-700
          capitalize
          transition-colors
          duration-200
          transform
          dark:text-gray-300
          hover:bg-blue-500
          hover:text-white
          dark:hover:text-white
          inline-block
        "
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>  Guidiance
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureMenu",
};
</script>

