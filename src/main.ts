import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/Translator.plugin";
import EventBus from "./plugins/EventBus.plugin";

Vue.config.productionTip = false;

Vue.use(EventBus);

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

// Уведомления
import Notify from "vue-dust-notify";
Vue.use(Notify);
import "vue-dust-notify/dist/vue-dust-notify.css";

import VueSimpleMarkdown from "vue-simple-markdown";
var HEADINGS_REGEX = /^(#{1,6}) (.+)/;
Vue.use(VueSimpleMarkdown);

import "vue-simple-markdown/dist/vue-simple-markdown.css";

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

// Яндекс метрика для подсчета посетителей
import VueYandexMetrika from "vue-yandex-metrika";
Vue.use(VueYandexMetrika, {
  id: "62301178",
  router: router,
  env: process.env.NODE_ENV
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
