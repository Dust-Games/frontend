export default {
  state: {
    user: {
      profile: { nickname: "", notifications: 0 }
    }
  },

  getters: {
    // пользователь (вместе с профилем)
    user: state => state.user,
    // только профиль пользователя
    profile: state => state.user.profile
  },

  mutations: {
    setUser(state, val) {
      state.user = val;
    }
  },

  actions: {
    getUser({ commit }) {
      try {
        const user = { profile: { nickname: "Nagibator", notifications: 1 } };

        commit("setUser", user);
      } catch (e) {
        // console.log(e);
      }
    },

    setUser({ dispatch, commit }, user) {
      try {
        // axios.post("/user/1", user)
        commit("setUser", user);

        dispatch("getUser");
      } catch (e) {
        // console.log(e);
      }
    }
  }
};