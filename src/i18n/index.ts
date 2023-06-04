import { createI18n } from 'vue-i18n';
// import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  // messages,
  // globalInjection: true,

  //locale: import.meta.env.VITE_DEFAULT_LOCALE,
  //fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
   legacy: false // you must set `false`, to use Composition API
})

export default i18n;
