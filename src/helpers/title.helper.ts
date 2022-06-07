import i18n from "@/plugins/Translator.plugin";
import { Route } from "vue-router";

export const updateTitle = (route: Route) => {
  document.title = route.meta.title ? i18n.t(route.meta.title) + " | DUST" : "DUST";
  route.meta.pageTitle = route.meta.title ? i18n.t(route.meta.title) : "DUST";
};
