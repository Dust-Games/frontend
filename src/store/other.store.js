export default {
  namespaced: false,

  state: {
    isInDevelopment: false, // не используется
    rerender: 0 // не используется
  },

  getters: {
    isInDevelopment: state => state.isInDevelopment,
    rerender: state => state.rerender
  },

  mutations: {
    setIsInDevelopment(state, value) {
      state.isInDevelopment = value;
    },

    rerenderAll(state) {
      state.rerender++;
    }
  },

  actions: {
    setIsInDevelopment({ commit }, value) {
      commit("setIsInDevelopment", value);
    },

    rerenderAll({ commit }) {
      commit("rerenderAll");
    }
  }
};