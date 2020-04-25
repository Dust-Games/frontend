<template>
  <AuthModal
    modalName="register"
    :sizes="{ maxWidth: windowWidth > 660 ? 630 : 310 }"
    :clickToClose="false"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <ValidationObserver v-slot="{ handleSubmit, errors }">
      <form class="register" @submit.prevent="handleSubmit(onSubmit)">
        <div class="register__header">
          <h1 class="register__title">{{ $t("signup") }}</h1>
          <div class="register__soc-networks">
            <!-- <i @click="$emit('change')" class="register__header-icon icon-google" />
            <i @click="$emit('change')" class="register__header-icon icon-vk" /> -->
            <i @click="onLinkAccount('steam')" class="register__header-icon icon-steam" />
            <!-- v-tooltip="$t('registerWith') + 'steam'" -->
            <i @click="onLinkAccount('twitch')" class="register__header-icon icon-twitch" />
            <i @click="onLinkAccount('discord')" class="register__header-icon icon-discord" />
            <i @click="onLinkAccount('battlenet')" class="register__header-icon icon-battlenet" />
          </div>
          <span v-show="isSocNetworkLoading">{{ $t("load") }}</span>
        </div>

        <!-- Ошибки -->
        <span class="register__errors">{{ getErrorsText(errors) }}</span>

        <!-- Поля ввода -->
        <div class="register__inputs">
          <div class="register__row">
            <!-- Блок для ввода емайла -->
            <div class="register__block">
              <div class="register__label">
                <i class="register__block-icon icon-email" />
                {{ $t("email") }}
                <i class="register__required-star">{{ $t("star") }}</i>
              </div>
              <Input
                class="register__input"
                width="186px"
                placeholder="example@email.com"
                v-model="email"
                rules="required|email"
                name="Email"
              />
            </div>
            <!-- Блок для ввода логина -->
            <div class="register__block">
              <div class="register__label">
                <i class="register__block-icon icon-email" />
                {{ $t("username") }}
                <i class="register__required-star">{{ $t("star") }}</i>
              </div>
              <Input
                class="register__input"
                width="186px"
                placeholder="example@email.com"
                v-model="username"
                rules="required|min:3"
                name="Логин"
              />
            </div>
          </div>

          <div class="register__row">
            <!-- Блок для ввода пароля -->
            <div class="register__block">
              <div class="register__label">
                <i class="register__block-icon icon-password" />
                {{ $t("password") }}
                <i class="register__required-star">{{ $t("star") }}</i>
              </div>
              <Input
                class="register__input"
                width="186px"
                v-model="password"
                rules="required|min:10|is_not:email|is_not:username"
                :placeholder="$t('passwordExample')"
                type="password"
                name="Пароль"
              />
            </div>
            <!-- Блок для повторного ввода пароля -->
            <div class="register__block">
              <div class="register__label">
                <i class="register__block-icon icon-password" />
                {{ $t("repeatPassword") }}
                <i class="register__required-star">{{ $t("star") }}</i>
              </div>
              <Input
                class="register__input"
                width="186px"
                v-model="repeatPassword"
                rules="required|confirmed:password"
                :placeholder="$t('passwordExample')"
                type="password"
                name="Повторение пароля"
              />
            </div>
          </div>

          <Checkbox
            class="register__rules"
            v-model="isAgree"
            :rules="{ required: { allowFalse: false } }"
            name="Принятие правил"
          >
            {{ $t("iAgree") }}
            <router-link
              class="link register__rules-link"
              :to="{ name: 'infoRules' }"
              target="_blank"
            >
              {{ $t("rules") }}
            </router-link>
          </Checkbox>
        </div>

        <div class="register__submit">
          <Button type="submit" width="300px" :isLoading="isLoading">
            {{ $t("registerButton") }}
          </Button>
        </div>

        <p class="register__login">
          {{ $t("loginText") }}
          <span class="link login__signup" @click="onToLogin()">
            {{ $t("loginLink") }}
          </span>
        </p>
      </form>
    </ValidationObserver>
  </AuthModal>
</template>

<i18n>
{
  "en": {
    "signup": "Signup",
    "registerButton": "Submit",
    "username": "Login",
    "email": "Email",
    "password": "Password",
    "repeatPassword": "Repeat password",
    "passwordExample": "StrongPassword123#",
    "load": "loading...",
    "iAgree": "I have read and accept ",
    "rules": "the terms of the user agreement",
    "loginText": "Already have an account? ",
    "loginLink": "Login",
    "registerWith": "Register with ",
    "star": "*"
  },
  "ru": {
    "signup": "Регистрация",
    "registerButton": "Зарегистрироваться",
    "username": "Логин",
    "email": "Email",
    "password": "Пароль",
    "repeatPassword": "Повторите пароль",
    "passwordExample": "СложныйПароль123#",
    "load": "загрузка...",
    "iAgree": "Я прочитал(а) и принимаю ",
    "rules": "условия пользовательского соглашения",
    "loginText": "Уже зарегистрированы? ",
    "loginLink": "Войти",
    "registerWith": "Регистрация с помощью ",
    "star": "*"
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
    Checkbox: () => import("@ui-components/Checkbox"),
    Button: () => import("@ui-components/Button")
  },

  data() {
    return {
      // поля для регистрации
      username: "" as String,
      email: "" as String,
      password: "" as String,
      repeatPassword: "" as String,
      // другое
      isAgree: false,
      isSocNetworkLoading: false as Boolean,
      backendError: "" as String,
      isLoading: false as Boolean,
      windowWidth: window.innerWidth
    };
  },

  mounted() {
    window.addEventListener("resize", this.getWindowWidth);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },

  methods: {
    ...mapActions(["register", "getAccountLink"]),

    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },

    hide() {
      this.$modal.hide("register");
    },

    beforeOpen(event: any) {
      if (event.params) {
        this.username = event.params.username || "";
        this.email = event.params.email || "";
      }
    },

    beforeClose() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.backendError = "";
      this.isAgree = false;
      this.isSocNetworkLoading = false;
      this.isLoading = false;
    },

    getErrorsText(errors: any) {
      let errorsArray = Object.values(errors);
      errorsArray = errorsArray.filter((error: any) => error.length);
      if (this.backendError) {
        errorsArray.push(this.backendError);
      }

      return errorsArray.join(". ");
    },

    onToLogin() {
      this.hide();
      this.$modal.show("login");
    },

    async onLinkAccount(accountName: string) {
      try {
        this.isLoading = true;
        this.isSocNetworkLoading = true;
        const url: any = await this.getAccountLink({ accountName, type: "register" });
        this.isSocNetworkLoading = false;
        window.open(url);

        this.$emit("change");
      } catch (errors) {
        this.backendError = errors;
      } finally {
        this.isLoading = false;
      }
    },

    async onSubmit() {
      try {
        this.isLoading = true;
        const { username, email, password } = this;
        await this.register({ username, email, password });

        this.hide();
        this.$router.push("/home");
        this.$modal.show("register-confirm-warn");
      } catch (errors) {
        this.backendError = Object.values(errors).join(". ");
      } finally {
        this.isLoading = false;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.register {
  .link {
    color: $blue-light;
    text-decoration: none;
    @include linkHover;
  }

  &__soc-networks {
    margin-top: 7px;
  }

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

      &.icon-battlenet {
        font-size: 25px;
      }
    }
  }

  &__errors {
    position: absolute;
    margin-top: -55px;
    margin-left: -25px;
    margin-right: 25px;
    color: $red;
    font-size: 12px;
  }

  &__title {
    margin: 0;
    margin-right: 20px;
    font-size: 30px;
  }

  &__row {
    display: flex;

    & > * + * {
      margin-left: 25px;
    }
  }

  &__required-star {
    // color: $red;
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

  &__rules {
    margin-bottom: 40px;

    & > * {
    }

    &-link {
      // margin-left: 5px;
      color: $blue-light !important;
    }
  }

  &__submit {
    display: flex;
    justify-content: center;
  }

  &__login {
    text-align: center;
  }
}

@media (max-width: 660px) {
  /deep/.auth-modal__body {
    margin: -2px 25px 50px !important;
  }

  .register {
    &__row {
      display: flex;
      flex-direction: column;

      & > * + * {
        margin-left: 0;
      }
    }
  }
}
</style>
