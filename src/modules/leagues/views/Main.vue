<template>
  <div class="leagues">
    <div class="leagues__title-wrapper">
      <h1 class="leagues__title">{{ $t("title") }}</h1>
      <Button theme="blue-steel" @click.prevent="toLeagueRules()">{{ $t("rules") }}</Button>
    </div>

    <p class="leagues__info">{{ $t("info") }}</p>

    <div class="leagues__filter">
      <p class="leagues__filter-title">{{ $t("filter") }}</p>

      <div class="leagues__filter-inner">
        <InputFilter class="leagues__filter-input" :value="filter" @input="onFilter" theme="light">
          <i class="leagues__filter-input-icon ui-input__icon icon-spinner3" v-show="isFiltering" />
        </InputFilter>

        <Button
          class="leagues__filter-clear"
          @click="onClearFilter"
          theme="blue-steel"
          width="40px"
          height="35px"
        >
          <i class="icon-close" />
        </Button>
      </div>
    </div>

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

    <div class="leagues__table-wrapper">
      <div class="leagues__table" v-for="(className, index) in classNames" :key="className">
        <h2 class="leagues__table-title">{{ $t("class", { value: className.toUpperCase() }) }}</h2>

        <Table
          :header="header"
          :rows="rows[className].data"
          :pagination="getPagination(rows[className])"
          trackBy="id"
          detailRow="table-detail-row2"
          withPagination
          @cell-clicked="onCellClicked($event, className)"
          @change-page="onChangePage($event, className, index + 1)"
        >
          <template #_detailRow><TableDetailRow2 /></template>
        </Table>
      </div>
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
    "score": "week DLP",
    "total_score": "all DLP",
    "rules": "Rules",
    "week": "Week ",
    "class": "Class {value}", 
    "filter": "Filter by nickname"
  },
  "ru": {
    "title": "LoR Rate League",
    "info": "На этой странице представлен рейтинг игроков по пяти классам - S, A, B, C, D (подробнее в регламенте).",
    "position": "место",
    "username": "игрок",
    "score": "week DLP",
    "total_score": "all DLP",
    "rules": "Регламент",
    "week": "Неделя ",
    "class": "Класс {value}", 
    "filter": "Фильтр по никнейму"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "LeaguesMain",

  components: {
    Table: () => import("@ui-components/Table/Index"),
    Button: () => import("@ui-components/Button"),
    InputFilter: () => import("@ui-components/Input"),
    RadioButton: () => import("@ui-components/RadioButton"),
    TableDetailRow2: () => import("./TableDetailRow")
  },

  data() {
    return {
      header: [
        { name: "id", visible: false },
        {
          name: "position",
          title: () => this.$i18n.t("position")
          // sortField: "position"
        },
        {
          name: "username",
          title: () => this.$i18n.t("username")
          // sortField: "username"
        },
        { name: "score", title: () => this.$i18n.t("score") },
        { name: "total_score", title: () => this.$i18n.t("total_score") }
        // "actions"
      ] as Array<Object>,
      sortOrder: [{ field: "position", direction: "asc" }] as Array<Object>,
      rows: {} as any,
      selectedWeek: 1 as number,
      currencyWeek: 0,
      filter: "" as string,
      isFiltering: false
    };
  },

  computed: {
    weeks(): Number[] {
      const length = Number(this.currencyWeek);

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
      this.onFilter(this.filter);
    }
  },

  async mounted() {
    try {
      this.currencyWeek = await this.getCurrentWeek();
      this.selectedWeek = this.currencyWeek;
      this.rows = await this.getTableByWeek(this.selectedWeek);
      this.onFilter(this.filter);
    } catch (errors) {
      this.$notify.error(errors);
    }
  },

  methods: {
    ...mapActions(["getCurrentWeek", "getTableByWeek", "getTableByWeekByPage", "search"]),

    onCellClicked(event: any, className: string) {
      // console.log(event, className);
    },

    editRow(rowData: any, vuetable: any) {
      vuetable.toggleDetailRow(rowData.position);
    },

    async onFilter(value: string) {
      try {
        this.isFiltering = true;

        this.filter = value;
        this.rows = await this.search({ week: this.selectedWeek, query: value });

        this.isFiltering = false;
      } catch (errors) {
        this.$notify.error(errors);
      }
    },

    onClearFilter() {
      this.filter = "";
      this.onFilter(this.filter);
    },

    /** Взять объект со страницами. Если загружаем первый раз,
     * то он прям в объекте, иначе в meta
     */
    getPagination(objectValue: any): any {
      const { data, ...res } = objectValue;

      if (res.meta) {
        return res.meta;
      } else {
        return res;
      }
    },

    // Поменять страницу на page по классу и выбранной неделе
    async onChangePage(page: number, className: string, classNameIndex: Number) {
      this.rows[className] = await this.getTableByWeekByPage({
        week: this.selectedWeek,
        className: classNameIndex,
        page
      });

      // console.log("response", this.rows[className]);
    },

    // Перейти на страницу регламента
    toLeagueRules() {
      this.$router.push("/leagues/rules");
    }
  }
});
</script>

<style lang="scss" scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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
    margin-top: -25px;
    margin-bottom: 20px;
  }

  &__filter {
    margin: 0px 0 25px;

    &-inner {
      display: flex;

      & > * {
        margin-right: 0px;
      }
    }

    &-input {
      &-icon {
        font-size: 16px;
        animation: rotate 1s infinite linear;
      }
    }

    &-clear {
      background: transparent !important;
    }

    &-title {
      margin-bottom: 5px;
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
