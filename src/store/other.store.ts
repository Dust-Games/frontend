export default {
  state: {
    isMobileMenuOpen: false as boolean
  },
  getters: {
    isMobileMenuOpen: (state: any) => state.isMobileMenuOpen
  },
  mutations: {
    setIsMobileMenuOpen(state: any, isOpen: boolean) {
      state.isMobileMenuOpen = isOpen;
    }
  },
  actions: {
    setIsMobileMenuOpen({ commit }: any, isOpen: boolean) {
      commit("setIsMobileMenuOpen", isOpen);
    }
  }
};
