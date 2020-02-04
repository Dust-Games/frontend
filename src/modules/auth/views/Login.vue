<template>
  <div class="login">
    <h1 class="login__title">
      Входим в учетную запись...
    </h1>
    <!-- <p style="margin: 40px">{{ data }}</p> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export interface User {
  "openid.ns": string;
  "openid.mode": string;
  "openid.op_endpoint": string;
  "openid.claimed_id": string;
  "openid.identity": string;
  "openid.return_to": string;
  "openid.response_nonce": string;
  "openid.assoc_handle": string;
  "openid.signed": string;
  "openid.sig": string;
}

export default Vue.extend({
  name: "Login",

  components: {
    // Input: () => import('@/ui-components/Input.vue'),
  },

  // data() {
  //   return {
  //     data: {} as User
  //   };
  // },

  // E19EF7B0753F2BDC5BD5DAB5896C4D13

  async mounted() {
    console.log(this.$route.query);
    // let a = https://api.steampowered.com/ISteamUserAuth/AuthenticateUser/v1/?key=E19EF7B0753F2BDC5BD5DAB5896C4D13&steamid=76561198230835940
    await this.login({ token: this.$route.query["openid.sig"] });
    this.$router.push("/");
  },

  methods: {
    ...mapActions(["login"])
  }
});
</script>

<style lang="scss" scoped>
.login {
  color: $white;
}
</style>
