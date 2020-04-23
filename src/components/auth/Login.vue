<template>
  <AuthModal modalName="login" width="400px">
    <ValidationObserver v-slot="{ handleSubmit, errors }">
      <form class="login" @submit.prevent="onSubmit">
        <div class="login__header">
          <h1 class="login__title">{{ $t("login") }}</h1>
          <div class="login__soc-networks">
            <i @click="$emit('change')" class="login__header-icon icon-google" />
            <i @click="$emit('change')" class="login__header-icon icon-vk" />
            <i @click="$emit('change')" class="login__header-icon icon-steam" />
            <i @click="$emit('change')" class="login__header-icon icon-twitch" />
          </div>
        </div>

        <!-- Ошибки -->
        <span class="login__errors">{{ getErrorsText(errors) }}</span>

        <!-- Поля ввода -->
        <div class="login__inputs">
          <!-- Блок для ввода емайла -->
          <div class="login__block">
            <div class="login__label">
              <i class="login__block-icon icon-email" />
              {{ $t("email") }}
            </div>

            <Input
              class="login__input"
              v-model="email"
              rules="required|email"
              name="Логин"
              width="calc(100% - 70px)"
              placeholder="example@email.com"
            />
          </div>
          <!-- Блок для ввода пароля -->
          <div class="login__block">
            <div class="login__label">
              <i class="login__block-icon icon-password" />
              {{ $t("password") }}
            </div>
            <Input
              class="login__input"
              v-model="password"
              rules="required"
              name="Пароль"
              width="calc(100% - 70px)"
              :placeholder="$t('passwordExample')"
              type="password"
            />
          </div>
        </div>

        <p class="link login__password-reset" @click="onToPasswordReset()">
          {{ $t("passwordReset") }}
        </p>

        <Button type="submit" width="100%">{{ $t("loginButton") }}</Button>

        <p class="link login__signup" @click="onToSignup()">{{ $t("signup") }}</p>
      </form>
    </ValidationObserver>
  </AuthModal>
</template>

<i18n>
{
  "en": {
    "login": "Login",
    "email": "Email",
    "password": "Password",
    "passwordExample": "StrongPassword123#",
    "loginButton": "login",
    "passwordReset": "Forgot your password?",
     "signup": "Signup"
  },
  "ru": {
    "login": "Вход",
    "email": "Email",
    "password": "Пароль",
    "passwordExample": "СложныйПароль123#",
    "loginButton": "войти",
     "passwordReset": "Забыли пароль?",
      "signup": "Зарегистрироваться"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "AuthLoginModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal"),
    Input: () => import("@ui-components/Input"),
    Button: () => import("@ui-components/Button")
  },

  data() {
    return {
      email: "" as String,
      password: "" as String
    };
  },

  methods: {
    ...mapActions(["login", "getBalance"]),

    show() {
      this.$modal.show("login");
    },

    hide() {
      this.$modal.hide("login");
    },

    getErrorsText(errors: string[]) {
      return Object.values(errors).join(". ");
    },

    onToPasswordReset() {
      this.hide();
      this.$modal.show("passwordReset");
    },

    onToSignup() {
      this.hide();
      this.$modal.show("register");
    },

    async onSubmit() {
      try {
        const { email, password } = this;
        await this.login({ email, password });
        await this.getBalance();
        this.hide();
      } catch (errors) {
        console.log(errors);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  .link {
    color: $blue-light;
    @include linkHover;
  }

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

  &__errors {
    position: absolute;
    margin-top: -40px;
    color: $red;
    font-size: 12px;
  }

  &__block {
    & + & {
      margin-top: 25px;
    }

    &-icon {
      margin-right: 10px;
    }
  }

  &__label {
    margin-bottom: 10px;
    font-size: 18px;
  }

  &__password-reset {
    margin: 10px 0 50px;
  }

  &__signup {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
