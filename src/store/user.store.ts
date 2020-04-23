import UserService from "@services/user.service.ts";

interface Balance {
  dust_tokens_num: number;
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
    user: new User()
  } as any,

  getters: {
    user: (state: any) => state.user
  },

  mutations: {
    setUser(state: any, user: User) {
      state.user = user;
    }
  },

  actions: {
    async getUser({ commit }: any) {
      try {
        const resp: getUserResponse = await UserService.getUser();

        await commit("setUser", resp.user);
        commit("setBalance", resp.billing, { root: true });
      } catch (err) {
        // console.log(err);
      }
    },

    async setUser({ commit }: any, user: User) {
      try {
        await commit("setUser", user);
      } catch (err) {
        // console.log(err);
      }
    },

    async getAccountLink({ commit }: any, data: accountLinkData) {
      try {
        const resp: getAccountLinkResponse = await UserService.getAccountLink(data);
        return resp.redirect_url;
      } catch (err) {
        // console.log(err);
      }
    },

    async setAccount({ commit }: any, url: string) {
      try {
        const resp: string = await UserService.setAccount(url);
        console.log(resp);
        // return resp.redirect_url;
      } catch (err) {
        // console.log(err);
      }
    }
  }
};
