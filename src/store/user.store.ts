import UserService from "@services/user.service.ts";

interface Balance {
  dust_coins_num: number;
  usd_tokens_num: number;
}

class User {
  id: string;
  email: string;
  username: string;

  constructor() {
    this.id = "";
    this.email = "";
    this.username = "";
  }
}

interface getUserResponse {
  access_token: string;
  refresh_token: string;
  user: User;
  billing: Balance;
}

interface getAccountLinkResponse {
  redirect_url: string;
}

interface accountLinkData {
  accountName: string;
  type: string;
}

export default {
  state: {
    user: new User(),
    accounts: [] as string[]
  } as any,

  getters: {
    user: (state: any) => state.user,
    accounts: (state: any) => state.accounts
  },

  mutations: {
    setUser(state: any, user: User) {
      state.user = user;
    },

    setAccounts(state: any, accounts: any) {
      state.accounts = accounts;
    }
  },

  actions: {
    async getUser({ commit }: any) {
      const resp: getUserResponse = await UserService.getUser();

      await commit("setUser", resp.user);
      await commit("setBalance", resp.billing, { root: true });
    },

    async setUser({ commit }: any, user: User) {
      await commit("setUser", user);
    },

    async getAccountLink({ commit }: any, data: accountLinkData) {
      const resp: getAccountLinkResponse = await UserService.getAccountLink(data);
      return resp.redirect_url;
    },

    async setAccount({ commit }: any, url: string) {
      const resp: any = await UserService.setAccount(url);
      return resp;
    },

    async getAccounts({ commit }: any) {
      const resp: any = await UserService.getAccounts();
      await commit("setAccounts", resp);
      return resp;
    }
  }
};
