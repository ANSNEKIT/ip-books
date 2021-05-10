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
          />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-12 mb-3">
          <label class="form-label" for="author">Авторы</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Иванов, Петров"
            class="form-control"
          />
        </div>
      </div>

      <button type="button" class="button primary me-4" value="submit">
        Применить
      </button>
      <button type="reset" class="button">Сбросить</button>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'appFilters',
};
</script>

<style>
  .find .form-control {
    margin: 0;
  }
</style>
