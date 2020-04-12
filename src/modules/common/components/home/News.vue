<template>
  <div class="news">
    <div class="news__header">
      <h1 class="news__header-text">{{ $t("news") }}</h1>
      <span class="news__header-icon">{{ $t("description") }}</span>
    </div>
    <div class="news__content">
      {{ $t("news") }}
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "news": "News",
    "description": "Smth"
  },
  "ru": {
    "news": "Новости",
    "description": "Чето"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeNews"
});
</script>

<style lang="scss" scoped>
.news {
  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__content {
    background: $gray-light;
    height: 300px;
  }
}
</style>
