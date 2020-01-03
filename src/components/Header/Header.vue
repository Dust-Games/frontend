<template>
  <div class="header-wrapper">
    <HeaderMobile
      class="header__mobile"
      :balance="balance"
      :profile="profile"
    />
    <header class="header">
      <router-link class="header__link header__logo-wrapper" to="/">
        <img class="header__logo" src="@/assets/logo.svg" />
      </router-link>
      <div class="header__nav">
        <!-- <router-link class="header__link header__shop" to="/shop">
          <span class="header__shop-icon header__icon icon-cart" />
          <span class="header__shop-text">МАГАЗИН</span>
        </router-link> -->
        <div class="header__link header__shop" @click="showInDevelopment()">
          <span class="header__shop-icon header__icon icon-cart" />
          <span class="header__shop-text">МАГАЗИН</span>
        </div>
      </div>
      <div class="header__personal-info">
        <div class="header__balance">
          <span class="header__balance-icon header__icon icon-balance" />
          <span class="header__balance-text">{{
            balance.toLocaleString('ru')
          }}</span>
        </div>
        <div class="header__notifications">
          <span class="header__notifications-icon header__icon icon-bell" />
          <span class="header__notifications-text">
            {{ profile.notifications }}
          </span>
        </div>
        <router-link class="header__link header__profile" to="/profile">
          <span class="header__profile-icon header__icon icon-user" />
          <span class="header__profile-text">{{ profile.nickname }}</span>
        </router-link>
        <router-link
          class="header__link header__settings header__icon icon-cog"
          to="/settings"
        />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import headerMixin from './header.mixin';

export default Vue.extend({
  name: 'Header',

  mixins: [headerMixin],

  components: {
    HeaderMobile: () => import('./HeaderMobile'),
  },

  data() {
    return {
      isInDevelopment: false,
      balance: 1000,
      profile: {
        nickname: 'Nagibator',
        notifications: 1,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import './header.mixin.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: $white;
  font-size: 22px;
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px 20px;

  &-wrapper {
    background: $black;
  }

  @include header();
}

@media (max-width: 768px) {
  .header {
    display: none;
  }
}
</style>
