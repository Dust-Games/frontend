import OrdersService from "@services/orders.service.ts";

export default {
  actions: {
    async getOrderList({ commit }: any) {
      try {
        return await OrdersService.getOrderList();
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async getMyOrderList({ commit }: any) {
      try {
        return await OrdersService.getMyOrderList();
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async getOtherOrderList({ commit }: any, id: string) {
      try {
        return await OrdersService.getOtherOrderList(id);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async createOrder({ commit }: any, data: any) {
      try {
        return await OrdersService.createOrder(data);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async closeOrder({ commit }: any, id: string) {
      try {
        return await OrdersService.closeOrder(id);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async creditOrder({ commit }: any, data: any) {
      try {
        return await OrdersService.creditOrder(data);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async debitOrder({ commit }: any, data: any) {
      try {
        return await OrdersService.debitOrder(data);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async exchangeOrder({ commit }: any, data: any) {
      try {
        return await OrdersService.exchangeOrder(data);
      } catch (errors) {
        throw errors.response.data.message;
      }
    }
  }
};
