import Vue from "vue";
import Vuex from "vuex";
import auth from "";

Vue.use(Vuex);

export default new Vuex.Store({
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
  },
  modules: {}
});
