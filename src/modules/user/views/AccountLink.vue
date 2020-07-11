<template>
  <div class="account-link">
    <h1>{{ $t("authFor", { socNetwork }) }}</h1>
    <p>{{ response || $t("proccess") }}</p>
  </div>
</template>

<i18n>
{
  "en": {
    "authFor": "Auth for {socNetwork}",
    "proccess": "Authorize the social network..."
  },
  "ru": {
    "authFor": "Авторизация для {socNetwork}",
    "proccess": "Авторизируем соцсеть..."
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "CommonRegisterAccounLink",

  data() {
    return {
      response: ""
    };
  },

  computed: {
    socNetwork(): string {
      return this.$route.params.accountName;
    }
  },

  async mounted() {
    try {
      const url = this.$route.fullPath || null;
      const type = this.$route.params.type || null;
      const resp = await this.setAccount(url);

      // console.log({ url, type, resp });

      if (type == "register") {
        if (resp) {
          this.$modal.show("register", {
            username: resp.username,
            email: resp.email,
            oauthId: resp.id
          });
        } else {
          this.$modal.show("register");
        }
      } else if (type == "login") {
        this.setUser(resp);
      }
      this.$router.replace({ name: "home" });
    } catch (errors) {
      this.response = "Ошибка авторизации:(";
      // console.log(errors)
    }
  },

  methods: {
    ...mapActions(["login", "setAccount", "setUser", "setBalance"])
  }
});
</script>
