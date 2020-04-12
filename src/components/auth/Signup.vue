<template>
  <AuthModal modalName="login" width="400px">
    <div class="login__header">
      <h1 class="login__title">{{ $t("login") }}</h1>
      <div class="login__soc-networks">
        <i @click="$emit('change')" class="login__header-icon icon-google" />
        <i @click="$emit('change')" class="login__header-icon icon-vk" />
        <i @click="$emit('change')" class="login__header-icon icon-steam" />
        <i @click="$emit('change')" class="login__header-icon icon-twitch" />
      </div>
    </div>

    <!-- Поля ввода -->
    <div class="login__inputs">
      <!-- Блок для ввода емайла -->
      <div class="login__block">
        <div class="login__label">
          <i class="login__block-icon icon-email" />
          {{ $t("email") }}
        </div>
        <Input class="login__input" width="calc(100% - 70px)" placeholder="example@email.com" />
      </div>
      <!-- Блок для ввода пароля -->
      <div class="login__block">
        <div class="login__label">
          <i class="login__block-icon icon-password" />
          {{ $t("password") }}
        </div>
        <Input
          class="login__input"
          width="calc(100% - 70px)"
          :placeholder="$t('passwordExample')"
          type="password"
        />
      </div>
    </div>
  </AuthModal>
</template>

<i18n>
{
  "en": {
    "login": "Login",
    "email": "Email",
    "password": "Password",
    "passwordExample": "СложныйПароль123#"
  },
  "ru": {
    "login": "Вход",
    "email": "Email",
    "password": "Пароль",
    "passwordExample": "СложныйПароль123#"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AuthLoginModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal"),
    Input: () => import("@ui-components/Input")
  },

  methods: {
    show() {
      this.$modal.show("login");
    },
    hide() {
      this.$modal.hide("login");
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-bottom: 50px;

    &-icon {
      font-size: 20px;
      @include linkHover;

      & + & {
        margin-left: 14px;
      }

      &.icon-vk {
        font-size: 28px;
      }
    }
  }

  &__title {
    margin: 0;
    margin-right: 20px;
    font-size: 30px;
  }

  &__block {
    margin-bottom: 25px;

    &-icon {
      margin-right: 10px;
    }
  }

  &__label {
    margin-bottom: 10px;
    font-size: 18px;
  }
}
</style>
