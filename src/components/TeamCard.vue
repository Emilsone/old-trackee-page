<template>
	<section>
<div>
<h1 class="py-4 px-5 text-xl">Team Board</h1>
</div>
 <div class="flex flex-wrap">
      <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
		
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div class="mx-5 md:mx-0">
			<a href="#" class="bg-pink py-3">Bussiness Team</a>
            <h4 class="text-xl font-semibold text-gray-700">Digital Marketing</h4>
            <p class="text-gray-500 text-sm">A great team of digital marketers</p>
          </div>
          <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
            <!-- <i class="fa fa-hand-o-right px-2" aria-hidden="true"></i> -->
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">

          <div class="mx-5 md:mx-0">
            <a href="#" class="py-3" >Design Team</a>
            <h4 class="text-xl font-semibold text-gray-700">UI/UX</h4>
            <p class="text-gray-500 text-sm">A great team of creative designers</p>
          </div>
          <div class="p-3 rounded-full  bg-opacity-75 bg-black ">
            <!-- <i class="fa fa-hand-o-right px-2" aria-hidden="true"></i> -->
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">

          <div class="mx-5 md:mx-0">
           <a href="#" class="py-3">Development Team</a>
            <h4 class="text-xl font-semibold text-gray-700">
            Web Development
            </h4>
            <p class="text-gray-500 text-sm">A great team of creative thinkers</p>
          </div>
          <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
          </div>
        </div>
      </div>
    </div>
   </section>
</template>
<script>
export default {
	name:'TeamCard'
}
</script>


