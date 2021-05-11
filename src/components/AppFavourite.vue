<template>
  <section class="card">
    <div class="book">
      <div class="book-info">
        <h3 class="book-name mb-3">
          <strong>{{ book.name }}</strong>
        </h3>
        <p class="book-author">
          Автор: <strong>{{ book.authors }}</strong>
        </p>
        <p class="book-publisher">
          Издательство: <strong>{{ book.publisher }}</strong>
        </p>
        <p class="book-date">
          Дата выхода:
          <time
            ><strong>{{ book.year }}</strong></time
          >
        </p>
      </div>

      <div class="book-remove">
        <button
          @click="$emit('remove-favourite', identity, book.id)"
          class="button danger"
        >Удалить</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  name: 'appBooks',
  inject: ['dataBooks', 'favoriteBooks'],
  props: {
    book: Object,
    identity: Number,
  },
  emits: {
    'remove-favourite': (val) => typeof val === 'number',
  },
};
</script>

<style scoped>
  .book {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .book .book-name
  {
    margin: 0;
  }

  #favorite-btn {
    margin: 0 10px;
    padding: 0;
  }

  .book .book-author,
  .book .book-publisher {
    margin: 0;
    margin-bottom: 10px;
  }

  .book .book-date {
    margin: 0;
    margin-bottom: 10px;
  }
  .rating-green {
    color: #42b983;
  }

  .rating-red {
    color: #e53935;
  }
</style>
