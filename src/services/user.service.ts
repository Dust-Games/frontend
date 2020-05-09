import httpClient from "./httpClient.ts";

interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
}

interface Balance {
  dust_coins_num: number;
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

interface getAccountLinkResponse {
  data: {
    redirect_url: string;
  };
}

interface accountLinkData {
  accountName: string;
  type: string;
}

export default {
  async getUser() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me");
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  // Начать привязку соцсети
  async getAccountLink(data: accountLinkData) {
    try {
      const resp: getAccountLinkResponse = await httpClient.get(
        "oauth/" + data.accountName + "/" + data.type
      );

      // console.log(resp);
      return resp.data;
    } catch (errors) {
      // console.log(errors, data);

      throw errors.error;
    }
  },

  // Закончить привязку соцсети
  async setAccount(url: string) {
    try {
      const resp: any = await httpClient.get(url);
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  // Получить все привязанные соцсети пользователя
  async getAccounts() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me/accounts");
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getWallet() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me/billing");
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getSessions() {
    try {
      const resp: AuthResponse = await httpClient.get("users/me/sessions");
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  }
};
