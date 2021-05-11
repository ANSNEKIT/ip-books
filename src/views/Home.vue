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
      <app-search @search="searchBooks"></app-search>
      <app-filters @filters="dispatchFilteredBooks"></app-filters>
      <app-sort
      @sort-name="sortByName"
      @sort-rating="sortByRating"
      @sort-year="sortByYear"
      @clearSort="clearSort"
      ></app-sort>
    </div>

    <app-no-books v-if="!books.length"></app-no-books>
    <app-books
      v-else
      v-for="(book, identity) in calcSort"
      :key="book.id"
      :book="book"
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
      filteredBooks: this.dataBooks,
      sortedBooks: [],
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

    searchBooks(str) {
      // eslint-disable-next-line arrow-body-style
      const resultBooks = this.dataBooks.filter((book) => {
        return book.name.toLowerCase().includes(str.toLowerCase());
      });
      this.filteredBooks = resultBooks;
    },

    dispatchFilteredBooks(options) {
      // eslint-disable-next-line arrow-body-style
      const publisherFilter = this.filteredBooks.filter((book) => {
        return book.publisher.toLowerCase().includes(options.publisher.toLowerCase());
      });

      // eslint-disable-next-line arrow-body-style
      const yearFilter = publisherFilter.filter((book) => {
        return book.year.toLowerCase().includes(options.year.toLowerCase());
      });

      // eslint-disable-next-line arrow-body-style
      const authorsFilter = yearFilter.filter((book) => {
        return book.authors.toLowerCase().includes(options.authors.toLowerCase());
      });

      this.filteredBooks = authorsFilter;
    },

    sortByName(type) {
      this.sortedBooks = [];
      const sortedBooks = [...this.filteredBooks];
      if (type === 'a-z') {
        sortedBooks.sort((a, b) => {
          const firstName = a.name.toLowerCase();
          const lastName = b.name.toLowerCase();

          if (firstName < lastName) {
            return -1;
          }

          if (firstName > lastName) {
            return 1;
          }

          return 0;
        });
      }

      if (type === 'z-a') {
        sortedBooks.sort((a, b) => {
          const firstName = a.name.toLowerCase();
          const lastName = b.name.toLowerCase();

          if (firstName < lastName) {
            return 1;
          }

          if (firstName > lastName) {
            return -1;
          }

          return 0;
        });
      }

      this.sortedBooks = sortedBooks;
    },

    sortByRating(type) {
      this.sortedBooks = [];
      const sortedBooks = [...this.filteredBooks];
      if (type === 'a-z') {
        sortedBooks.sort((a, b) => {
          const first = +a.rating;
          const last = +b.rating;

          if (first < last) {
            return 1;
          }

          if (first > last) {
            return -1;
          }

          return 0;
        });
      }

      if (type === 'z-a') {
        sortedBooks.sort((a, b) => {
          const first = +a.rating;
          const last = +b.rating;

          if (first < last) {
            return -1;
          }

          if (first > last) {
            return 1;
          }

          return 0;
        });
      }

      this.sortedBooks = sortedBooks;
    },
    sortByYear(type) {
      this.sortedBooks = [];
      const sortedBooks = [...this.filteredBooks];
      if (type === 'a-z') {
        sortedBooks.sort((a, b) => {
          const first = +a.year;
          const last = +b.year;

          if (first < last) {
            return 1;
          }

          if (first > last) {
            return -1;
          }

          return 0;
        });
      }

      if (type === 'z-a') {
        sortedBooks.sort((a, b) => {
          const first = +a.year;
          const last = +b.year;

          if (first < last) {
            return -1;
          }

          if (first > last) {
            return 1;
          }

          return 0;
        });
      }

      this.sortedBooks = sortedBooks;
    },

    clearSort() {
      this.sortedBooks = [];
    },
  },

  computed: {
    calcSort() {
      if (this.sortedBooks.length) {
        return this.sortedBooks;
      }
      return this.filteredBooks;
    },
  },
};
</script>

<style scoped>
  .home {
    margin-top: 100px;
  }
</style>
