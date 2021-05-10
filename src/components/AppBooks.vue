<template>
  <section class="card">
    <h3 class="text-center mb-3">Список книг:</h3>
    <p v-if="!books.length" class="text-center">Здесь пока ничего нет</p>
  </section>
  <section class="card" v-if="books.length">
    <div class="book">
      <div class="book-info">
        <div class="d-flex mb-3">
          <h3 class="book-name"><strong>Евгений Онегин</strong></h3>
          <button id="favorite-btn" type="button" class="btn">
            <favorite-border />
          </button>
        </div>
        <p class="book-author">Автор: <strong>Пушкин А.С.</strong></p>
        <p class="book-date">
          Дата выхода: <time><strong>2018</strong></time>
        </p>
      </div>

      <div class="book-rating">
        <h5 class="text-center">Рейтинг:</h5>
        <h2 class="text-center">123</h2>
        <button type="button" class="button warning">+</button>
        <button type="button" class="button warning">-</button>
      </div>
    </div>

  </section>
</template>

<script>
import FavoriteBorder from './FavoriteBorder.vue';

export default {
  components: { FavoriteBorder },
  name: 'appBooks',
  inject: ['books'],
};
</script>

<style scoped>
  .book {
    display: flex;
    justify-content: space-between;
  }
  .book .book-name {
    margin: 0;
  }

  #favorite-btn {
    margin: 0 10px;
    padding: 0;
  }

  .book .book-author {
    margin: 0;
    margin-bottom: 10px;
  }

  .book .book-date {
    margin: 0;
    margin-bottom: 10px;
  }
</style>
