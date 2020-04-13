interface Balance {
  dust_token: number;
  usd_token: number;
}

class BalanceClass {
  dust_token: number;
  usd_token: number;

  constructor() {
    this.dust_token = -1;
    this.usd_token = -1;
  }
}

export default {
  state: {
    balance: new BalanceClass()
  },

  getters: {
    balance: (state: any) => state.balance
  },

  mutations: {
    setBalance(state: any, balance: Balance) {
      state.balance = balance;
    }
  },

  actions: {
    getBalance({ commit }: any) {
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
