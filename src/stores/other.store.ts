import { defineStore } from 'pinia';

interface SizesType {
  width: number;
  height: number;
}

interface State {
  windowSizes: SizesType;
}

const setWindowSizes = (self: any) => {
  self.windowSizes = { width: window.innerWidth, height: window.innerHeight };
};

export const useOtherStore = defineStore('other', {
  state: (): State => ({
    windowSizes: {} as SizesType
  }),

  getters: {
    windowWidth: (state: any) => state.windowSizes.width,
    windowheight: (state: any) => state.windowSizes.height
  },

  actions: {
    fetchWindowSizes() {
      setWindowSizes(this);

      window.addEventListener('resize', () => {
        setWindowSizes(this);
      });
    },

    destroyWindowSizes() {
      window.removeEventListener('resize', setWindowSizes);
    },
  }
});
