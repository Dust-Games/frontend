<template>
  <div class="leagues">
    <div class="leagues__title-wrapper">
      <h1 class="leagues__title">{{ $t("title") }}</h1>
      <Button theme="blue-steel" @click.prevent="toLeagueRules()">{{ $t("rules") }}</Button>
    </div>

    <div class="leagues__weeks">
      <RadioButton
        v-for="week in weeks"
        :key="week"
        class="leagues__weeks-item"
        v-model="selectedWeek"
        :item="week + 1"
      >
        {{ $t("week") + (week + 1) }}
      </RadioButton>
    </div>

    <div class="leagues__table" v-for="className in ['D', 'C', 'B', 'A', 'S']" :key="className">
      <h2 class="leagues__table-title">{{ $t("class", { value: className }) }}</h2>
      <Table
        :header="header"
        :rows="getRows(className)"
        :perPage="2"
        trackBy="id"
        detailRow="table-detail-row2"
        withPagination
        @cell-clicked="onCellClicked($event, className)"
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
    "position": "position",
    "username": "username",
    "score": "score",
    "all-points": "all-points",
    "rules": "Rules",
    "week": "Week ",
    "class": "Class {value}"
  },
  "ru": {
    "title": "LoR Rate League",
    "position": "место",
    "username": "игрок",
    "score": "очки за неделю",
    "all-points": "общие очки",
    "rules": "Регламент",
    "week": "Неделя ",
    "class": "Класс {value}"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
// import VuetableFieldSequence from "vuetable-2/src/components/VuetableFieldSequence.vue";

interface IRows {
  id: number;
  username: string;
  position: number;
  score: number;
  "all-points": number;
  class: string;
}

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
        // {
        //   name: VuetableFieldSequence,
        //   title: "№",
        //   width: "5%"
        // },
        { name: "id", visible: false },
        {
          name: "position",
          title: () => this.$i18n.t("position"),
          sortField: "position"
        },
        { name: "username", title: () => this.$i18n.t("username"), sortField: "username" },
        { name: "score", title: () => this.$i18n.t("score") },
        { name: "all-points", title: () => this.$i18n.t("all-points") },
        "actions"
      ] as Array<Object>,
      sortOrder: [{ field: "position", direction: "asc" }] as Array<Object>,
      rows: [
        { id: 0, username: "Lalala", position: 4, score: 123, "all-points": 9, class: "D" },
        { id: 1, username: "A Plum", position: 5, score: 5, "all-points": 9, class: "D" },
        { id: 2, username: "Plum", position: 3, score: 5, "all-points": 9, class: "D" },
        { id: 3, username: "Lala7la", position: 1, score: 123, "all-points": 9, class: "D" },
        { id: 0, username: "Lala la", position: 4, score: 123, "all-points": 9, class: "C" },
        { id: 1, username: "A  Plum", position: 5, score: 5, "all-points": 9, class: "C" },
        { id: 2, username: "Plu m", position: 3, score: 5, "all-points": 9, class: "C" },
        { id: 3, username: "Lala7 la", position: 1, score: 123, "all-points": 9, class: "C" },
        { id: 5, username: "Plu7m", position: 8, score: 5, "all-points": 9, class: "B" },
        { id: 6, username: "Lalalty a", position: 40, score: 123, "all-points": 9, class: "B" },
        { id: 6, username: "A Plyy um", position: 2, score: 5, "all-points": 9, class: "B" },
        { id: 7, username: "Plumyy yy", position: 6, score: 5, "all-points": 9, class: "B" },
        { id: 6, username: "A Plyy um", position: 2, score: 5, "all-points": 9, class: "A" },
        { id: 7, username: "Plumyy yy", position: 6, score: 5, "all-points": 9, class: "A" },
        { id: 2, username: "Plum", position: 3, score: 5, "all-points": 9, class: "S" },
        { id: 3, username: "Lala7la", position: 1, score: 123, "all-points": 9, class: "S" },
        { id: 4, username: "A Pl7um", position: 7, score: 5, "all-points": 9, class: "S" },
        { id: 5, username: "Plu7m", position: 8, score: 5, "all-points": 9, class: "S" }
      ] as Array<IRows>,
      weeks: [0, 1, 2, 3, 4] as Array<Number>,
      selectedWeek: 1 as number
    };
  },

  watch: {
    selectedWeek(newVal) {
      // this.getRows();
    }
  },

  mounted() {
    // this.getRows();
  },

  methods: {
    onCellClicked(event: any, className: string) {
      // console.log(event, className);
    },

    editRow(rowData: any, vuetable: any) {
      vuetable.toggleDetailRow(rowData.position);
    },

    getRows(className: string) {
      // const rows = (this as any)["rows" + className];

      return this.rows.filter(row => row.class == className);

      // if (rows) {
      //   return rows;
      // } else {
      //   return [];
      // }
    },

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
