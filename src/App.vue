<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  // data() {
  //   return {
  //     isAuth: true
  //   }
  // },
  // methods: {
  // },
  components: { TheNavbar },
  provide() {
    return {
      books: [
        'mock',
      ],
    };
  },
};
</script>

<style>
</style>
