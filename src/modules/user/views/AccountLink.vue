<template>
  <DefaultLayout>
    <template #title>{{ $t("authFor", { socNetwork }) }}</template>

    <div class="account-link">
      <p>{{ response || $t("proccess") }}</p>
    </div>
  </DefaultLayout>
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
import { Vue } from "@/main";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "CommonRegisterAccounLink",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
  },

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

      switch (type) {
        // Если юзер пытался зарегаться
        case "register":
          if (resp) {
            this.$modal.show("register", {
              username: resp.username,
              email: resp.email,
              oauthId: resp.id
            });
          } else {
            this.$modal.show("register");
          }
          break;
        // Если юзер пытался войти
        case "login":
          // Если ответ говорит ему - надо регаться
          if (resp.action == "register") {
            // Посылаем сообщение с объяснениями
            this.$notify[resp.status](resp.statusText, { timeout: 6000 });
            // Перенаправляем на регистрацию
            this.$modal.show("register", {
              username: resp.data.username,
              email: resp.data.email,
              oauthId: resp.data.id
            });
          } else {
            this.setUser(resp);
          }
          break;
        default:
          break;
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
