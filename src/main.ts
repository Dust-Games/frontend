import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
import "@/assets/icomoon/style.css";

// Скрывать блок, когда кликаем вне его
import vClickOutside from "v-click-outside";
Vue.use(vClickOutside);

// Валидация переменных (преимущественно в полях ввода)
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// Всплывашка при наведении на что-то
import VTooltip from "v-tooltip";
Vue.use(VTooltip);

// Слайдер-карусель для показа новостей
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

// Для отслеживания размеров блока
import { VueResponsiveComponents } from "vue-responsive-components";
Vue.use(VueResponsiveComponents);

// Модалки
import VModal from "vue-js-modal";
Vue.use(VModal);

// Интернализация
import i18n from "./i18n";

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
