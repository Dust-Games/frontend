import httpClient from "./httpClient.ts";

interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
}

interface AuthResponse {
  data: {
    data: User;
  };
}

export default {
  async getUser() {
    try {
      const resp: AuthResponse = await httpClient.get("api/users/me");

      return resp.data.data;
    } catch (errors) {
      throw errors;
    }
  },

  async getAccounts() {
    try {
      const resp: AuthResponse = await httpClient.get("api/users/me/accounts");

      return resp.data.data;
    } catch (errors) {
      throw errors;
    }
  },

  async getWallet() {
    try {
      const resp: AuthResponse = await httpClient.get("api/users/me/billing");

      return resp.data.data;
    } catch (errors) {
      throw errors;
    }
  },

  async getSessions() {
    try {
      const resp: AuthResponse = await httpClient.get("api/users/me/sessions");

      return resp.data.data;
    } catch (errors) {
      throw errors;
    }
  }
};
