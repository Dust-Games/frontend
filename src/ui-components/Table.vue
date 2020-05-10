<template>
  <div class="table">
    <vuetable
      ref="vuetable"
      v-bind="attr"
      :data-manager="dataManager"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded"
      @vuetable:pagination-data="onPaginationData"
    >
      <!-- Для особых полей, например, actions -->
      <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="props">
        <slot :name="name" v-bind="{ ...props, vuetable: $refs.vuetable }" />
      </template>

      <!-- Для детальной строки, в слот можно поместить что-то, что переопределит строку -->
      <!-- <div v-if="!!$scopedSlots._detailRow">
        <slot name="_detailRow" />
      </div>
      <TableDetailRow v-else /> -->
    </vuetable>

    <!-- api-url="https://vuetable.ratiw.net/api/users" -->
    <!-- :api-mode="false" -->
    <!-- :data-manager="dataManager" -->

    <!-- Пагинация -->
    <div class="table__pagination">
      <vuetable-pagination
        class="table__pagination-actions"
        ref="pagination"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage"
      />

      <div class="table__pagination-info">
        {{
          $t("paginationInfo", {
            from: paginationData.from,
            to: paginationData.to,
            total: paginationData.total
          })
        }}
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "paginationInfo": "Displaying {from} to {to} of {total}"
  },
  "ru": {
    "paginationInfo": "Показано {from} - {to} из {total}"
  }
}
</i18n>

<script>
import Vue from "vue";
import DetailRow from "./TableDetailRow";
Vue.component("table-detail-row", DetailRow); // <--- register the component to Vue

export default {
  name: "UiTable",

  props: {
    header: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    sortOrder: { type: Array, default: () => [] },
    // detailRow: { type: String },
    withPaginationActions: { type: Boolean, default: false }
  },

  components: {
    Vuetable: () => import("vuetable-2"),
    VuetablePagination: () => import("vuetable-2/src/components/VuetablePagination")
    // TableDetailRow: () => import("./TableDetailRow")
  },

  data() {
    return {
      isLoading: false,
      paginationData: {},
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
      return {
        fields: this.header,
        // data
        data: this.rows,
        "api-mode": false,
        // "data-manager": this.dataManager,
        // api
        // "api-url": "https://vuetable.ratiw.net/api/users",
        // "query-params": { sort: "sort_order", page: "page_no", perPage: "page_size" },
        // other
        css: this.css.table,
        "sort-order": this.sortOrder,
        // detail row
        "detail-row-component": "table-detail-row",
        "track-by": "position",
        // pagination
        // "pagination-path": "", // для сервера
        "pagination-path": "pagination",
        "per-table": 2
      };
    }
  },

  watch: {
    rows(newVal, oldVal) {
      // this.$refs.vuetable.refresh();
    }
  },

  methods: {
    onPaginationData(paginationData) {
      console.log("6767", paginationData);
      this.paginationData = paginationData;
      this.$refs.pagination.setPaginationData(paginationData);
    },

    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },

    dataManager(sortOrder, pagination) {
      let local = this.rows;
      console.log(456, local);
      if (this.data.length < 1) return;

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        // Sort ASC
        // homes.sort((a, b) => {
        //   return parseFloat(a.price) - parseFloat(b.price);
        // });

        // // Sort DESC
        // homes.sort(compareDESC);

        console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
        // local = _.orderBy(local, sortOrder[0].sortField, sortOrder[0].direction);
      }

      pagination = this.$refs.vuetable.makePagination(local.length, this.perPage);
      console.log("pagination:", pagination);
      let from = pagination.from - 1;
      let to = from + this.perPage;

      return {
        pagination: pagination
        // data: _.slice(local, from, to)
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
      border-radius: 5px;
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
  &__pagination {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0 10px;

    & > * {
      margin-bottom: 10px;
    }

    &-actions {
      margin-right: 15px;
    }
  }
}
</style>
