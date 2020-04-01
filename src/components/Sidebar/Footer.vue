<template>
  <div class="footer">
    <div class="footer__soc-networks">
      <span>{{ $t("soc-networks-text") }}</span>
      <div class="footer__soc-networks-">
        123
      </div>
    </div>
    <br class="footer__new-line" />
    <div class="footer__links">
      <!-- О нас -->
      <router-link class="footer__link footer__about" to="/info/about">
        {{ $t("about") }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Правила -->
      <router-link class="footer__link footer__rules" to="/info/rules">
        {{ $t("rules") }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Политика конфиденциальности -->
      <router-link
        class="footer__link footer__privacy-policy"
        to="/info/privacy-policy"
      >
        {{ $t("privacyPolicy") }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Контакты -->
      <router-link class="footer__link footer__contacts" to="/info/contacts">
        {{ $t("contacts") }}
      </router-link>
    </div>
    <br class="footer__new-line" />
    <!-- <div class="footer__language"> -->
    <div
      class="footer__link footer__link-with-underline footer__language-inner"
      @click="onChangeLanguage()"
    >
      {{ $t("changeLanguage") }}
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "soc-networks-text": "We're on social networks",
    "privacyPolicy": "Privacy policy",
    "rules": "Rules",
    "about": "About",
    "contacts": "Contacts",
    "changeLanguage": "Russian version"
  },
  "ru": {
    "soc-networks-text": "Мы в соцсетях",
    "privacyPolicy": "Политика конфиденциальности",
    "rules": "Правила",
    "about": "О нас",
    "contacts": "Контакты",
    "changeLanguage": "English version"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "Footer",

  methods: {
    onChangeLanguage() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "ru";
      } else {
        this.$i18n.locale = "en";
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.footer {
  color: $white;
  font-size: 14px;
  transition: 0.3s;

  &__link {
    color: $white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      color: $light-blue;
    }

    &-with-underline {
      // text-decoration: underline;
    }
  }

  &__delimiter {
    padding: 0 3px;
  }
}
</style>
