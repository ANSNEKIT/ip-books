<template>
  <div class="filters mb-3">
    <h3 class="mb-3">Фильтры</h3>
    <form action="/" method="GET">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label" for="publisher">Издательство</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            placeholder='ООО "Счастливый мир"'
            class="form-control"
            v-model="publisher"
          />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label" for="year">Год издания</label>
          <input
            type="number"
            id="year"
            placeholder="2021"
            name="year"
            class="form-control"
            min="1950"
            max="2021"
            v-model="year"
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-12 mb-3">
          <label class="form-label" for="authors">Авторы</label>
          <input
            type="text"
            id="authors"
            name="authors"
            placeholder="Иванов, Петров"
            class="form-control"
            v-model.trim="authors"
          />
        </div>
      </div>

      <button
        @click="$emit('filters', {
          publisher,
          year,
          authors
        })"
        type="button"
        class="button primary me-4"
        value="submit">
        Применить
      </button>
      <button @click="clearFilters" type="button" class="button">Сбросить</button>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'appFilters',
  data() {
    return {
      publisher: '',
      year: '',
      authors: '',
    };
  },
  emits: {
    filters: (val) => typeof val === 'object',
    'clear-filters': null,
  },
  methods: {
    clearFilters() {
      this.$emit('clear-filters');
      this.publisher = '';
      this.year = '';
      this.authors = '';
    },
  },

};
</script>

<style>
  .find .form-control {
    margin: 0;
  }
</style>
