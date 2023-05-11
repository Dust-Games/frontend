import { defineStore } from 'pinia';

interface State {
  lang: string;
}

// Язык интерфейса по умолчанию
const LANGUAGES = ['ru', 'en'];
const DEFAULT_LANGUAGE = 'ru';
const STORAGE_KEY = 'user.language';

/**
 * Получить язык браузера
 * @return {String}
 */
const getBrowserLanguage = () => {
  let lang: string | null = null;

  lang = window.navigator.language || '';
  lang = lang.slice(0, 2).toLowerCase();

  if (LANGUAGES.includes(lang)) {
    return lang;
  }

  return DEFAULT_LANGUAGE;
};

/**
 * Язык интерфейса пользователя
 */
export const useTranslatorStore = defineStore('translator', {
  state: (): State => ({
    lang: DEFAULT_LANGUAGE
  }),

  actions: {
    /**
     * Собрать информацию о языкя интерфейса
     */
    async fetchLanguage() {
      // Получить язык из локального хранилища
      let lang = localStorage.getItem(STORAGE_KEY) || null;

      // Получить язык из информации о браузере
      if (!lang) {
        lang = getBrowserLanguage();
      }

      this.lang = lang;
    },

    /**
     * Изменить язык интерфейса
     */
    async changeLanguage(lang: string) {
      localStorage.setItem(STORAGE_KEY, lang);
      this.lang = lang;
    }
  }
});
