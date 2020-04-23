import UserService from "@services/user.service.ts";

interface User {
  id: string;
  email: string;
  username: string;
}

interface Balance {
  dust_tokens_num: number;
  usd_tokens_num: number;
}

class UserClass {
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

export default {
  state: {
    user: new UserClass()
  } as any,

  getters: {
    user: (state: any) => state.user
  },

  mutations: {
    setUser(state: any, user: UserClass) {
      state.user = user;
    }
  },

  actions: {
    async getUser({ commit }: any) {
      try {
        console.log(await UserService.getUser());
        const resp: getUserResponse = await UserService.getUser();

        await commit("setUser", resp.user);
        commit("setBalance", resp.billing, { root: true });
      } catch (err) {
        console.log(err);
      }
    },

    async setUser({ commit }: any, user: UserClass) {
      try {
        await commit("setUser", user);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
