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
          v-model="name"
          @keydown.enter="dispatchSearch"
        />
      </div>
      <button
        @click="dispatchSearch"
        type="button"
        class="button primary col-lg-2 ms-3"
      >
        Поиск
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'appSearch',
  emits: {
    search: (val) => typeof val === 'string',
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    dispatchSearch() {
      this.$emit('search', this.name);
    },
  },
};
</script>

<style>

</style>
