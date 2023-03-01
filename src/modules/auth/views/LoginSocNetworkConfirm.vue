<template>
  <DefaultLayout>
    <template #title>{{ $t("Auth for {socNetwork}", { socNetworkName }) }}</template>

    <div class="account-link">
      <p>{{ response || $t("Authorize the social network") }}</p>
    </div>
  </DefaultLayout>
</template>

<i18n>
{
  "en": {
    "Auth for {socNetwork}": "Auth for {socNetwork}",
    "Authorize the social network": "Authorize the social network..."
  },
  "ru": {
    "Auth for {socNetwork}": "Авторизация для {socNetwork}",
    "Authorize the social network": "Авторизируем соцсеть..."
  }
}
</i18n>

<script lang="ts">
import { Vue } from "@/main";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "LoginSocNetworkConfirm",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
  },

  data() {
    return {
      response: ""
    };
  },

  computed: {
    socNetworkName(): string {
      return this.$route.params.socNetworkName;
    }
  },

  created() {
    window.addEventListener("beforeunload", async () => {
      try {
        const successUrl = this.$route.params.callback || null;
        await this.loginViaSocNetworkFinish(successUrl);

        this.$router.replace({ name: "home" });
      } catch (errors) {
        this.response = "Ошибка авторизации:(";
        // console.log(errors)
      }

      const bc = new BroadcastChannel("callback");
      bc.postMessage("callback-success");
    });
  },

  async mounted() {
    setTimeout(() => {
      window.close();
    }, 1000);
  },

  methods: {
    ...mapActions(["loginViaSocNetworkFinish"])
  }
});
</script>
