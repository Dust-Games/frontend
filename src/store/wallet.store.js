export default {
  namespaced: false,

  state: {
    balance: {}
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
        const balance = {
          dust_token: 100.321,
          usd_token: 2
        };

        commit("setBalance", balance);
      } catch (e) {
        // console.log(e);
      }
    }
  }
};