import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

export enum LangsEnum {
  RU = "ru",
  EN = "en"
}

function loadLocaleMessages(): LocaleMessages {
  const messages: any = {};
  const locales = require.context("@/locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);

  locales.keys().forEach(key => {
    const matched = key.match(/\.\/([A-Za-z0-9-_]+)/i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
}

// Регистрировать плагин
Vue.use(VueI18n);

/**
 * Инициализировать управляющего интернационализацией
 * @return {I18n}
 */
export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || LangsEnum.RU,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || LangsEnum.RU,
  messages: loadLocaleMessages()
});
