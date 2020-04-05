<template>
  <div class="sidebar-mobile">
    <div class="sidebar-mobile__logo"><img src="@/assets/logo.svg" /></div>
    <MobileHamburger
      class="sidebar-mobile__hamburger"
      :isChecked="isMenuShow"
      @on-change="onChangeHamburgerState"
    />
    <transition name="slide-fade">
      <div class="sidebar-mobile__menu" v-if="isMenuShow">
        <!-- Вход/регистрация или ник юзера -->
        <User
          class="sidebar-mobile__user"
          mobile
          @change="onChangeHamburgerState(false)"
        />
        <!-- Меню -->
        <Nav
          class="sidebar-mobile__nav"
          @change="onChangeHamburgerState(false)"
        />
        <div class="sidebar-mobile__hr" />
        <!-- Футер -->
        <Footer
          class="sidebar-mobile__footer"
          @change="onChangeHamburgerState(false)"
        />
      </div>
    </transition>

    <!-- <div class="sidebar-mobile__hamburger-inner"> -->
    <!-- <header class="sidebar-mobile__mobile-content"> -->
    <!-- <div class="header__link header__shop" @click="showInDevelopment()">
          <span class="header__shop-icon header__icon icon-cart" />
          <span class="header__shop-text">МАГАЗИН</span>
        </div> -->
    <!-- <div
          class="sidebar-mobile__wallet sidebar-mobile__link"
          @click="onToWallet()"
          v-if="isAuthenticated"
        >
          <span
            class="sidebar-mobile__wallet-icon sidebar-mobile__icon icon-account_balance_wallet"
          />
          <span class="sidebar-mobile__wallet-text">{{
            balance.toLocaleString("ru")
          }}</span>
        </div> -->
    <!-- <div class="sidebar__notifications">
          <span class="sidebar__notifications-icon sidebar__icon icon-bell" />
          <span class="sidebar__notifications-text">
            {{ profile.notifications }}
          </span>
        </div> -->
    <!-- <router-link class="sidebar__link sidebar__profile" to="/profile">
          <span class="sidebar__profile-icon sidebar__icon icon-user" />
          <span class="sidebar__profile-text">{{ profile.nickname }}</span>
        </router-link> -->
    <!-- <div
          class="sidebar-mobile__logout"
          @click="onLogout()"
          v-if="isAuthenticated"
        >
          <span
            class="sidebar-mobile__logout-icon sidebar-mobile__icon icon-exit"
          />
          <span class="sidebar-mobile__logout-text">{{ $t("Logout") }}</span>
        </div>
        <form
          action="https://steamcommunity.com/openid/login"
          method="post"
          v-if="!isAuthenticated"
        >
          <input
            type="hidden"
            name="openid.identity"
            value="http://specs.openid.net/auth/2.0/identifier_select"
          />
          <input
            type="hidden"
            name="openid.claimed_id"
            value="http://specs.openid.net/auth/2.0/identifier_select"
          />
          <input
            type="hidden"
            name="openid.ns"
            value="http://specs.openid.net/auth/2.0"
          />
          <input type="hidden" name="openid.mode" value="checkid_setup" />
          <input
            type="hidden"
            name="openid.realm"
            value="https:\\yourOpenIdRealm.com"
          />
          <input
            type="hidden"
            name="openid.return_to"
            value="https:\\YourDomainUrlToReturnTo.com"
          />
          <Button type="submit" class="header__login">{{ $t("login") }}</Button>
        </form> -->
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "SidebarMobile",

  components: {
    MobileHamburger: () => import("./MobileHamburger"),
    Nav: () => import("./Nav"),
    User: () => import("./User"),
    Footer: () => import("./Footer")
  },

  data() {
    return {
      isMenuShow: false
    };
  },

  computed: {
    ...mapGetters(["balance", "profile", "isAuthenticated"])
  },

  methods: {
    ...mapActions(["login", "signup", "logout"]),

    onLogin() {
      this.login();
    },

    onSignup() {
      this.signup();
    },

    onLogout() {
      this.logout();
    },

    onChangeHamburgerState(isChecked: boolean) {
      console.log(123);
      this.isMenuShow = isChecked;
    }
  }
});
</script>

<style lang="scss" scoped>
// плавная выплывашка
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.sidebar-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: $primary-color;
  width: 100%;
  height: 70px;

  &__logo {
    height: 25px;
    width: 100px;
    padding-left: 20px;
  }

  &__menu {
    position: absolute;
    margin-top: 70px;
    top: 0;
    color: $white;
    width: 100%;
    background: $primary-color;
    z-index: 10;
  }

  &__nav {
    margin: 30px;
  }

  &__user,
  &__footer {
    margin-left: 30px;
    margin-bottom: 30px;
  }

  &__hr {
    height: 0;
    // width: 100%;
    border-top: 1px solid $white;
    max-width: 250px;
    margin: 0 30px 30px;
  }
}
</style>
