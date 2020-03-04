export default {
  namespaced: false,

  state: {
    balance: 0
  },

  getters: {
    balance: state => state.balance
  },

  mutations: {
    setBalance(state, value) {
      state.balance = value;
    }
  },

  actions: {
    getBalance({ commit }) {
      try {
        const balance = 2;

        commit("setBalance", balance);
      } catch (e) {
        // console.log(e);
      }
    }
  }
};