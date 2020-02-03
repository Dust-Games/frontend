export default {
  namespaced: false,

  state: {
    token: ""
  },

  getters: {
    isAuthenticated: state => !!state.token
  },

  mutations: {
    setToken: (state, token) => {
      state.token = token;
    }
  },

  actions: {
    async login({ commit }, user) {
      try {
        // let resp = await this.$axios.$post(
        //   "http://18.222.253.172/auth/login",
        //   user
        // );
        // const token = resp;

        const token = "123456";

        localStorage.setItem("user-token", token);
        commit("setToken", token);

        // dispatch(USER_REQUEST);
      } catch (err) {
        localStorage.removeItem("user-token");
      }
    },

    async logout() {
      try {
        localStorage.removeItem("user-token");
      } catch (err) {
        console.log(err);
      }
    }
  }
};