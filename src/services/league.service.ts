import httpClient from "./_httpClient.ts";

export default {
  async getTableByWeek(week: number) {
    try {
      const resp: { data: any } = await httpClient.get("league/week/" + week + "/members");

      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getTableByWeekByPage(data: { week: number; className: number; page: number }) {
    try {
      const resp: { data: any } = await httpClient.get(
        "league/week/" + data.week + "/members?by_class=" + data.className + "&page=" + data.page
      );

      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getTableByWeekByOrder({ week, className }: { week: number; className: number }) {
    try {
      const resp: { data: any } = await httpClient.get(
        "league/week/" + week + "/members?by_class=" + className + "&order_by=username"
      );

      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  },

  async getCurrentWeek() {
    try {
      const resp: { data: { week: string } } = await httpClient.get("league/current-week");

      return resp.data.week;
    } catch (errors) {
      throw errors.error;
    }
  },

  async search({ week, query }: { week: number; query: string }) {
    try {
      const resp: { data: any } = await httpClient.get(
        "league/week/" + week + "/members?username=" + query
      );

      return resp.data;
    } catch (errors) {
      throw errors.error;
    }
  }
};
