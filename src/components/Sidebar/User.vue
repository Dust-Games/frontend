<template>
  <div class="user">
    <!-- Если юзер не вошел в свой аккаунт -->
    <div class="user__not-auth" v-if="!isAuthenticated">
      <i class="user__icon icon-person_outlineperm_identity" />
      <div class="user__not-auth-links">
        <!-- Кнопка входа -->
        <div class="user__link user__not-auth-login" @click="onLogin()">
          {{ $t("login") }}
        </div>
        <!-- Кнопка регистрации -->
        <!-- <div class="user__link user__not-auth-signup" @click="onSignup()">
          {{ $t("signup") }}
        </div> -->
      </div>
    </div>

    <!-- Если юзер вошел в свой аккаунт -->
    <div class="user__auth" v-else>
      <!-- Кнопка для перехода в профиль -->
      <div class="user__auth-nickname user__block user__link" @click="onToProfile()">
        <i class="user__icon  icon-person_outlineperm_identity" />
        <span class=" user__auth-nickname-text">{{ user.username || $t("load") }}</span>
      </div>
      <!-- Баланс -->
      <div class="user__link" v-if="!mobile" @click="onToWallet()">
        <!-- Баланс дасткоинов -->
        <div class="user__block">
          <i class="user__icon icon-dust" />
          {{ balance.dust_coins_num || $t("load") }}
        </div>
        <!-- Баланс usd -->
        <div class="user__block">
          <i class="user__icon icon-usd" />
          {{ balance.usd_tokens_num || $t("load") }}
        </div>
      </div>
      <!-- Кнопка выхода из аккаунта -->
      <div class="user__link user__block" @click="onLogout()">
        <i class="user__icon icon-exit_to_app" />
        {{ !isLogoutLoading ? $t("logout") : $t("load") }}
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
    "load": "loading..."
  },
  "ru": {
    "login": "вход",
    "signup": "регистрация",
    "logout": "выйти",
    "load": "загрузка..."
  }
}
</i18n>

<script lang="ts">
import { Vue } from "@/main";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "SidebarUser",

  props: {
    mobile: { type: Boolean, default: false }
  },

  data() {
    return {
      isLogoutLoading: false as boolean
    };
  },

  computed: {
    ...mapGetters(["balance", "user", "isAuthenticated"])
  },

  mounted() {
    if (this.isAuthenticated) {
      this.getUser();
      // this.getBalance();
    }
  },

  methods: {
    ...mapActions(["getUser", "getBalance", "logout"]),

    onToWallet() {
      this.$router.push({ name: "UserWallet" });
      // this.$emit("change");
      this.onChange();
    },

    onToProfile() {
      this.$router.push({ name: "UserProfile" });
      this.onChange();
    },

    onLogin() {
      this.$modal.show("login");
      this.onChange();
    },

    onSignup() {
      this.$modal.show("register");
      this.onChange();
    },

    onLogout() {
      this.isLogoutLoading = true;
      this.logout();
      this.onChange();
      this.isLogoutLoading = false;
      this.$router.push("/home");
    },

    onChange() {
      this.$eventBus.$emit("close-mobile-menu");
    }
  }
});
</script>

<style lang="scss" scoped>
.user {
  font-size: 18px;

  &__not-auth {
    display: flex;
    align-items: center;

    &-signup {
      margin-top: -1px;
    }
  }

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
    @include linkHover;
  }
}
</style>
