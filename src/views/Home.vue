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
      <app-filters
        @filters="dispatchFilteredBooks"
        @clear-filters="clearFilters"
      ></app-filters>
      <app-sort
        @sort-name="sort"
        @sort-rating="sort"
        @sort-year="sort"
        @clear-sort="clearSort"
      ></app-sort>
    </div>

    <empty-card v-if="!filteredBooks.length" title="Список книг"></empty-card>
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
import EmptyCard from '../components/AppEmptyCard.vue';
import AppFilters from '../components/AppFilters.vue';
import AppSearch from '../components/AppSearch.vue';
import AppSort from '../components/AppSort.vue';

export default {
  components: {
    AppFilters,
    AppSort,
    AppSearch,
    AppBooks,
    EmptyCard,
  },
  name: 'Home',
  inject: ['dataBooks', 'favoriteBooks'],
  data() {
    return {
      filteredBooks: this.dataBooks,
      sortedBooks: [],
    };
  },
  methods: {
    dispatchFavorite(bookId) {
      const book = this.searchBook(bookId);
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
      const hasFavoriteBook = this.hasFavourite(book);
      const isFavoriteBook = this.favoriteBooks.length && hasFavoriteBook;

      if (isFavoriteBook) {
        const idx = this.searchIndexArray(book.id, this.favoriteBooks);
        this.favoriteBooks.splice(idx, 1);
        this.filteredBooks.forEach((el) => {
          if (el.id === book.id) {
            // eslint-disable-next-line no-param-reassign
            el.favourite = !el.favourite;
          }
        });
      }
    },

    hasFavourite(book) {
      const newArr = this.favoriteBooks.filter((elem) => elem.id === book.id);
      if (newArr[0] === true) {
        return true;
      }
      return false;
    },

    searchIndexArray(idx, arrName) {
      const identity = arrName.findIndex((book) => {
        if (book.id === idx) {
          return true;
        }
        return false;
      });
      return identity;
    },

    upCount(bookId) {
      const idx = this.searchIndexArray(bookId, this.dataBooks);
      const dataBook = this.dataBooks[idx];
      dataBook.rating += 1;
      dataBook.isChangeRating = false;
    },

    downCount(bookId) {
      const idx = this.searchIndexArray(bookId, this.dataBooks);
      const dataBook = this.dataBooks[idx];
      dataBook.rating -= 1;
      dataBook.isChangeRating = false;
    },

    searchBook(bookId) {
      const searchBookData = this.filteredBooks;
      const idx = searchBookData.findIndex((book) => {
        if (book.id === bookId) {
          return true;
        }
        return false;
      });
      return searchBookData[idx];
    },

    searchBooks(str) {
      // eslint-disable-next-line arrow-body-style
      const resultBooks = this.filteredBooks.filter((book) => {
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

    clearFilters() {
      this.filteredBooks = this.dataBooks;
    },

    sort(type, sortName) {
      this.sortedBooks = [];

      const sortedBooks = [...this.filteredBooks];

      const sortUpStr = (a, b) => {
        const firstSymbol = a.name.toLowerCase();
        const lastSymbol = b.name.toLowerCase();

        if (firstSymbol === lastSymbol) {
          return 0;
        }

        return firstSymbol > lastSymbol ? 1 : -1;
      };

      const sortDownStr = (a, b) => {
        const firstName = a.name.toLowerCase();
        const lastName = b.name.toLowerCase();

        if (firstName === lastName) {
          return 0;
        }

        return firstName > lastName ? -1 : 1;
      };

      const sortUpRating = (a, b) => {
        const first = +a.rating;
        const last = +b.rating;

        return last - first;
      };

      const sortDownRating = (a, b) => {
        const first = +a.rating;
        const last = +b.rating;

        return first - last;
      };

      const sortUpYear = (a, b) => {
        const first = +a.year;
        const last = +b.year;

        return last - first;
      };

      const sortDownYear = (a, b) => {
        const first = +a.year;
        const last = +b.year;

        return first - last;
      };

      if (type === 'a-z' && sortName === 'sort-name') {
        sortedBooks.sort(sortUpStr);
      }
      if (type === 'z-a' && sortName === 'sort-name') {
        sortedBooks.sort(sortDownStr);
      }
      if (type === 'a-z' && sortName === 'sort-rating') {
        sortedBooks.sort(sortUpRating);
      }
      if (type === 'z-a' && sortName === 'sort-rating') {
        sortedBooks.sort(sortDownRating);
      }
      if (type === 'a-z' && sortName === 'sort-year') {
        sortedBooks.sort(sortUpYear);
      }
      if (type === 'z-a' && sortName === 'sort-year') {
        sortedBooks.sort(sortDownYear);
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

  created() {
    const sortedBooks = localStorage.getItem('sorted-books');
    const filteredBooks = localStorage.getItem('filtered-books');

    if (sortedBooks) {
      this.sortedBooks = JSON.parse(sortedBooks);
    }
    if (filteredBooks) {
      this.filteredBooks = JSON.parse(filteredBooks);
    }
  },

  watch: {
    sortedBooks() {
      if (this.sortedBooks) {
        localStorage.setItem('sorted-books', JSON.stringify(this.sortedBooks));
      }
    },

    dataBooks() {
      if (this.filteredBooks) {
        localStorage.setItem('filtered-books', JSON.stringify(this.filteredBooks));
      }
    },
  },
};
</script>

<style scoped>
  .home {
    margin-top: 100px;
  }
</style>
