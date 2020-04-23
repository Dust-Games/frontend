import httpClient from "./httpClient.ts";

interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
}

interface Balance {
  dust_tokens_num: number;
  usd_tokens_num: number;
}

interface AuthResponse {
  data: {
    access_token: string;
    refresh_token: string;
    user: User;
    billing: Balance;
  };
}

export default {
  async getUser() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me");
      return resp.data;
    } catch (errors) {
      throw errors;
    }
  },

  async getAccounts() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me/accounts");

      return resp.data;
    } catch (errors) {
      throw errors;
    }
  },

  async getWallet() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me/billing");

      return resp.data;
    } catch (errors) {
      throw errors;
    }
  },

  async getSessions() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me/sessions");

      return resp.data;
    } catch (errors) {
      throw errors;
    }
  }
};
