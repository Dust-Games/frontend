<template>
  <div class="tournaments">
    <div class="tournaments__header">
      <div class="tournaments__title">
        <h1 class="tournaments__title-text">{{ $t("tournaments") }}</h1>
        <span class="tournaments__title-icon">{{ $t("description") }}</span>
      </div>
      <router-link to="/tournaments" class="tournaments__all tournaments__link">
        {{ $t("all") }}
      </router-link>
    </div>
    <div class="tournaments__content">
      {{ $t("tournaments") }}
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "all": "All",
    "tournaments": "Tournaments",
    "description": "Smth"
  },
  "ru": {
    "all": "Все",
    "tournaments": "Турниры",
    "description": "Чето"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeTournaments"
});
</script>

<style lang="scss" scoped>
.tournaments {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__content {
    background: $gray-900;
    height: 300px;
  }
}
</style>
