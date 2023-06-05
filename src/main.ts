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

// import i18n from './i18n';
import { createI18n } from 'vue-i18n';
// import messages from '@intlify/unplugin-vue-i18n/messages';
import ru from "./i18n/ru/index.ts";
import en from "./i18n/en/index.ts";
const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages: { ru, en },
    legacy: false // you must set `false`, to use Composition API
})
app.use(i18n);

app.mount('#app');
