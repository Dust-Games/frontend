import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

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

/**
 * Слайдер-карусель для показа новостей
 */
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
