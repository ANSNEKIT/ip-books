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
  //     favoriteBooks: [];
  //   }
  // },

  components: { TheNavbar },
  provide() {
    return {
      favoriteBooks: [],
      dataBooks: [
        {
          id: 1,
          name: 'Евгений Онегин',
          author: 'Пушкин А.С.',
          year: '2018',
          rating: 543,
          isChangeRating: true,
          favourite: false,
        },
        {
          id: 2,
          name: 'Война и мир',
          author: 'Толстой Л. Н.',
          year: '2020',
          rating: 444,
          isChangeRating: true,
          favourite: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>
