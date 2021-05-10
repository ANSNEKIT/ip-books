<template>
  <div class="sort mb-3">
    <h3 class="mb-3">Сортировка</h3>
    <form action="/" method="GET">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label" for="sort_name">По алфавиту: </label>
          <select id="sort_name" class="form-select" aria-label="sort_name">
            <option value="a-z" selected>А-Я</option>
            <option value="z-a">Я-А</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label" for="sort_rating">По рейтингу: </label>
          <select id="sort_rating" class="form-select" aria-label="sort_rating">
            <option value="a-z" selected>Самый высокий</option>
            <option value="z-a">Самый низкий</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label" for="sort_date">По дате: </label>
          <select id="sort_date" class="form-select" aria-label="sort_date">
            <option value="a-z" selected>Новые вверху</option>
            <option value="z-a">Старые вверху</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'appSort',
};

</script>

<style>

</style>
