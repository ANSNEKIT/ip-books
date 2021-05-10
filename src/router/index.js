import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favourites from '../views/Favourites.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
