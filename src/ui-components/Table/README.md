## Компонент Таблица

Основано на библиотеке "vuetable-2".

Пример использования

```html
<table
  :header="header"
  :rows="rows"
  :sortOrder="sortOrder"
  :perPage="5"
  detailRow="table-detail-row2"
  withPaginationInfo
>
  <!-- Клик на строку для ее редактирования -->
  <template #actions="{ rowData, vuetable }">
    <div class="table-button-container">
      <button theme="blue" @click="editRow(rowData, vuetable)">
        {{ $t("rules") }}
      </button>
    </div>
  </template>
  <!-- При клике открывается строка с детальной инфой по строке -->
  <template #_detailRow><TableDetailRow2 /></template>
</table>
```

```js
export default {
  components: {
    Table: () => import("@ui-components/Table/Index")
  },

  header: [
    { name: "id", visible: false },
    {
      name: "position",
      title: () => this.$i18n.t("position")
    },
    {
      name: "username",
      title: () => this.$i18n.t("username")
      sortField: "username"
    },
    { name: "score", title: () => this.$i18n.t("score") },
    { name: "total_score", title: () => this.$i18n.t("total_score") },
    "actions"
  ] as Array<Object>,
  rows: [] as any,
}
```
