<template>
	<section>

 <div class="flex flex-wrap">
      <div class="w-full px-6 sm:w-1/2 xl:w-2/3 h-screen md:h-64 ">
        <div class="flex flex-wrap items-center px-4  shadow-sm rounded-md bg-white h-full">
          <div class="mx-5 md:mx-0 py-0  ">
			<a href="#" class="bg-gray-200 py-4 px-6 font-bold text-md md:">Upgrade your account </a>
            <p class="text-gray-500 py-4 text-md md:text-2xl ">Track your team and enjoy our feature <br>to manage team more easily</p>
            <a href="#" class="bg-yellow-500 py-4 px-6 font-bold text-md ">Choose Plan</a>
          </div>
          <div class=" px-0">
            <img src="../assets/bitcoin.png" class="w-24 h-24 md:w-48 md:h-48" />
          </div>
        </div>
      </div>

     

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0 h-64">
        <div class="flex items-center  shadow-sm rounded-md bg-white h-full ">

          <!-- <div class=" md:mx-0"> -->
           <PieChart
            style="width:55%"
            class="mx-auto"
			:chartdata="dataCollection"
			:options="chartOptions"
      />
          <!-- </div> -->
        </div>
      </div>
    </div>
   </section>
</template>
<script>
import PieChart from "./chart/pie.js";
export default {
  name: "TrackCard",
  components: { PieChart },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "bottom"
        },
        cutoutPercentage: 55
      },
      dataCollection: {
        // labels: ["One", "Two", "Three"],
        datasets: [
          {
            data: [70, 50, 60],
            backgroundColor: ["#B71C1C", "#E53935", "#E57373"]
          }
        ]
      }
    };
  }
};
</script>
<style>
</style>

