import httpClient from "./httpClient.ts";

// Adds header: `Authorization: 123` to all requests
// this.$axios.setToken("123");

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
  };
}

export default {
  async login({ email, password }: UserLogin) {
    try {
      const data = { email, password };
      const resp: AuthResponse = await httpClient.post("api/auth/login", data);

      return resp.data;
    } catch (errors) {
      throw errors;
    }
  },

  async register({ login, email, password }: UserRegister) {
    try {
      const data = { login, email, password };
      const resp: AuthResponse = await httpClient.post("api/auth/register", data);

      return resp.data;
    } catch (errors) {
      throw errors;
    }
  },

  async refreshToken(refresh_token: string) {
    try {
      const data = { refresh_token };
      const tokens: TokensResponse = await httpClient.post("api/auth/refresh-token", data);

      return tokens.data;
    } catch (errors) {
      throw errors;
    }
  },

  async logout() {
    try {
      console.log(localStorage.getItem("access_token"));
      await httpClient.post("api/auth/logout");
    } catch (errors) {
      throw errors;
    }
  }
};
