// Язык интерфейса по умолчанию
const LANGUAGES = ["ru", "en"];
const DEFAULT_LANGUAGE = "ru";
const STORAGE_KEY = "user.language";

/**
 * Получить язык браузера
 * @return {String}
 */
const getBrowserLanguage = () => {
  let lang = null;

  lang = window.navigator.language || "";
  lang = lang.slice(0, 2).toLowerCase();

  if (LANGUAGES.includes(lang)) {
    return lang;
  }

  return DEFAULT_LANGUAGE;
};

/**
 * Язык интерфейса пользователя
 */
export default {
  state: {
    lang: DEFAULT_LANGUAGE
  },

  getters: {
    lang: (state: any) => state.lang
  },

  mutations: {
    setLanguage(state: any, lang: any) {
      state.lang = lang;
    }
  },

  actions: {
    /**
     * Собрать информацию о языкя интерфейса
     */
    async fetchLanguage({ getters, commit }: any) {
      // Получить язык из локального хранилища
      let lang = localStorage.getItem(STORAGE_KEY) || null;

      // Получить язык из информации о браузере
      if (!lang) {
        lang = getBrowserLanguage();
      }

      commit("setLanguage", lang);
    },

    /**
     * Изменить язык интерфейса
     */
    async changeLanguage({ commit }: any, lang: string) {
      localStorage.setItem(STORAGE_KEY, lang);
      commit("setLanguage", lang);
    }
  }
};
