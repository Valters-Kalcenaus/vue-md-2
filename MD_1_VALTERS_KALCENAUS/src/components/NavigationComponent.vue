<template>
  <div class="navigation">
    <router-link to="/home" active-class="active">HOME</router-link>
    <router-link to="/about-me" active-class="active">ABOUT ME</router-link>
</div>

</template>

<script>
export default {
  computed: {
    current() {
      return this.$route.path;
    }
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  }
};
</script>
