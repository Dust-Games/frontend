import httpClient from "./httpClient.ts";

// Adds header: `Authorization: 123` to all requests
// this.$axios.setToken("123");

interface User {
  id: string;
  email: string;
  username: string;
}

interface Balance {
  dust_coins_num: number;
  usd_tokens_num: number;
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

interface TokensResponse {
  data: {
    access_token: string;
    refresh_token: string;
  };
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
  async login(data: UserLogin) {
    try {
      const resp: AuthResponse = await httpClient.post("auth/login", data);
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async register(data: UserRegister) {
    try {
      const resp: AuthResponse = await httpClient.post("auth/register", data);

      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async refreshToken(refresh_token: string) {
    try {
      const data = { refresh_token };
      const tokens: TokensResponse = await httpClient.post("auth/refresh-token", data);

      return tokens.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async logout(refresh_token: string) {
    try {
      const data = { refresh_token };
      await httpClient.post("auth/logout", data);
    } catch (errors) {
      throw errors.error;
    }
  }
};
