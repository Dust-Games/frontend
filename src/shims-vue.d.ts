declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "raw-loader!*";

declare module "*";

// declare module "vue/types/vue" {
//   interface VueConstructor {
//     $t: any;
//   }
// }
// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     t?: any;
//   }
// }
