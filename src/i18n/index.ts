import { createI18n } from 'vue-i18n';

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false // you must set `false`, to use Composition API
})