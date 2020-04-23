import UserService from "@services/user.service.ts";

interface Balance {
  dust_tokens_num: number;
  usd_tokens_num: number;
}

class BalanceClass {
  dust_tokens_num: number;
  usd_tokens_num: number;

  constructor() {
    this.dust_tokens_num = -1;
    this.usd_tokens_num = -1;
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
    async getBalance({ commit }: any) {
      try {
        // const balance = {
        //   dust_token: 100.321,
        //   usd_token: 2
        // };

        const balance: Balance = await UserService.getWallet();

        commit("setBalance", balance);
      } catch (e) {
        // console.log(e);
      }
    },

    async setBalance({ commit }: any, balance: Balance) {
      try {
        commit("setBalance", balance);
      } catch (e) {
        // console.log(e);
      }
    }
  }
};
