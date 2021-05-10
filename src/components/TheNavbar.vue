<template>
  <header class="navbar">
    <h3>ip-books</h3>
    <ul class="navbar-menu">
      <li><router-link to="/">Главная</router-link></li>
      <li>
        <router-link to="/favourites">Избранное</router-link>
      </li>
    </ul>
  </header>
</template>

<script>

</script>

<style scoped>
.router-link-active {
  border-bottom: 2px solid #3eaf7c;
}
.router-link-exact-active {
  border-bottom: 2px solid #3eaf7c;
}
</style>
