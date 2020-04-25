<template>
  <div>{{ response || $t("proccess") }}</div>
</template>

<i18n>
{
  "en": {
    "proccess": "Authorize the social network..."
  },
  "ru": {
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

  async mounted() {
    try {
      console.log(this.$route.params);
      const url = this.$route.fullPath || null;
      const type = this.$route.params.type || null;
      const resp = await this.setAccount(url);

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
