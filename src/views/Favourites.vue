<template>
  <div class="favourites">
    <section class="card">
      <h1 class="text-center mb-5">Список избранных книг</h1>
    </section>

    <empty-card v-if="!favourites.length" title=""></empty-card>
    <app-favourite
      v-else
      v-for="(book, identity) in favourites"
      :key="book.id"
      :book="book"
      :identity="identity"
      @remove-favourite="removeFavorite"
    ></app-favourite>
  </div>
</template>

<script>
import AppFavourite from '../components/AppFavourite.vue';
import EmptyCard from '../components/AppEmptyCard.vue';

export default {
  components: { EmptyCard, AppFavourite },
  name: 'Favourites',
  inject: ['dataBooks', 'favoriteBooks'],
  data() {
    return {
      favourites: this.favoriteBooks,
    };
  },

  methods: {
    removeFavorite(identity, idx) {
      this.favourites = this.favourites.filter((element, id) => id !== identity);
      this.favoriteBooks.splice(identity, 1);
      this.dataBooks.forEach((el) => {
        if (el.id === idx) {
          // eslint-disable-next-line no-param-reassign
          el.favourite = !el.favourite;
        }
      });
    },
  },

  created() {
    const favourites = localStorage.getItem('favourites');

    if (favourites) {
      this.favourites = JSON.parse(favourites);
    }
  },

  watch: {
    favourites() {
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
    },
  },

};
</script>

<style scoped>
 .favourites {
   margin-top: 100px;
 }
</style>
