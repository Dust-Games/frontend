import Vue from 'vue';
import Vuex from 'vuex';

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
      state.isInDevelopment = value
    }
  },
  actions: {
    setIsInDevelopment({commit}, value) {
      commit("setIsInDevelopment", value)
    }
  },
  modules: {},
});
