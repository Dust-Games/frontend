import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setIsInDevelopment", "logout"]),

    showInDevelopment() {
      this.setIsInDevelopment(true);
    },

    onToWallet() {
      this.$router.push("/user/wallet");
    },

    onLogout() {
      this.logout();
    }
  }
};