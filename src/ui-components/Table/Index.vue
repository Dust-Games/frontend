<template>
  <div class="table">
    <span v-if="isLoading">{{ $t("loading") }}</span>

    <vuetable
      :ref="vuetableRef"
      v-bind="attr"
      :data-manager="dataManager"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:cell-clicked="onCellClicked"
      @vuetable:scrollbar-visible="onScrollbarVisible"
    >
      <!-- Для особых полей, например, actions -->
      <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="props">
        <slot :name="name" v-bind="{ ...props, vuetable: $refs[vuetableRef] }" />
      </template>

      <template slot="tableHeader">
        <vuetable-row-header />
        <row-filter :visible="true" @vuetable:header-event="onRowHeaderEvent"></row-filter>
      </template>

      <!-- Для детальной строки, в слот можно поместить что-то, что переопределит строку -->
      <!-- <div v-if="!!$scopedSlots._detailRow">
        <slot name="_detailRow" />
      </div>
      <TableDetailRow v-else /> -->
    </vuetable>

    <!-- Пагинация -->
    <div class="table__pagination" v-if="withPagination">
      <vuetable-pagination
        class="table__pagination-actions"
        :ref="paginationRef"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage"
      />

      <div class="table__pagination-info">
        {{ $t("paginationInfo", { ...pagination }) }}
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "paginationInfo": "Displaying {from} to {to} of {total}",
    "loading": "Loading..."
  },
  "ru": {
    "paginationInfo": "Показано {from} - {to} из {total}",
    "loading": "Загрузка..."
  }
}
</i18n>

<script>
import Vue from "vue";
import DetailRow from "./TableDetailRow";

import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetableRowHeader from "vuetable-2/src/components/VuetableRowHeader.vue";
import Vuetable from "vuetable-2";

Vue.component("table-detail-row", DetailRow); // <--- register the component to Vue

function IDGenerator() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

export default {
  name: "UiTable",

  props: {
    header: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    sortOrder: { type: Array, default: () => [] },
    pagination: { type: Object, default: () => ({}) },
    perPage: { type: Number, default: 10 },
    // pageFrom: { type: Number, default: 1 },
    // pageTo: { type: Number, default: 1 },
    // pageTotal: { type: Number, default: 1 },
    trackBy: { type: String, default: "" },
    // detailRow: { type: String },
    withPagination: { type: Boolean, default: false },
    withApi: { type: Boolean, default: false }
  },

  components: {
    Vuetable: Vuetable,
    VuetablePagination: VuetablePagination,
    VuetableRowHeader: VuetableRowHeader,
    RowFilter: () => import("./TableRowFilter.vue")

    // TableDetailRow: () => import("./TableDetailRow")
  },

  data() {
    return {
      data: [],
      tableId: IDGenerator(), // Для уникальности таблицы
      isLoading: false,
      css: {
        table: {
          tableWrapper: "table-wrapper",
          tableHeaderClass: "table__header",
          tableBodyClass: "table__body",
          tableClass: "table",
          loadingClass: "table__loading icon-chevron-up",
          ascendingIcon: "table__icon table__icon-header icon-sort-asc",
          descendingIcon: "table__icon table__icon-header icon-sort-down",
          ascendingClass: "table__sorted-asc",
          descendingClass: "table__sorted-desc",
          sortableIcon: "table__icon table__icon-header icon-unsorted",
          handleIcon: "grey sidebar icon"
        },

        pagination: {
          wrapperClass: "table__pagination-wrapper",
          activeClass: "table__pagination-active",
          disabledClass: "table__pagination-disabled",
          pageClass: "table__pagination-item",
          icons: {
            first: "table__icon table__icon-double icon-chevrons-left",
            prev: "table__icon icon-arrow-left2",
            next: "table__icon icon-arrow-right2",
            last: "table__icon table__icon-double icon-chevrons-right"
          }
        }
      }
    };
  },

  computed: {
    attr() {
      let pagination = {};
      let data = {};

      if (this.withPagination) {
        if (this.withApi) {
          pagination = {
            // "pagination-path": "", // для сервера
            "pagination-path": "pagination",
            "per-table": this.perPage
          };
        }
      }

      if (this.withApi) {
        data = {
          "api-url": "https://vuetable.ratiw.net/api/users",
          "data-path": "data",
          // "first-page": 0,
          "query-params": { sort: "sort_order", page: "page_no", perPage: "page_size" }
        };
      } else {
        data = {
          "api-mode": false
        };
      }

      return {
        fields: this.header,
        css: this.css.table,
        "sort-order": this.sortOrder,
        // detail row
        "detail-row-component": "table-detail-row",
        "track-by": this.trackBy,
        // conditional things
        ...pagination,
        ...data
      };
    },

    paginationRef() {
      return "pagination-" + this.tableId;
    },

    vuetableRef() {
      return "vuetable-" + this.tableId;
    }
  },

  watch: {
    rows: {
      handler: function(newVal) {
        this.data = newVal;
        this.refreshData();
      },
      immediate: true
    }
  },

  mounted() {
    this.data = this.rows;
    this.refreshData();
  },

  methods: {
    refreshData() {
      this.$nextTick(() => {
        if (this.$refs[this.vuetableRef]) {
          this.$refs[this.vuetableRef].setData(this.data);
        }

        if (this.$refs[this.paginationRef]) {
          this.$refs[this.paginationRef].setPaginationData(this.pagination);
        }
      });
    },

    onCellClicked(props) {
      this.$emit("cell-clicked", { ...props, vuetable: this.$refs[this.vuetableRef] });
    },

    onScrollbarVisible(toggle) {
      // console.log(toggle);
      // this.scrollbarVisible = toggle;
    },

    onRowHeaderEvent(type, payload) {
      // console.log("onRowHeaderEvent:", type, payload);

      let handler = RowEventHandler;

      return typeof handler[type] === "function"
        ? handler[type](this, this.$refs[this.vuetableRef], payload)
        : // : console.log("Unhandled event: ", type, payload);
          null;
    },

    async onPaginationData(paginationData) {
      this.$refs[this.paginationRef].setPaginationData(paginationData);
    },

    onChangePage(page) {
      this.$emit("change-page", page);
      this.$emit("vuetable-pagination:change-page", page);
    },

    dataManager(sortOrder, pagination) {
      let local = this.data;
      if (local.length < 1) return;

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        const sortField = sortOrder[0].sortField;

        local = local.sort((a, b) => {
          // if (typeof sortField == "number") {
          //   // if (sortOrder[0].direction == "asc") {
          //   //   if (a[sortField] < b[sortField]) return -1;
          //   //   return (a[sortField] > b[sortField]) return 1;
          //   //   return 0;
          //   // } else {
          //   //   if (a[sortField] > b[sortField]) return -1;
          //   //   if (a[sortField] < b[sortField]) return 1;
          //   //   return 0;
          //   // }
          // } else {
          if (sortOrder[0].direction == "asc") {
            if (a[sortField] < b[sortField]) return -1;
            if (a[sortField] > b[sortField]) return 1;
            return 0;
          } else {
            if (a[sortField] > b[sortField]) return -1;
            if (a[sortField] < b[sortField]) return 1;
            return 0;
          }
          // }
        });
      }

      return {
        pagination: this.pagination,
        data: local
      };
    },

    onLoading() {
      this.isLoading = true;
    },

    onLoaded() {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
.vuetable th.sortable:hover {
  color: $orange !important;
  transition: 0.3s !important;
}

.table {
  &-wrapper {
    border-radius: 15px;
  }

  &__icon {
    cursor: pointer;

    &-double {
      padding: 0 7px;
      font-size: 20px;
    }

    &-header {
      font-size: 18px;
      padding-top: 1px;
    }
  }

  &__body {
    background: $primary-color;
    border-radius: 15px;
    width: 100%;
    border-collapse: collapse;

    thead {
      font-size: 16px;
      font-weight: normal;

      th {
        border: 1px $gray solid;
        padding: 10px;
      }
    }

    td {
      border: 1px $gray solid;
      padding: 10px;
    }
  }

  &__sorted {
    &-asc,
    &-desc {
      color: $blue;
    }
  }

  &__pagination {
    &-wrapper {
      background: $primary-color;
      // border-radius: 5px;
      padding: 10px;
      margin-top: 5px;
      width: min-content;
    }

    &-active {
      color: $orange !important;
    }

    &-disabled {
      color: $gray !important;
      pointer-events: none;
    }

    &-item {
      font-size: 20px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
}
</style>

<style lang="scss" scoped>
.table {
  max-width: 1200px;

  &__pagination {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0 10px;

    &-actions {
      margin-right: 15px;
      margin-bottom: 10px;
    }
  }
}
</style>
