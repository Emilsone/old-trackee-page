<template>
 <div class="flex flex-col mt-8">
		<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
			<div
				class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
			>
				<table class="min-w-full">
				<thead>
					<tr>
					<th
						class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						User Name
					</th>
					<th
						class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Team Category
					</th>
					<th
						class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						On Teams
					</th>
					<th
						class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Total Hours
					</th>
					<th
						class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Hourly Rate
					</th>
					<th
						class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
					>
						Income
					</th>
					
					</tr>
				</thead>

				<tbody class="bg-white">
					<tr v-for="(u, index) in users" :key="index">
					<td
						class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
					>
						<div class="flex items-center">
						<div class="flex-shrink-0 h-10 w-10">
							<img
							class="h-10 w-10 rounded-full"
							:src="u.image"
							
							/>
                           
						</div>

						<div class="ml-4">
							<div class=" text-sm leading-5 font-medium text-gray-900"> 
							{{ u.name }}
							</div> 
							
						</div>
						</div>
					</td>
					<td
						class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
					>
						{{ u.teamcat }}
						
					</td>

					<td
						class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
					>
						<!-- <div class="text-sm leading-5 text-gray-900"> -->
						{{ u.team }}
						
						
					</td>
					<td
						class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
					>
						{{ u.th }}
						
					</td>

					<td
						class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
					>
						{{ u.hr }}
						
					</td>

					<td
						class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
					>
						{{ u.income }}
					</td>

					
					</tr>
				</tbody>
				</table>
			</div>
	</div>
</div>
</template>

<script>
export default {
  name: "TeamData",
  data() {
    return {
  
      users: [
        {
          name: "Tom Chike",
          teamcat: "Bussiness Team",
          team: "Digital Marketing",
          th: " 3:45 of 6h",
          hr: "$80.00",
          income: "$80.00",
          image: "/user/tom.png",
          
        },
        {
          name: "Edidiong Udoh",
          teamcat: "Design Team",
          team: "UI/Ux Design",
          th: " 3:45 of 6h",
          hr: "$80.00",
          income: "$80.00",
          image: '/user/edidiong.png',
        },
        {
          name: "Umaru Usman",
          teamcat: "Development Team",
          team: "Web Developer",
          th: " 3:45 of 6h",
          hr: "$80.00",
          income: "$80.00",
          image: '/user/umaru.png',
        },
        {
          name: "Mabel Udom",
          teamcat: "Management Team",
          team: "Management",
          th: " 3:45 of 6h",
          hr: "$80.00",
          income: "$80.00",
          image: '/user/shade.png',
        }
      ],
    
    };
  }


};
</script>

