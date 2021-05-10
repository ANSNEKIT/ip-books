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

    <app-books></app-books>
  </section>
</template>

<script>
import AppBooks from '../components/AppBooks.vue';
import AppFilters from '../components/AppFilters.vue';
import AppSearch from '../components/AppSearch.vue';
import AppSort from '../components/AppSort.vue';

export default {
  components: {
    AppFilters,
    AppSort,
    AppSearch,
    AppBooks,
  },
  name: 'Home',
};
</script>

<style scoped>
  .home {
    margin-top: 100px;
  }
</style>
