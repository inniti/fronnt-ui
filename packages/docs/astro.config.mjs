import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    ssr: {
      noExternal: ["@fronnt/styles"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker"
    },
  },
});
