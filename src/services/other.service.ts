import httpClient from "./_httpClient.ts";

interface CurrencyRateResponse {
  data: {
    data: string;
  };
}

export default {
  async getCurrencyRate() {
    try {
      const resp: CurrencyRateResponse = await httpClient.get("api/users/me");

      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  }
};
