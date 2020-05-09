<template>
  <div>
    <vuetable
      ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="header"
      :data="rows"
      :sort-order="sortOrder"
      pagination-path=""
      :per-table="2"
      @vuetable:pagination-data="onPaginationData"
      :css="css.table"
    ></vuetable>
    <!-- api-url="https://vuetable.ratiw.net/api/users"
      pagination-path="" -->
    <!-- :api-mode="false" -->
    <!-- :data-manager="dataManager" -->
    <div style="padding-top:10px">
      <div>
        {{
          $t("paginationInfo", {
            from: paginationData.from,
            to: paginationData.to,
            total: paginationData.total
          })
        }}
      </div>

      <vuetable-pagination
        ref="pagination"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
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
export default {
  name: "UiTable",

  props: {
    header: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    sortOrder: { type: Array, default: () => [] }
  },

  components: {
    Vuetable: () => import("vuetable-2"),
    VuetablePagination: () => import("vuetable-2/src/components/VuetablePagination")
  },

  data() {
    return {
      data: [],
      paginationData: {},
      css: {
        table: {
          tableWrapper: "table-wrapper",
          tableHeaderClass: "fixed",
          tableBodyClass: "vuetable-semantic-no-top fixed",
          tableClass: "ui blue selectable unstackable celled table",
          loadingClass: "loading",
          ascendingIcon: "blue chevron up icon",
          descendingIcon: "blue chevron down icon",
          ascendingClass: "sorted-asc",
          descendingClass: "sorted-desc",
          sortableIcon: "grey sort icon",
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

  watch: {
    data(newVal, oldVal) {
      // this.$refs.vuetable.refresh();
    }
  },

  mounted() {
    // axios.get("https://vuetable.ratiw.net/api/users").then(response => {
    //   this.data = response.data.data;
    // });
  },

  methods: {
    onPaginationData(paginationData) {
      this.paginationData = paginationData;
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },

    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },

    dataManager(sortOrder) {
      if (this.rows.length < 1) return;

      let local = this.data;

      // sortOrder can be empty, so we have to check for that as well
      // if (sortOrder.length > 0) {
      //   console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
      //   local = _.orderBy(local, sortOrder[0].sortField, sortOrder[0].direction);
      // }

      return {
        data: local
      };
    }

    // onActionClicked(action, data) {
    //   console.log("slot actions: on-click", data.name);
    // }
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
    background: $primary-color;
    border-radius: 5px;
    padding: 10px;
  }

  &__icon {
    cursor: pointer;

    &-double {
      padding: 0 7px;
      font-size: 20px;
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
    }

    &-item {
      font-size: 20px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
}
</style>
