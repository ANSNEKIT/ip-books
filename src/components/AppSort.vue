<template>
  <div class="sort mb-3">
    <h3 class="mb-3">Сортировка</h3>
    <form action="/" method="GET">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label" for="sort_name">По алфавиту: </label>
          <select id="sort_name" class="form-select" aria-label="sort_name"
          v-model="sort_name"
          @change="selectedSortByName">
            <option disabled value="">Выберите способ сортировки</option>
            <option value="a-z" selected>А-Я</option>
            <option value="z-a">Я-А</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label" for="sort_rating">По рейтингу: </label>
          <select id="sort_rating" class="form-select" aria-label="sort_rating"
          v-model="sort_rating"
          @change="selectedSortByRating">
            <option disabled value="">Выберите способ сортировки</option>
            <option value="a-z" selected>Самый высокий</option>
            <option value="z-a">Самый низкий</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label" for="sort_year">По дате издания: </label>
          <select id="sort_year" class="form-select" aria-label="sort_year"
          v-model="sort_year"
          @change="selectedSortByYear">
            <option disabled value="">Выберите способ сортировки</option>
            <option value="a-z" selected>Новые вверху</option>
            <option value="z-a">Старые вверху</option>
          </select>
        </div>
      </div>
      <button
        type="button"
        @click="clearSort"
        class="button"
      >Сбросить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'appSort',
  data() {
    return {
      sort_name: '',
      sort_rating: '',
      sort_year: '',
    };
  },
  emits: {
    'sort-name': (val) => typeof val === 'string',
    'sort-rating': (val) => typeof val === 'string',
    'sort-year': (val) => typeof val === 'string',
    'clear-sort': null,
  },
  methods: {
    selectedSortByName() {
      this.$emit('sort-name', this.sort_name, 'sort-name');
      this.sort_rating = '';
      this.sort_year = '';
    },
    selectedSortByRating() {
      this.$emit('sort-rating', this.sort_rating, 'sort-rating');
      this.sort_name = '';
      this.sort_year = '';
    },
    selectedSortByYear() {
      this.$emit('sort-year', this.sort_year, 'sort-year');
      this.sort_name = '';
      this.sort_rating = '';
    },
    clearSort() {
      this.$emit('clear-sort');
      this.sort_name = '';
      this.sort_rating = '';
      this.sort_year = '';
    },
  },
};

</script>

<style>

</style>
