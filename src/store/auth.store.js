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
    setToken({ commit }, token) {
      commit("setToken", token);
    },

    async login({ commit }, user) {
      try {
        // let resp = await this.$axios.$post(
        //   "http://18.222.253.172/auth/login",
        //   user
        // );
        // const token = resp;

        // const token = "123456";
        // console.log(user);

        localStorage.setItem("user-token", user.token);
        commit("setToken", user.token);

        // dispatch(USER_REQUEST);
      } catch (err) {
        localStorage.removeItem("user-token");
      }
    },

    logout({ commit }) {
      try {
        localStorage.removeItem("user-token");
        commit("setToken", "");
      } catch (err) {
        // console.log(err);
      }
    }
  }
};