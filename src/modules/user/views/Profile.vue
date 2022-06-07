<template>
  <DefaultLayout>
    <div class="profile">
      <div class="profile__common">
        <div class="profile__common-header">
          <!-- Логин -->
          <div class="profile__light-block">
            <h3 class="profile__light-block-title">{{ $t("username") }}</h3>
            <p class="profile__light-block-text">{{ user.username }}</p>
          </div>
          <!-- Email -->
          <div class="profile__light-block">
            <h3 class="profile__light-block-title">{{ $t("email") }}</h3>
            <p class="profile__light-block-text">{{ user.email }}</p>
          </div>
          <!-- Дата создания профиля -->
          <div class="profile__light-block">
            <h3 class="profile__light-block-title">{{ $t("created_at") }}</h3>
            <p class="profile__light-block-text">{{ user.created_at }}</p>
          </div>
          <!-- Подтвержденный ли email -->
          <div class="profile__light-block">
            <h3 class="profile__light-block-title">{{ $t("email_verified") }}</h3>
            <p class="profile__light-block-text">
              {{ user.email_verified ? $t("yes") : $t("no") }}
            </p>
          </div>
        </div>

        <hr class="profile__hr" />

        <div class="profile__common-content">
          <!-- Социальные сети -->
          <div class="profile__block">
            <h3 class="profile__block-title">{{ $t("accounts") }}</h3>
            <p class="profile__block-text">
              {{ !!accounts.length ? accounts : $t("emptyAccounts") }}
            </p>
          </div>
        </div>

        <!-- <h3>{{ $t("sessions") }}</h3>
      <Table :rows="sessions" :header="sessionsHeader" /> -->
      </div>
    </div>
  </DefaultLayout>
</template>

<i18n>
{
  "en": {
    "username": "Login: ",
    "email": "Email: ",
    "created_at": "Registration date:",
    "email_verified": "Verified email:",
    "yes": "yes",
    "no": "no",
    "accounts": "Soc networks: ",
    "emptyAccounts": "Oops... Empty!",
    "sessions": "Sessions",
    "updated_at_session": "Date"
  },
  "ru": {
    "username": "Логин: ",
    "email": "Email: ",
    "created_at": "Дата регистрации:",
    "email_verified": "Подтвержденный email:",
    "yes": "да",
    "no": "нет",
    "accounts": "Социальные сети: ",
    "emptyAccounts": "Упс... Пусто!",
    "sessions": "Сессии",
    "updated_at_session": "Дата последнего захода"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "Profile",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
    // Table: () => import("@ui-components/Table")
  },

  data() {
    return {
      sessions: "",
      sessionsHeader: [
        // {
        //   name: "__sequence",
        //   title: "№"
        // },
        {
          name: "updated_at",
          title: () => this.$i18n.t("updated_at_session"),
          sortField: "updated_at"
        }
      ] as Array<Object>
    };
  },

  computed: {
    ...mapGetters(["user", "accounts"])
  },

  async mounted() {
    await this.getUser();
    await this.getAccounts();
    this.sessions = await this.getSessions();
  },

  methods: {
    ...mapActions(["getAccounts", "getUser", "getSessions"])
  }
});
</script>

<style lang="scss" scoped>
.profile {
  &__common {
    &-header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      margin-bottom: 15px;
    }

    &-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__hr {
    border: 0;
    border-bottom: 1px solid $white;
    margin: 5px 0 35px;
  }

  &__light-block {
    color: $white;
    padding: 20px 35px 20px 0;
    width: min-content;

    display: flex;
    flex-direction: column;

    &-title {
      margin: 0;
      margin-bottom: 10px;
      white-space: nowrap;
    }

    &-text {
      margin: 0;
    }
  }

  &__block {
    background: $blue-steel;
    color: $white;
    padding: 20px;
    margin: 0 15px 15px 0;
    border-radius: 6px;
    width: min-content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-title {
      margin: 0;
      margin-bottom: 15px;
      white-space: nowrap;
    }

    &-text {
      margin: 0;
    }
  }
}
</style>
