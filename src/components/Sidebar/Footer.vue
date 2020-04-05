<template>
  <div class="footer">
    <div class="footer__soc-networks">
      <span>{{ $t("soc-networks-text") }}</span>
      <div class="footer__soc-networks-icons">
        <a
          href="https://vk.com/dustlords"
          target="_blank"
          @click="$emit('change')"
        >
          <i class="footer__link footer__soc-networks-icon icon-vk" />
        </a>
        <a
          href="https://www.twitch.tv/dust_ru"
          target="_blank"
          @click="$emit('change')"
        >
          <i class="footer__link footer__soc-networks-icon icon-twitch" />
        </a>
        <a
          href="https://discordapp.com/invite/kYbYjYs"
          target="_blank"
          @click="$emit('change')"
        >
          <i class="footer__link footer__soc-networks-icon icon-discord" />
        </a>
      </div>
    </div>
    <br class="footer__new-line" />
    <div class="footer__links">
      <!-- О нас -->
      <router-link
        class="footer__link footer__about"
        to="/info/about"
        @click="$emit('change')"
      >
        {{ $t("about") }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Правила -->
      <router-link
        class="footer__link footer__rules"
        to="/info/rules"
        @click="$emit('change')"
      >
        {{ $t("rules") }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Контакты -->
      <router-link
        class="footer__link footer__contacts"
        to="/info/contacts"
        @click="$emit('change')"
      >
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
    "rules": "Rules",
    "about": "About",
    "contacts": "Contacts",
    "changeLanguage": "Russian version"
  },
  "ru": {
    "soc-networks-text": "Мы в соцсетях",
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
a {
  text-decoration: none;
}

.footer {
  color: $white;
  font-size: 14px;
  transition: 0.3s;

  &__link {
    color: $white;
    text-decoration: none;

    &:hover {
      transition: 0.3s;
      cursor: pointer;
      transition: 0.3s;
      color: $light-blue;
    }

    &-with-underline {
      // text-decoration: underline;
    }
  }

  &__soc-networks {
    &-icons {
      margin-top: 7px;
    }

    &-icon {
      font-size: 30px;
      margin-right: 10px;
    }
  }

  &__delimiter {
    padding: 0 3px;
  }
}
</style>
