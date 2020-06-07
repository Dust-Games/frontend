<template>
  <details class="storybook__block">
    <summary class="storybook__title">Таблица (Table)</summary>
    <p>{{ exampleValue }}</p>

    <div class="storybook__block-inner">
      <Table :header="header" :rows="exampleItems" trackBy="id" />
    </div>
  </details>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    Table: () => import("@ui-components/Table")
  },

  data() {
    return {
      exampleValue: false as boolean,
      exampleItems: [
        { id: 1, position: 1, username: "User1" },
        { id: 2, position: 3, username: "Use31" },
        { id: 3, position: 2, username: "User1777" }
      ] as Array<any>,
      header: [
        { name: "id", visible: false },
        {
          name: "position",
          title: "position"
          // sortField: "position"
        },
        {
          name: "username",
          title: "username"
          // sortField: "username"
        }
        // "actions"
      ] as Array<Object>
    };
  }
});
</script>
