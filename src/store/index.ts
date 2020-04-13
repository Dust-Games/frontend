import Vue from "vue";
import Vuex from "vuex";

import Auth from "./auth.store.ts";
import User from "./user.store.ts";
import Wallet from "./wallet.store.ts";
import Other from "./other.store.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Auth, User, Wallet, Other }
});
