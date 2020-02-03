export default {
  namespaced: false,

  state: {
    isInDevelopment: false
  },

  getters: {
    isInDevelopment: state => state.isInDevelopment
  },

  mutations: {
    setIsInDevelopment(state, value) {
      state.isInDevelopment = value;
    }
  },

  actions: {
    setIsInDevelopment({ commit }, value) {
      commit("setIsInDevelopment", value);
    }
  }
};