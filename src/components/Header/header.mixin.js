import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setIsInDevelopment"]),

    showInDevelopment() {
      this.setIsInDevelopment(true);
    },

    onToWallet() {
      this.$router.push("/user/wallet");
    }
  }
};