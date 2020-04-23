<template>
  <AuthModal modalName="register" width="400px" :clickToClose="false">
    <ValidationObserver v-slot="{ handleSubmit, errors }">
      <form class="register" @submit.prevent="onSubmit">
        <div class="register__header">
          <h1 class="register__title">{{ $t("signup") }}</h1>
          <div class="register__soc-networks">
            <i @click="$emit('change')" class="register__header-icon icon-google" />
            <i @click="$emit('change')" class="register__header-icon icon-vk" />
            <i @click="$emit('change')" class="register__header-icon icon-steam" />
            <i @click="$emit('change')" class="register__header-icon icon-twitch" />
          </div>
        </div>

        <!-- Поля ввода -->
        <div class="register__inputs">
          <!-- Блок для ввода емайла -->
          <div class="register__block">
            <div class="register__label">
              <i class="register__block-icon icon-email" />
              {{ $t("email") }}
            </div>
            <Input
              class="register__input"
              width="calc(100% - 70px)"
              placeholder="example@email.com"
            />
          </div>
          <!-- Блок для ввода пароля -->
          <div class="register__block">
            <div class="register__label">
              <i class="register__block-icon icon-password" />
              {{ $t("password") }}
            </div>
            <Input
              class="register__input"
              width="calc(100% - 70px)"
              :placeholder="$t('passwordExample')"
              type="password"
            />
          </div>
        </div>

        <Button type="submit" width="100%">{{ $t("registerButton") }}</Button>
      </form>
    </ValidationObserver>
  </AuthModal>
</template>

<i18n>
{
  "en": {
    "signup": "Signup",
    "registerButton": "Submit",
    "email": "Email",
    "password": "Password",
    "passwordExample": "StrongPassword123#"
  },
  "ru": {
    "signup": "Регистрация",
    "registerButton": "Зарегистрироваться",
    "email": "Email",
    "password": "Пароль",
    "passwordExample": "СложныйПароль123#"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "AuthRegisterModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal"),
    Input: () => import("@ui-components/Input"),
    Button: () => import("@ui-components/Button")
  },

  data() {
    return {
      login: "" as String,
      email: "" as String,
      password: "" as String,
      repeatPassword: "" as String,
      isAgree: false
    };
  },

  methods: {
    ...mapActions(["register"]),

    show() {
      this.$modal.show("register");
    },

    hide() {
      this.$modal.hide("register");
    },

    async onSubmit() {
      try {
        const { login, email, password } = this;
        await this.register({ login, email, password });
        this.hide();
      } catch (errors) {
        console.log(errors);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.register {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-bottom: 60px;

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
