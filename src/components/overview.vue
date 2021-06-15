<template>
  <div class="bg-back">
    <!-- <TrackCard /> -->
    <TeamCard />
    <TeamData />
  </div>
</template>

<script>
// import TrackCard from "@/components/TrackCard.vue";
import TeamCard from "@/components/TeamCard.vue";
import TeamData from "@/components/TeamData.vue";

export default {
  name: "Overview",
  components: {  TeamCard, TeamData },
};
</script>

<style >
</style>

