<template>
  <div class="footer">
    <div class="footer__soc-networks">
      <span>{{ t('Soc Networks') }}</span>
      <div class="footer__soc-networks-icons">
        <a href="https://vk.com/dust_global" target="_blank" @click="$emit('change')">
          <i class="footer__link footer__soc-networks-icon icon-vk" />
        </a>
        <a href="https://www.twitch.tv/dust_ru" target="_blank" @click="$emit('change')">
          <i class="footer__link footer__soc-networks-icon icon-twitch" />
        </a>
        <a href="https://discord.gg/WWKGaHX" target="_blank" @click="$emit('change')">
          <i class="footer__link footer__soc-networks-icon icon-discord" />
        </a>
      </div>
    </div>
    <br class="footer__new-line" />
    <div class="footer__links">
      <!-- О нас -->
      <router-link class="footer__link footer__about" to="/info/about" @click="onChange()">
        {{ t('About') }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Контакты -->
      <router-link class="footer__link footer__team" to="/info/team" @click="$emit('change')">
        {{ t('Our Team') }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Правила -->
      <router-link class="footer__link footer__rules" to="/info/rules" @click="$emit('change')">
        {{ t('Rules') }}
      </router-link>
      <!-- Разделитель -->
      <span class="footer__delimiter">|</span>
      <!-- Контакты -->
      <router-link
        class="footer__link footer__contacts"
        to="/info/contacts"
        @click="$emit('change')"
      >
        {{ t('Contacts') }}
      </router-link>
    </div>
    <br class="footer__new-line" />
    <div
      class="footer__link footer__link-with-underline footer__language-inner"
      @click="onChangeLanguage()"
    >
      {{ t('Change language') }}
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "About": "About",
    "Our Team": "Our team",
    "Rules": "Rules",
    "Contacts": "Contacts",
    "Soc Networks": "We're on social networks",
    "Change language": "Russian version"
  },
  "ru": {
    "About": "О нас",
    "Our Team": "Наша команда",
    "Rules": "Правила",
    "Contacts": "Контакты",
    "Soc Networks": "Мы в соцсетях",
    "Change language": "English version"
  }
}
</i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useTranslatorStore } from '@/stores/translator.store';

const { t } = useI18n();
const translatorStore = useTranslatorStore();

const onChangeLanguage = () => {
  if (translatorStore.lang === 'en') {
    translatorStore.changeLanguage('ru');
  } else {
    translatorStore.changeLanguage('en');
  }
};

const onChange = () => {
  // this.$eventBus.$emit('close-mobile-menu');
  // this.$emit("change");
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.footer {
  font-size: 14px;
  transition: 0.3s;

  &__link {
    color: var(--white);
    text-decoration: none;
    user-select: none;
    // @include linkHover; // @TODO

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
    color: var(--blue);
  }
}
</style>
