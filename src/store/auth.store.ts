import AuthService from "@services/auth.service.ts";

interface User {
  id: string;
  email: string;
  username: string;
}

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
        const resp: AuthResponse = await AuthService.refreshToken();
        localStorage.setItem("access_token", resp.access_token);
        localStorage.setItem("refresh_token", resp.refresh_token);

        commit("setToken", resp.access_token);
      } catch (err) {
        console.log(err);
      }
    },

    async logout({ commit }: any) {
      try {
        await AuthService.logout();
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");

        commit("setToken", "");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
