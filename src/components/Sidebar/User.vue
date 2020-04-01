<template>
  <div class="user">
    <div class="user__not-auth" v-if="isAuthenticated">
      <i class="user__not-auth-icon" />
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
      <div class="user__auth-nickname" @click="onToProfile()">
        <i class="user__auth-nickname-icon" />
        <div class="user__link user__auth-nickname-text">profile.name</div>
      </div>
      <div @click="onToWallet()" class="user__link" v-if="!mobile">
        <i class=" user__auth-nickname-icon" />
        {{ balance ? balance.dust_token : $t("load") }}
      </div>
      <div @click="onToWallet()" class="user__link" v-if="!mobile">
        <i class="user__auth-nickname-icon" />
        {{ balance ? balance.usd_token : $t("load") }}
      </div>
      <div>
        <i class="user__not-auth-icon" />
        <div class="user__link">{{ $t("logout") }}</div>
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
    },

    onToProfile() {
      this.$router.push("/user/profile");
    },

    onLogin() {
      this.login();
    },

    onSignup() {
      this.signup();
    },

    onLogout() {
      this.logout();
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  color: $white;
  font-size: 18px;

  &__link {
    &:hover {
      cursor: pointer;
      color: $light-blue;
    }
  }
}
</style>
