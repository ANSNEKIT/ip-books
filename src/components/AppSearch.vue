<template>
  <div class="find mb-3">
    <h3 class="mb-3">Поиск</h3>
    <div class="row">
      <label class="col-lg-2 col-form-label" for="name_books"
        >Название книги:</label
      >
      <div class="col-lg-8 mb-3">
        <input
          class="form-control"
          id="name_books"
          type="text"
          placeholder="Евгений Онегин"
        />
      </div>
      <button type="button" class="button col-lg-2 ms-3">Поиск</button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'appSearch',
};
</script>

<style>

</style>
