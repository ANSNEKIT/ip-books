<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import dataToJson from './dataBooks';

const dataBooks = dataToJson.map((book) => JSON.parse(book));

export default {
  components: { TheNavbar },
  provide() {
    return {
      favoriteBooks: [],
      dataBooks,
    };
  },
};
</script>

<style>
</style>
