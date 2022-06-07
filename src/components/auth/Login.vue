<template>
  <div class="login">
    <h1 class="login__title">{{ $t("login") }}</h1>

    <Button
      class="login__button"
      width="100%"
      theme="blue-steel"
      :isLoading="isLoading"
      @click="onLinkAccount('discord')"
    >
      <div class="login__button-content">
        <i class="login__button-icon icon-discord" />
        Войти через Discord
      </div>
    </Button>
  </div>
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
    "signup": "Signup",
    "loginWith": "Login with ",
    "load": "loading..."
  },
  "ru": {
    "login": "Вход",
    "email": "Email",
    "password": "Пароль",
    "passwordExample": "СложныйПароль123#",
    "loginButton": "войти",
    "passwordReset": "Забыли пароль?",
    "signup": "Зарегистрироваться",
    "loginWith": "Вход с помощью ",
    "load": "загрузка..."
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Auth_Login",

  components: {
    Button: () => import("@ui-components/Button")
  },

  data() {
    return {
      email: "" as String,
      password: "" as String,
      isSocNetworkLoading: false as Boolean,
      backendError: "" as String,
      isLoading: false as Boolean,
      isShowPassword: false as Boolean
    };
  },

  methods: {
    ...mapActions(["login", "getBalance", "getAccountLink"]),

    onTogglePassword() {
      this.isShowPassword = !this.isShowPassword;
    },

    getErrorsText(errors: any) {
      let errorsArray = Object.values(errors);
      errorsArray = errorsArray.filter((error: any) => error.length);
      if (this.backendError) {
        errorsArray.push(this.backendError);
      }

      return errorsArray.join(". ");
    },

    onToPasswordReset() {
      this.$emit("hide");
      this.$modal.show("passwordReset");
    },

    onToSignup() {
      this.$emit("hide");
      this.$modal.show("register");
    },

    beforeClose() {
      this.email = "";
      this.password = "";
      this.backendError = "";
      this.isSocNetworkLoading = false;
      this.isLoading = false;
    },

    async onSubmit(handleSubmit: any) {
      try {
        this.isLoading = true;
        const { email, password } = this;
        await this.login({ email, password });

        this.$emit("hide");
        this.$router.push("/home");
      } catch (errors) {
        this.backendError = errors;
      } finally {
        this.isLoading = false;
      }
    },

    async onLinkAccount(accountName: string) {
      try {
        this.isSocNetworkLoading = true;
        const url: any = await this.getAccountLink({ accountName, type: "login" });
        // console.log(url);
        this.isSocNetworkLoading = false;
        window.open(url);

        this.$emit("change");
      } catch (errors) {
        this.backendError = errors;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  &__title {
    margin: -5px 20px 0 0;
    font-size: 30px;
  }

  &__button {
    margin-top: 30px;

    &-content {
      display: flex;
      align-items: center;
    }

    &-icon {
      font-size: 16px;
      margin-right: 10px;
    }
  }
}
</style>
