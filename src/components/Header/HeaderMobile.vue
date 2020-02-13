<template>
  <div class="header__hamburger">
    <img class="header__logo" src="@/assets/logo.svg" />
    <div class="header__hamburger-inner">
      <input class="header__checkbox" type="checkbox" />
      <span class="header__span" />
      <span class="header__span" />
      <span class="header__span" />
      <header class="header__mobile-content">
        <!-- <div class="header__link header__shop" @click="showInDevelopment()">
          <span class="header__shop-icon header__icon icon-cart" />
          <span class="header__shop-text">МАГАЗИН</span>
        </div> -->
        <div
          class="header__wallet header__link"
          @click="onToWallet()"
          v-if="isAuthenticated"
        >
          <span
            class="header__wallet-icon header__icon icon-account_balance_wallet"
          />
          <span class="header__wallet-text">{{
            balance.toLocaleString("ru")
          }}</span>
        </div>
        <!-- <div class="header__notifications">
          <span class="header__notifications-icon header__icon icon-bell" />
          <span class="header__notifications-text">
            {{ profile.notifications }}
          </span>
        </div> -->
        <!-- <router-link class="header__link header__profile" to="/profile">
          <span class="header__profile-icon header__icon icon-user" />
          <span class="header__profile-text">{{ profile.nickname }}</span>
        </router-link> -->
        <div class="header__logout" @click="onLogout()" v-if="isAuthenticated">
          <span class="header__logout-icon header__icon icon-exit" />
          <span class="header__logout-text">Выйти</span>
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
        </form>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import headerMixin from "./header.mixin";

export default Vue.extend({
  name: "HeaderMobile",

  mixins: [headerMixin]
});
</script>

<style lang="scss" scoped>
@import "./header.mixin.scss";

.header {
  &__hamburger {
    display: none;

    &-inner {
      margin: 20px;
      // margin-left: auto;
      // margin-right: 20px;
      width: min-content;
      // position: absolute;
      // left: 0;
      margin-left: calc(-145px - 26px);
    }
  }

  &__span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    // left: calc(100% - 33px - 20px);

    background: $white;
    border-radius: 3px;
    z-index: 1;

    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  &__span:first-child {
    transform-origin: 0% 0%;
  }

  &__span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  &__checkbox {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    right: -5px;
    margin: 20px;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;

    &:hover {
      cursor: pointer;
    }
  }

  &__checkbox:not([checked]) ~ &__span {
    left: calc(100vw - 33px - 20px);
  }

  &__checkbox:checked ~ &__span {
    opacity: 1;
    transform: rotate(45deg) translate(2px, -5px);
    background: $gray-light;
    // left: calc(100% - 33px - 20px);
  }

  &__checkbox:checked ~ &__span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &__checkbox:checked ~ &__span:nth-last-child(2) {
    transform: rotate(-45deg) translate(4px, 2px);
  }

  &__mobile-content {
    display: none;
    width: 100%;
    color: $white;
    font-size: 22px;

    background-color: $gray-darkest;

    padding-bottom: 25px;

    position: absolute;
    top: 60px;

    & > * + * {
      margin-top: 20px !important;
    }
  }

  &__checkbox:checked ~ &__mobile-content {
    display: flex;
    flex-direction: column;
    transform: none;
  }

  @include header();

  &__logout {
    &-text {
      padding-left: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $light-blue;
      transition: 0.3s;
    }
  }

  &__login {
    &:hover {
      cursor: pointer;
      color: $light-blue;
      transition: 0.3s;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__hamburger {
      display: flex;

      & .header__logo {
        margin: 13px;
      }
    }
  }
}
</style>
