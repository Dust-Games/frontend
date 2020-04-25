import UserService from "@services/user.service.ts";

class Balance {
  dust_coins_num: number | null;
  usd_tokens_num: number | null;

  constructor() {
    this.dust_coins_num = null;
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
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async setBalance({ commit }: any, balance: Balance) {
      try {
        commit("setBalance", balance);
      } catch (errors) {
        throw errors.response.data.message;
      }
    }
  }
};
