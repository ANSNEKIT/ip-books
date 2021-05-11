<template>
  <section class="card">
    <div class="book">
      <div class="book-info">
        <div class="d-flex mb-3">
          <h3 class="book-name">
            <strong>{{ name }}</strong>
          </h3>
          <button
            @click="toggleFavouriteIcon"
            id="favorite-btn"
            type="button"
            class="btn"
          >
            <favourite-filled v-if="isLocalFavourite" />
            <favourite-border v-else />
          </button>
        </div>
        <p class="book-author">
          Автор: <strong>{{ author }}</strong>
        </p>
        <p class="book-date">
          Дата выхода:
          <time
            ><strong>{{ year }}</strong></time
          >
        </p>
      </div>

      <div class="book-rating">
        <h5 class="text-center">Рейтинг:</h5>
        <h2 class="text-center">{{ localRating }}</h2>
        <button
          v-if=isActiveButton
          @click="upCount"
          type="button"
          class="button warning"
        >+</button>
        <button
          v-if=isActiveButton
          @click="downCount"
          type="button"
          class="button warning"
        >-</button>
      </div>
    </div>
  </section>
</template>

<script>
import FavouriteBorder from './FavouriteBorder.vue';
import FavouriteFilled from './FavouriteFilled.vue';

export default {
  components: { FavouriteBorder, FavouriteFilled },
  name: 'appBooks',
  inject: ['dataBooks', 'favoriteBooks'],
  props: {
    id: Number,
    name: String,
    author: String,
    year: String,
    rating: Number,
    isChangeRating: Boolean,
    favourite: Boolean,
    identity: Number,
  },
  emits: {
    'add-favourite': (val) => typeof val === 'number',
    'up-count': (val) => typeof val === 'number',
    'down-count': (val) => typeof val === 'number',
  },

  data() {
    return {
      isLocalFavourite: this.favourite,
      isActiveButton: this.isChangeRating,
      localRating: this.rating,
    };
  },

  methods: {
    toggleFavouriteIcon() {
      this.isLocalFavourite = !this.isLocalFavourite;
      this.$emit('add-favourite', this.identity);
    },

    upCount() {
      this.localRating += 1;
      this.isActiveButton = !this.isActiveButton;
      this.$emit('up-count', this.identity);
    },

    downCount() {
      this.localRating -= 1;
      this.isActiveButton = !this.isActiveButton;
      this.$emit('down-count', this.identity);
    },
  },

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
