import AuthService from "@services/auth.service.ts";
import { User } from "@constructors/User.ts";
import { Balance } from "@constructors/Balance.ts";

interface UserLogin {
  email: string;
  password: string;
}

interface UserRegister {
  login: string;
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
  billing: Balance;
}

export default {
  state: {
    token: localStorage.getItem("access_token")
  },

  getters: {
    isAuthenticated: (state: any) => !!state.token
  },

  mutations: {
    setToken(state: any, token: string) {
      state.token = token;
    }
  },

  actions: {
    async login({ commit }: any, data: UserLogin) {
      try {
        const resp: AuthResponse = await AuthService.login(data);
        localStorage.setItem("access_token", resp.access_token);
        localStorage.setItem("refresh_token", resp.refresh_token);

        commit("setToken", resp.access_token);
        commit("setUser", resp.user, { root: true });
        commit("setBalance", resp.billing, { root: true });
      } catch (err) {
        console.log(err);
      }
    },

    async register({ commit }: any, data: UserRegister) {
      const resp: AuthResponse = await AuthService.register(data);
      localStorage.setItem("access_token", resp.access_token);
      localStorage.setItem("refresh_token", resp.refresh_token);

      commit("setToken", resp.access_token);
      commit("setUser", resp.user, { root: true });
    },

    async refreshToken({ commit }: any) {
      try {
        const oldRefreshToken: string = localStorage.getItem("refresh_token") || "";
        const resp: AuthResponse = await AuthService.refreshToken(oldRefreshToken);
        localStorage.setItem("access_token", resp.access_token);
        localStorage.setItem("refresh_token", resp.refresh_token);

        commit("setToken", resp.access_token);
      } catch (err) {
        console.log(err);
      }
    },

    async logout({ commit }: any) {
      try {
        const oldRefreshToken: string = localStorage.getItem("refresh_token") || "";
        await AuthService.logout(oldRefreshToken);
      } catch (err) {
        console.log(err);
      } finally {
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");
        commit("setToken", "");
      }
    }
  }
};
