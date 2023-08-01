/// <reference types="vite/client" />
/// <reference types="@histoire/plugin-vue/components" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    NonNullable<unknown>,
    NonNullable<unknown>,
    unknown
  >;
  export default component;
}
