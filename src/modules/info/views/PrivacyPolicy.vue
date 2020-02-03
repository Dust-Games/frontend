<template>
  <div class="privacy-policy">
    <h1 class="privacy-policy__title">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
    <p class="privacy-policy__text">
      Какая-то политика.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PrivacyPolicy"
});
</script>

<style lang="scss" scoped>
.privacy-policy {
  color: $white;
  text-align: left;
  padding: 30px;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
