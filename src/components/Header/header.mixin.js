import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["balance", "profile", "isAuthenticated"])
  },

  methods: {
    ...mapActions(["setIsInDevelopment", "login", "logout"]),

    showInDevelopment() {
      this.setIsInDevelopment(true);
    },

    onToWallet() {
      this.$router.push("/user/wallet");
    },

    onLogin() {
      this.login();
    },

    onLogout() {
      this.logout();
    }
  }
};
