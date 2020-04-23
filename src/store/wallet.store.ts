import UserService from "@services/user.service.ts";

class Balance {
  dust_tokens_num: number | null;
  usd_tokens_num: number | null;

  constructor() {
    this.dust_tokens_num = null;
    this.usd_tokens_num = null;
  }
}

export default {
  state: {
    balance: new Balance()
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
