export default {
  state: {
    token: "",
    status: ""
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
        let resp = await this.$axios.$post(
          "http://18.222.253.172/auth/login",
          user
        );
        console.log(resp);

        const token = resp;
        localStorage.setItem("user-token", token);

        commit("setToken", token);
        // you have your token, now log in your user :)
        // dispatch(USER_REQUEST);
        resolve(resp);
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