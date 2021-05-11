<template>
  <section class="home">
    <div class="card">
      <h1 class="text-center my-5">
        Добро пожаловать в сервис поиска электронных книг!
      </h1>
      <p class="mb-5">
        Здесь вы можете найти книги разных изданий, авторов. На данной странице
        реализована фильтрация по разным категориям. Сортировать можно по
        алвафиту, дате выхода, рейтингу.
      </p>
      <app-search></app-search>
      <app-filters></app-filters>
      <app-sort></app-sort>
    </div>

    <app-no-books
      v-if="!books.length"
    ></app-no-books>
    <app-books
      v-else
      v-for="(book, identity) in books"
      :key="book.id"
      :id="book.id"
      :name="book.name"
      :author="book.author"
      :year="book.year"
      :rating="book.rating"
      :favourite="book.favourite"
      :identity="identity"
      :isChangeRating="book.isChangeRating"
      @add-favourite="dispatchFavorite"
      @up-count="upCount"
      @down-count="downCount"
    ></app-books>
  </section>
</template>

<script>
import AppBooks from '../components/AppBooks.vue';
import AppNoBooks from '../components/AppNoBooks.vue';
import AppFilters from '../components/AppFilters.vue';
import AppSearch from '../components/AppSearch.vue';
import AppSort from '../components/AppSort.vue';

export default {
  components: {
    AppFilters,
    AppSort,
    AppSearch,
    AppBooks,
    AppNoBooks,
  },
  name: 'Home',
  inject: ['dataBooks', 'favoriteBooks'],
  data() {
    return {
      books: this.dataBooks,
    };
  },
  methods: {
    dispatchFavorite(identity) {
      const book = this.searchBook(identity);
      book.favourite = !book.favourite;
      if (book.favourite) {
        this.addFavorite(book);
      } else {
        this.removeFavorite(book);
      }
    },

    addFavorite(book) {
      if (this.favoriteBooks.length) {
        const hasFavoriteBook = this.hasFavourite(book);

        if (!hasFavoriteBook) {
          this.favoriteBooks.push(book);
        }
      } else {
        this.favoriteBooks.push(book);
      }
    },

    removeFavorite(book) {
      if (this.favoriteBooks.length) {
        const hasFavoriteBook = this.hasFavourite(book);
        if (hasFavoriteBook) {
          const idx = this.searchIndexFavourite(book.id);
          this.favoriteBooks.splice(idx, 1);
        }
      }
    },

    hasFavourite(book) {
      const newArr = this.favoriteBooks.map((elem) => elem.id === book.id);
      if (newArr[0] === true) {
        return true;
      }
      return false;
    },

    searchIndexFavourite(id) {
      let identity = null;
      this.favoriteBooks.forEach((favourite, idx) => {
        if (favourite.idx === id) {
          identity = idx;
        }
      });
      return identity;
    },

    upCount(identity) {
      const book = this.searchBook(identity);
      book.rating += 1;
      book.isChangeRating = false;
    },

    downCount(identity) {
      const book = this.searchBook(identity);
      book.rating -= 1;
      book.isChangeRating = false;
    },

    searchBook(id) {
      return this.dataBooks[id];
    },

  },

};
</script>

<style scoped>
  .home {
    margin-top: 100px;
  }
</style>
