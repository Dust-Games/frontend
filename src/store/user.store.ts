import UserService from "@services/user.service.ts";

interface User {
  id: string;
  email: string;
  username: string;
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

export default {
  state: {
    user: new UserClass()
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
        const user: User = await UserService.getUser();
        await commit("setUser", user);
      } catch (err) {
        console.log(err);
      }
    },

    async setUser({ commit }: any, user: User) {
      try {
        await commit("setUser", user);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
