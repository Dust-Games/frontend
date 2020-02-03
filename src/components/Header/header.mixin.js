import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["balance"])
  },

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
