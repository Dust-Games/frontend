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
        {{ $t("privacyPolicy") }}
      </router-link>
      <span class="footer__delimiter">|</span>
      <router-link class="footer__link footer__rules" to="/rules">
        {{ $t("rules") }}
      </router-link>
      <span class="footer__delimiter">|</span>
      <router-link class="footer__link footer__about" to="/about">
        {{ $t("about") }}
      </router-link>
    </div>
    <br class="footer__new-line" />
    <div class="footer__language">
      <div
        class="footer__link footer__language-inner"
        @click="onChangeLanguage()"
      >
        {{ $t("changeLanguage") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",

  methods: {
    onChangeLanguage() {
      if (process.env.VUE_APP_I18N_LOCALE == "en") {
        console.log(process.env.VUE_APP_I18N_LOCALE);
        //   process.env.VUE_APP_I18N_LOCALE = "ru";
      } else {
        console.log(process.env.VUE_APP_I18N_LOCALE);
        process.env.VUE_APP_I18N_LOCALE = 1;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.footer {
  background: $black;
  color: $gray-light;
  font-size: 12px;
  padding: 20px;
  transition: 0.3s;

  & > * > * + * {
    padding-left: 10px;
  }

  &__link {
    color: $gray-light;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      color: $light-blue;
    }
  }
}
</style>
