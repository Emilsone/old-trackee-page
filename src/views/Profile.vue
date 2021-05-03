<template>
  <section>
    <h1>Profile</h1>
    <p>{{ currentUser.email }}</p>
  </section>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>