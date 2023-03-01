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
        {{ $t("Login via Discord") }}
      </div>
    </Button>
  </div>
</template>

<i18n>
{
  "en": {
    "Login via Discord": "Login via Discord"
  },
  "ru": {
     "Login via Discord": "Войти через Discord"
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
    ...mapActions(["login", "loginViaSocNetworkStart"]),

    getErrorsText(errors: any) {
      let errorsArray = Object.values(errors);
      errorsArray = errorsArray.filter((error: any) => error.length);
      if (this.backendError) {
        errorsArray.push(this.backendError);
      }

      return errorsArray.join(". ");
    },

    beforeClose() {
      this.email = "";
      this.password = "";
      this.backendError = "";
      this.isSocNetworkLoading = false;
      this.isLoading = false;
    },

    async onLinkAccount(socNetworkName: string) {
      try {
        this.isSocNetworkLoading = true;

        const successFunc = () => {
          this.isSocNetworkLoading = false;
        };

        await this.loginViaSocNetworkStart({ socNetworkName, successFunc });

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
