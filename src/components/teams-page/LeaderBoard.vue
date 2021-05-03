<template>
	<section class="text-center">
<div>
<h1 class="py-4 px-5 text-xl text-left">Leader Board</h1>
</div>
<!-- <div>
</div> -->
 <div class="flex flex-wrap" v-for="(u, index) in users" :key="index.name">
       <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center  shadow-sm rounded-md bg-white h-full  ">

          <div class="mx-5 md:mx-0 px-8	 text-center">
          <img :src="u.avatar" alt=""  class="object-cover w-24 h-24 mx-auto rounded-full ">
            <a href="#" class="py-3" >{{u.name}}</a>
            <h4 class="text-xl font-bold text-gray-700">{{u.position}}</h4>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center   shadow-sm rounded-md bg-white h-full">

          <div class="mx-5 md:mx-0 px-8  	text-center">
          <img :src="u.avatartwo" alt=""  class="object-cover w-24 h-24 mx-auto rounded-full ">
           <a href="#" class="py-3">{{u.nametwo}}</a>
            <h4 class="text-xl font-bold text-gray-700">{{u.positiontwo}}</h4>
          </div>
        </div>
      </div>

       <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center  shadow-sm rounded-md bg-white h-full">

          <div class="mx-5 md:mx-0 px-8	 text-center">
            <img :src="u.avatarthree" alt=""  class="object-cover w-24 h-24 mx-auto rounded-full ">    
             <a href="#" class="py-3" >{{u.namethree}}</a>
            <h4 class="text-xl font-bold text-gray-700 xl:px-8">{{u.positionthree}}</h4>
          </div>
        </div>
      </div>
    </div>

	<EngineeringBoard />
	<DesignBoard />
	<MarketingBoard />


   </section>
</template>

<script>
import EngineeringBoard from "@/components/teams-page/EngineeringBoard.vue";
import DesignBoard from "@/components/teams-page/DesignBoard.vue";
import MarketingBoard from "@/components/teams-page/MarketingBoard.vue";
export default {
  name: "LeaderBoard",
  components: {
    EngineeringBoard,
    DesignBoard,
    MarketingBoard
  },
  data: () => {
    return {
      users: [
        {
          name: "Joe Hanson",
          nametwo: "John David",
          namethree: "Gloria John",
          position: "Cheif Executive Officer",
          positiontwo: "Cheif Technology Officer",
          positionthree: "Project Manager",
          avatar: "/img1.png",
          avatartwo: "/img2.png",
          avatarthree: "/img3.png"
        }
      ]
    };
  }
};
</script>
