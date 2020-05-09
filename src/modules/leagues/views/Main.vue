<template>
  <div class="leagues">
    <h1 class="leagues__title">{{ $t("title") }}</h1>
    <Table :header="header" :rows="rows" />
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Leagues of Runettera league table"
  },
  "ru": {
    "title": "Турнирная таблица лиги по Leagues of Runettera"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LeaguesMain",

  components: {
    Table: () => import("@ui-components/Table")
  },

  data() {
    return {
      header: {
        a: 67,
        b: 56
      },
      rows: [
        { a: 56, b: 67 },
        { a: 566, b: 667 }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.leagues {
  // color: red;
}
</style>
