// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './app.css';

createApp(App).use(router).mount('#app');
