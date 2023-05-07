import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import i18n from './i18n';

const createdApp = createApp(App);

import router from './router';
createdApp.use(router);

// Яндекс метрика для подсчета посетителей
import VueYandexMetrika from 'vue-yandex-metrika';
createdApp.use(VueYandexMetrika, {
  id: '62301178',
  router: router,
  env: process.env.NODE_ENV
});

createdApp.use(i18n);

createdApp.mount('#app');
