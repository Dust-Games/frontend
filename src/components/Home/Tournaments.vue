<template>
  <div class="tournaments">
    <div class="tournaments__header">
      <div class="tournaments__title">
        <h1 class="tournaments__title-text">БЛИЖАЙШИЕ ТУРНИРЫ</h1>
        <span class="tournaments__title-icon">чето</span>
      </div>
      <router-link to="/tournaments" class="tournaments__all tournaments__link"
        >ВСЕ</router-link
      >
    </div>
    <div class="tournaments__content">
      Турниры
    </div>
  </div>
</template>

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
    background: $gray-light;
    height: 300px;
  }
}
</style>
