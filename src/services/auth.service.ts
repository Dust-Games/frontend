import httpClient from "./_httpClient.ts";

// Adds header: `Authorization: 123` to all requests
// this.$axios.setToken("123");

// interface User {
//   id: string;
//   email: string;
//   username: string;
// }

interface User {
  id: string;
  username: string;
}

interface Balance {
  dust_coins_num: number;
  usd_tokens_num: number;
}

// interface UserLogin {
//   email: string;
//   password: string;
// }

// interface UserRegister {
//   username: string;
//   email: string;
//   password: string;
// }

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
  // async login(data: UserLogin) {
  //   try {
  //     const resp: AuthResponse = await httpClient.post("auth/login", data);
  //     return resp.data;
  //   } catch (errors) {
  //     throw errors.error;
  //   }
  // },

  async loginViaSocNetworkStart(socNetworkName: string, successFunc: () => void) {
    try {
      //   const resp: any = await httpClient.get(`oauth/${socnetworkName}/${data.type}`);
      // return resp.data;

      const url =
        "https://discord.com/api/oauth2/authorize?response_type=code&client_id=157730590492196864&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Fnicememe.website&prompt=consent";

      // Открываем ссылку в новом окне
      var strWindowFeatures = "location=yes,status=yes,height=570,width=520,scrollbars=yes";
      window.open(url, "_blank", strWindowFeatures);

      // Connection to a broadcast channel
      const bc = new BroadcastChannel("callback");

      bc.onmessage = async event => {
        if (event.data == "callback-success") {
          if (successFunc) {
            successFunc();
          }
        }
      };
    } catch (errors) {
      throw errors.error;
    }
  },

  async loginViaSocNetworkFinish(successUrl: string) {
    // try {
    // const resp: any = await httpClient.get(url);
    // return resp.data;
    return {
      access_token: "123",
      refresh_token: "1234",
      username: "Nagibator2000"
    };
    // } catch (errors) {
    //   throw errors.error;
    // }
  },

  // async register(data: UserRegister) {
  //   try {
  //     const resp: AuthResponse = await httpClient.post("auth/register", data);

  //     return resp.data;
  //   } catch (errors) {
  //     throw errors.error;
  //   }
  // },

  async checkToken() {
    try {
      return localStorage.getItem("access_token") == "123";

      // return await httpClient.get("auth/check-token");
    } catch (errors) {
      throw errors.error;
    }
  },

  // async refreshToken(refresh_token: string) {
  //   try {
  //     const data = { refresh_token };
  //     const tokens: TokensResponse = await httpClient.post("auth/refresh-token", data);

  //     return tokens.data;
  //   } catch (errors) {
  //     throw errors.error;
  //   }
  // },

  async logout(refresh_token: string) {
    try {
      const data = { refresh_token };
      await httpClient.post("auth/logout", data);
    } catch (errors) {
      throw errors.error;
    }
  }
};
