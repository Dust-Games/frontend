import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.store";
import other from "./other.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, other }
});
