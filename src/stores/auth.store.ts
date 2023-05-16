import { defineStore } from 'pinia';

import AuthService from '@/services/auth.service.ts';

export class User {
  id: string;
  email: string;
  username: string;

  constructor() {
    this.id = '';
    this.email = '';
    this.username = '';
  }
}

export class Balance {
  dust_coins_num: number;
  usd_tokens_num: number;

  constructor() {
    this.dust_coins_num = -1;
    this.usd_tokens_num = -1;
  }
}

interface UserLogin {
  email: string;
  password: string;
}

interface UserRegister {
  username: string;
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
  billing: Balance;
}

interface State {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    token: localStorage.getItem('access_token')
  }),

  getters: {
    isAuthenticated: (state: any) => !!state.token
  },

  actions: {
    // async login({ commit }: any, data: UserLogin) {
    //   const resp: AuthResponse = await AuthService.login(data);
    //   localStorage.setItem("access_token", resp.access_token);
    //   localStorage.setItem("refresh_token", resp.refresh_token);

    //   commit("setToken", resp.access_token);
    //   commit("setUser", resp.user, { root: true });
    //   commit("setBalance", resp.billing, { root: true });
    // },

    async setUser(resp: AuthResponse) {
      localStorage.setItem('access_token', resp.access_token);
      localStorage.setItem('refresh_token', resp.refresh_token);

      this.token = resp.access_token;
      // commit("setUser", resp.user, { root: true });
      // commit("setBalance", resp.billing, { root: true });
    },

    // async register({ commit }: any, data: UserRegister) {
    //   const resp: AuthResponse = await AuthService.register(data);
    //   localStorage.setItem("access_token", resp.access_token);
    //   localStorage.setItem("refresh_token", resp.refresh_token);

    //   commit("setToken", resp.access_token);
    //   commit("setUser", resp.user, { root: true });
    //   commit("setBalance", resp.billing, { root: true });
    // },

    async loginViaSocNetworkStart({ socNetworkName, successFunc }: any) {
      // await AuthService.loginViaSocNetworkStart(socNetworkName, successFunc);
    },

    async loginViaSocNetworkFinish(url: string) {
      const user: any = await AuthService.loginViaSocNetworkFinish(url);
      // dispatch("setUser", user);
    },

    async refreshToken() {
      const oldRefreshToken: string = localStorage.getItem('refresh_token') || '';
      const resp: AuthResponse = {}; // await AuthService.refreshToken(oldRefreshToken);
      localStorage.setItem('access_token', resp.access_token);
      localStorage.setItem('refresh_token', resp.refresh_token);

      this.token = resp.access_token;
    },

    async logout() {
      try {
        const refreshToken: string = localStorage.getItem('refresh_token') || '';
        await AuthService.logout(refreshToken);
      } finally {
        localStorage.setItem('access_token', '');
        localStorage.setItem('refresh_token', '');
        this.token = '';
      }
    }
  }
});
