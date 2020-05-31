<template>
  <div class="leagues">
    <div class="leagues__title-wrapper">
      <h1 class="leagues__title">{{ $t("title") }}</h1>
      <Button theme="blue-steel" @click.prevent="toLeagueRules()">{{ $t("rules") }}</Button>
    </div>

    <p class="leagues__info">{{ $t("info") }}</p>

    <div class="leagues__weeks">
      <RadioButton
        v-for="week in weeks"
        :key="week"
        class="leagues__weeks-item"
        v-model="selectedWeek"
        :item="week"
      >
        {{ $t("week") + week }}
      </RadioButton>
    </div>

    <div class="leagues__table" v-for="className in classNames" :key="className">
      <h2 class="leagues__table-title">{{ $t("class", { value: className.toUpperCase() }) }}</h2>
      <Table
        :header="header"
        :rows="rows[className].data"
        :pagination="getPagination(rows[className])"
        :perPage="2"
        trackBy="id"
        detailRow="table-detail-row2"
        withPagination
        @cell-clicked="onCellClicked($event, className)"
        @change-page="onChangePage($event, rows[className])"
      >
        <template #_detailRow><TableDetailRow2 /></template>
      </Table>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "LoR Rate League",
    "info": "This page shows the rating of players in five classes - S, A, B, C, D (for more details see rules).",
    "position": "position",
    "username": "username",
    "score": "score",
    "total_score": "total score",
    "rules": "Rules",
    "week": "Week ",
    "class": "Class {value}"
  },
  "ru": {
    "title": "LoR Rate League",
    "info": "На этой странице представлен рейтинг игроков по пяти классам - S, A, B, C, D (подробнее в регламенте).",
    "position": "место",
    "username": "игрок",
    "score": "очки за неделю",
    "total_score": "общие очки",
    "rules": "Регламент",
    "week": "Неделя ",
    "class": "Класс {value}"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import http from "@services/httpClient";
// import VuetableFieldSequence from "vuetable-2/src/components/VuetableFieldSequence.vue";

// interface IRows {
//   id: number;
//   username: string;
//   // position: number;
//   score: number;
//   total_score: number;
//   class: string;
// }

export default Vue.extend({
  name: "LeaguesMain",

  components: {
    Table: () => import("@ui-components/Table/Index"),
    Button: () => import("@ui-components/Button"),
    RadioButton: () => import("@ui-components/RadioButton"),
    TableDetailRow2: () => import("./TableDetailRow")
  },

  data() {
    return {
      header: [
        { name: "id", visible: false },
        {
          name: "position",
          title: () => this.$i18n.t("position"),
          sortField: "position"
        },
        { name: "username", title: () => this.$i18n.t("username"), sortField: "username" },
        { name: "score", title: () => this.$i18n.t("score") },
        { name: "total_score", title: () => this.$i18n.t("total_score") }
        // "actions"
      ] as Array<Object>,
      sortOrder: [{ field: "position", direction: "asc" }] as Array<Object>,
      rows: {} as any,
      selectedWeek: 1 as number,
      currencyWeek: 0
    };
  },

  computed: {
    weeks(): Number[] {
      const length = Number(this.currencyWeek) + 3;

      return Array(length)
        .fill(5)
        .map((v, i) => i + 1);
    },

    classNames(): string[] {
      return Object.keys(this.rows).filter(className => this.rows[className].data.length);
    }
  },

  watch: {
    async selectedWeek(newVal) {
      this.rows = await this.getTableByWeek(this.selectedWeek);
    }
  },

  async mounted() {
    try {
      // this.currencyWeek = await this.getCurrentWeek();
      this.rows = await this.getTableByWeek(this.selectedWeek);
    } catch (errors) {
      this.$notify.error(errors);
    }
  },

  methods: {
    ...mapActions(["getCurrentWeek", "getTableByWeek", "getTableByWeekByPage"]),

    onCellClicked(event: any, className: string) {
      // console.log(event, className);
    },

    editRow(rowData: any, vuetable: any) {
      vuetable.toggleDetailRow(rowData.position);
    },

    getPagination(objectValue: any): any {
      const { data, ...res } = objectValue;
      return res;
    },

    async onChangePage(page: number, className: string) {
      this.rows = await this.getTableByWeekByPage({ week: this.selectedWeek, className, page });
      console.log(this.rows);
    },

    // getRows(className: string) {
    //   // const rows = (this as any)["rows" + className];

    //   return this.rows.filter(row => row.class == className);

    //   // if (rows) {
    //   //   return rows;
    //   // } else {
    //   //   return [];
    //   // }
    // },

    toLeagueRules() {
      this.$router.push("/leagues/rules");
    }
  }
});
</script>

<style lang="scss" scoped>
.leagues {
  margin-bottom: 50px;

  &__title {
    margin: 0;
    margin-right: 20px;
    margin-bottom: 10px;

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
  }

  &__info {
    margin-top: -35px;
    margin-bottom: 40px;
  }

  &__weeks {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    &-item {
      margin-right: 15px;
      margin-bottom: 10px;
    }
  }

  &__table {
    &-title {
      margin-top: 25px;
    }
  }
}
</style>
