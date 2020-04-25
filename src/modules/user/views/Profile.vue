<template>
  <div class="profile">
    <h1 class="profile__title">{{ $t("profile") }}</h1>
    <div class="profile__common">
      <p>{{ $t("username") }} {{ user.username }}</p>
      <p>{{ $t("email") }} {{ user.email }}</p>
      <p>
        {{ $t("accounts") }}
        <br />
        {{ !!accounts.length ? accounts : $t("emptyAccounts") }}
      </p>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "profile": "Profile",
    "username": "Login: ",
    "email": "Email: ",
    "accounts": "Soc networks: ",
    "emptyAccounts": "Oops... Empty!"
  },
  "ru": {
    "profile": "Профиль",
    "username": "Логин: ",
     "email": "Email: ",
    "accounts": "Социальные сети: ",
    "emptyAccounts": "Упс... Пусто!"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "Profile",

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["user", "accounts"])
  },

  mounted() {
    this.getUser();
    this.getAccounts();
  },

  methods: {
    ...mapActions(["getAccounts", "getUser"])
  }
});
</script>

<style lang="scss" scoped>
.profile {
  text-align: left;
  max-width: 1080px;
  margin: 0 auto;

  &__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__block1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 30px;

    & > * {
      flex: 1;
    }
  }

  &__avatar {
    max-width: 100px;
    display: block;

    &-wrapper {
      margin: auto;
    }
  }

  &__connection {
    display: inline;

    & + & {
      padding-left: 10px;
    }
  }

  &__personal-info {
    background: $gray-light;
    padding: 20px;
    color: $gray-darkest;
    flex: 2;
  }

  &__achievements {
    padding: 20px;
    flex: 1;
  }
}
</style>
