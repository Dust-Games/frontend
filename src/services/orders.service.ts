import httpClient from "./_httpClient.ts";

export default {
  async getOrderList() {
    try {
      const resp: any = await httpClient.get("order");
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getMyOrderList() {
    try {
      const resp: any = await httpClient.get("order/me");
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getOtherOrderList(id: string) {
    try {
      const resp: any = await httpClient.get(`order/${id}`);
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async createOrder(data: { amount: number; exchange_rate: number }) {
    try {
      const resp: any = await httpClient.post("order/create", data);
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async closeOrder(id: string) {
    try {
      const resp: any = await httpClient.put(`order/close/${id}`);
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async creditOrder({ id, amount }: { id: string; amount: number }) {
    try {
      const resp: any = await httpClient.put(`order/credit/${id}`, { amount });
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async debitOrder({ id, amount }: { id: string; amount: number }) {
    try {
      const resp: any = await httpClient.put(`order/debit/${id}`, { amount });
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async exchangeOrder({ id, amount }: { id: string; amount: number }) {
    try {
      const resp: any = await httpClient.put(`order/exchange/${id}`, { amount });
      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  }
};
