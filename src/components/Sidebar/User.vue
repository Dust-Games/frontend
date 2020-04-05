<template>
  <div class="user">
    <div class="user__not-auth" v-if="isAuthenticated">
      <i class="user__icon icon-person_outlineperm_identity" />
      <div class="user__not-auth-links">
        <div class="user__link user__not-auth-login" @click="onLogin()">
          {{ $t("login") }}
        </div>
        <div class="user__link user__not-auth-signup" @click="onSignup()">
          {{ $t("signup") }}
        </div>
      </div>
    </div>
    <div class="user__auth" v-else>
      <div
        class="user__auth-nickname user__block user__link"
        @click="onToProfile()"
      >
        <i class="user__icon  icon-person_outlineperm_identity" />
        <span class=" user__auth-nickname-text">profile.name</span>
      </div>
      <div @click="onToWallet()" class="user__link user__block" v-if="!mobile">
        <i class="user__icon icon-dust" />
        {{ balance ? balance.dust_token : $t("load") }}
      </div>
      <div @click="onToWallet()" class="user__link user__block" v-if="!mobile">
        <i class="user__icon icon-usd" />
        {{ balance ? balance.usd_token : $t("load") }}
      </div>
      <div class="user__link user__block">
        <i class="user__icon icon-exit_to_app" />
        {{ $t("logout") }}
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "login": "login",
    "signup": "signup",
    "logout": "logout",
    "load": "load..."
  },
  "ru": {
    "login": "вход",
    "signup": "регистрация",
    "logout": "выйти",
    "load": "загрузка..."
  }
}
</i18n>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SidebarUser",

  props: {
    mobile: { type: Boolean, default: false }
  },

  computed: {
    ...mapGetters(["balance", "profile", "isAuthenticated"])
  },

  methods: {
    ...mapActions(["login", "signup", "logout"]),

    onToWallet() {
      this.$router.push("/user/wallet");
      this.$emit("change");
    },

    onToProfile() {
      this.$router.push("/user/profile");
      this.$emit("change");
    },

    onLogin() {
      this.login();
      this.$emit("change");
    },

    onSignup() {
      this.signup();
      this.$emit("change");
    },

    onLogout() {
      this.logout();
      this.$emit("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  color: $white;
  font-size: 18px;

  &__icon {
    font-size: 30px;
    width: 30px;
    margin-right: 20px;
  }

  &__block {
    display: flex;
    align-items: center;

    margin-bottom: 13px;
  }

  &__link {
    &:hover {
      transition: 0.3s;
      cursor: pointer;
      color: $light-blue;
    }
  }
}
</style>
