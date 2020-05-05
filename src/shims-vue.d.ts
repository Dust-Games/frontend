declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "raw-loader!*";

// declare module "vue/types/vue" {
//   interface Vue {
//     $notify: any;
//   }

//   interface VueConstructor {
//     $notify: any;
//     $t: any;
//   }
// }

// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     t?: any;
//   }
// }

declare module "*";
