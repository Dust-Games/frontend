export default {
  // namespaced: false,
  state: {
    // isInDevelopment: false as boolean, // не используется
    // rerender: 0 as number, // не используется
    isMobileMenuOpen: false as boolean
  },
  getters: {
    // isInDevelopment: state => state.isInDevelopment,
    // rerender: state => state.rerender
    isMobileMenuOpen: (state: any) => state.isMobileMenuOpen
  },
  mutations: {
    setIsMobileMenuOpen(state: any, isOpen: boolean) {
      state.isMobileMenuOpen = isOpen;
    }
    // setIsInDevelopment(state, value: boolean) {
    //   state.isInDevelopment = value;
    // },
    // rerenderAll(state) {
    //   state.rerender++;
    // }
  },
  actions: {
    setIsMobileMenuOpen({ commit }: any, isOpen: boolean) {
      commit("setIsMobileMenuOpen", isOpen);
    }
    // setIsInDevelopment({ commit }, value: boolean) {
    //   commit("setIsInDevelopment", value);
    // },
    // rerenderAll({ commit }) {
    //   commit("rerenderAll");
    // }
  }
};
