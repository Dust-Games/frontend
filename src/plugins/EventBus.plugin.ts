import Vue from "vue";

export const eventBus = new Vue();

export default {
  /**
   * Установка
   * @param {object} Vue
   * @param {object} options
   */
  install(Vue: any, options: any) {
    options = options || {};

    Vue.prototype.$eventBus = Vue.$eventBus = eventBus;
  }
};
