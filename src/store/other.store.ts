interface SizesType {
  width: number;
  height: number;
}

const setWindowSizes = (commit: any) => {
  commit("setWindowSizes", { width: window.innerWidth, height: window.innerHeight });
};

export default {
  state: {
    windowSizes: {} as SizesType
  },

  getters: {
    windowWidth: (state: any) => state.windowSizes.width,
    windowheight: (state: any) => state.windowSizes.height
  },

  mutations: {
    setWindowSizes(state: any, newSizes: SizesType) {
      state.windowSizes = newSizes;
    }
  },

  actions: {
    fetchWindowSizes({ commit }: any) {
      setWindowSizes(commit);

      window.addEventListener("resize", () => {
        setWindowSizes(commit);
      });
    },

    destroyWindowSizes({ commit }: any) {
      window.removeEventListener("resize", setWindowSizes);
    }
  }
};
