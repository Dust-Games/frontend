<template>
  <div class="user-dropdown" v-click-outside="onHide">
    <div
      class="user-dropdown__button"
      v-if="isAuthenticated"
      @click="isOpen ? onHide() : onShow()"
    >
      <span class="user-dropdown__icon icon-user" />
      <span class="user-dropdown__nickname">{{ profile.nickname }}</span>
      <span class="user-dropdown__icon icon-arrow-down2" />
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
      <!-- <input
        type="hidden"
        name="openid.realm"
        value="https:\\yourOpenIdRealm.com"
      /> -->
      <input
        type="hidden"
        name="openid.return_to"
        value="http://192.168.0.159:8081/auth/login"
      />
      <Button type="submit" class="user-dropdown__login">{{
        $t("login")
      }}</Button>
    </form>
    <div v-show="isOpen" v-if="isAuthenticated" class="user-dropdown__dropdown">
      <!-- <div
        class="user-dropdown__link user-dropdown__profile"
        @click="onToProfile()"
      >
        Профиль
      </div> -->
      <div class="user-dropdown__logout" @click="onLogout()">
        <span
          class="user-dropdown__logout-icon user-dropdown__icon icon-exit"
        />
        <span class="user-dropdown__logout-text">Выйти</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "HeaderUserDropdown",

  props: {
    profile: Object
  },

  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
    ...mapActions(["logout", "login"]),

    onShow() {
      this.isOpen = true;
    },

    onHide() {
      this.isOpen = false;
    },

    onToProfile() {
      this.$router.push("/user/profile");
      this.onHide();
    },

    onLogout() {
      this.logout();
      this.onHide();
    },

    onLogin() {
      this.login();
    }
  }
});
</script>

<style lang="scss" scoped>
.user-dropdown {
  position: relative;

  &__button {
    user-select: none;

    & > * + * {
      padding-left: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $light-blue;
    }
  }

  &__dropdown {
    z-index: 10;
    padding: 10px;
    background: $blue;
    color: $white;
    min-width: 150px;

    position: absolute;
    top: 30px;
    right: 0;

    display: flex;
    flex-direction: column;

    & > * + * {
      padding-top: 20px;
    }

    & > * {
      margin: 0 20px;
    }
  }

  &__login {
    background: transparent;
    color: $white;
    border: 0;
    font-size: 18px;
    padding: 10px;

    &:hover {
      cursor: pointer;
      color: $light-blue;
      transition: 0.3s;
    }
  }

  &__profile {
    &:hover {
      cursor: pointer;
      color: $black;
      transition: 0.3s;
    }
  }

  &__logout {
    &-text {
      padding-left: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $black;
      transition: 0.3s;
    }
  }
}
</style>
