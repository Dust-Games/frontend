<template>
  <h1 class="not-found">{{ $t("notFound") }}</h1>
</template>

<i18n>
{
  "en": {
    "notFound": "Page is not found"
  },
  "ru": {
    "notFound": "Страница не найдена"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OtherNotFound"
});
</script>
