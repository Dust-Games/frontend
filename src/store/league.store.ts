import LeagueService from "@services/league.service.ts";

class Balance {
  dust_coins_num: number | null;
  usd_tokens_num: number | null;

  constructor() {
    this.dust_coins_num = null;
    this.usd_tokens_num = null;
  }
}

export default {
  actions: {
    async getTableByWeek({ commit }: any, week: number) {
      try {
        return await LeagueService.getTableByWeek(week);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async getTableByWeekByPage(
      { commit }: any,
      data: { week: number; class: number; page: number }
    ) {
      try {
        return await LeagueService.getTableByWeekByPage(data);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async getTableByWeekByOrder({ commit }: any, data: { week: number; className: number }) {
      try {
        return await LeagueService.getTableByWeekByOrder(data);
      } catch (errors) {
        throw errors.response.data.message;
      }
    },

    async getCurrentWeek({ commit }: any) {
      try {
        return await LeagueService.getCurrentWeek();
      } catch (errors) {
        throw errors.response.data.message;
      }
    }
  }
};
