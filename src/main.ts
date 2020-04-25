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
// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate as any);

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
  setInteractionMode
} from "vee-validate";
import ru from "vee-validate/dist/locale/ru.json";
import * as rules from "vee-validate/dist/rules";
for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, { ...validation });
}
localize("ru", ru);
setInteractionMode("aggressive");
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// Всплывашка при наведении на что-то
// import VTooltip from "v-tooltip";
// Vue.use(VTooltip);

const VTooltip = require("v-tooltip");
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

// import VueI18n from "vue-i18n";
// Vue.use(VueI18n);

// const i18n = new VueI18n({
//   locale: "en",
//   messages: {
//     en: {}
//   }
// });

// Интернализация
import i18n from "./i18n";

// const i18n = new VueI18n({
//   locale: window.localStorage.getItem("language")
//     ? window.localStorage.getItem("language")
//     : undefined
// });

// Vue.prototype.$locale = {
//   change(lang: string) {
//     i18n.locale = lang;
//   },
//   current() {
//     return i18n.locale;
//   }
// };

// Яндекс метрика для подсчета посетителей
import VueYandexMetrika from "vue-yandex-metrika";
Vue.use(VueYandexMetrika, {
  id: "62301178",
  router: router,
  env: process.env.NODE_ENV
  // other options
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
