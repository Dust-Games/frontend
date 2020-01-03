<template>
  <div class="footer">
    <div class="footer__about-site">
      <span class="footer__year">2019, DUST</span>
      <span class="footer__delimiter">|</span>
      <span class="footer__authors">
        BY
        <a
          class="footer__link"
          target="_blank"
          href="https://vk.com/flatron4eg"
        >
          FLATRON4EG
        </a>
        AND
        <a
          class="footer__link"
          target="_blank"
          href="https://vk.com/animeshny_kot"
        >
          SPANRI
        </a>
      </span>
    </div>
    <br class="footer__new-line" />
    <div class="footer__other">
      <router-link
        class="footer__link footer__privacy-policy"
        to="/privacy-policy"
      >
        ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
      </router-link>
      <span class="footer__delimiter">|</span>
      <router-link class="footer__link footer__rules" to="/rules">
        ПРАВИЛА
      </router-link>
      <span class="footer__delimiter">|</span>
      <router-link class="footer__link footer__about" to="/about">
        О НАС
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
.footer {
  background: $black;
  color: $gray-light;
  padding: 20px;

  & > * > * + * {
    padding-left: 10px;
  }

  &__link {
    color: $gray-light;

    &:hover {
      transition: 0.3s;
      color: $white;
    }
  }
}
</style>
