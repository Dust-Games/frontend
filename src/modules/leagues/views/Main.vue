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
        {{ "Неделя " + (week + 1) }}
      </RadioButton>
    </div>

    Выбранная неделя: {{ selectedWeek }}
    <Table :header="header" :rows="rows" :sortOrderr="sortOrder" />
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
    "rules": "Rules"
  },
  "ru": {
    "title": "LoR Rate League",
    "position": "место",
    "username": "игрок",
    "score": "очки за неделю",
    "all-points": "общие очки",
    "rules": "Регламент"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
// import i18n from "i18n";

export default Vue.extend({
  name: "LeaguesMain",

  components: {
    Table: () => import("@ui-components/Table"),
    Button: () => import("@ui-components/Button"),
    RadioButton: () => import("@ui-components/RadioButton")
  },

  data() {
    return {
      header: [
        { name: "position", title: () => this.$i18n.t("position"), sortField: "position" },
        { name: "username", title: () => this.$i18n.t("username") },
        { name: "score", title: () => this.$i18n.t("score") },
        { name: "all-points", title: () => this.$i18n.t("all-points") }
      ] as Array<Object>,
      sortOrder: [{ field: "position", direction: "asc" }] as Array<Object>,
      rows: [] as Object,
      rows2: [
        { username: "Lalala", position: 67, score: 123, "all-points": 9 },
        { username: "A Plum", position: 667, score: 5, "all-points": 9 },
        { username: "Plum", position: 6667, score: 5, "all-points": 9 }
      ] as Object,
      weeks: [0, 1, 2, 3, 4] as Array<Number>,
      selectedWeek: 1 as Number
    };
  },

  watch: {
    selectedWeek(newVal) {
      this.getRows();
    }
  },

  mounted() {
    this.getRows();
  },

  methods: {
    getRows() {
      // selectedWeek
      console.log(this.rows2);
      this.rows = this.rows2;
    },

    getWeekObject(week: number): any {
      return {
        text: "Неделя " + (week + 1),
        id: week + 1
      };
    },

    toLeagueRules() {
      this.$router.push("/leagues/rules");
    }
  }
});
</script>

<style lang="scss" scoped>
.leagues {
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

    &-item {
      margin-right: 15px;
      margin-bottom: 10px;
    }
  }
}
</style>
