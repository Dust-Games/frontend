import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import router from './router';
app.use(router);

import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

/**
 * Иконки из icomoon
 * Это такой сайт, на котором можно набрать
 * бесплатных (и платных) иконок и сгенерировать
 * zip, после чего распаковать его в проекте и
 * получить возможность подключать эти иконки с
 * помощью присоединения классов с названием иконки
 * к нужному тегу. Например,
 * <span class="icon-eye"/> (это иконка глаза)
 */
import '@/assets/icomoon/style.css';

import VueEventer from 'vue-eventer';
app.provide('eventBus', new VueEventer());

import i18n from './i18n';
app.use(i18n);

app.mount('#app');
