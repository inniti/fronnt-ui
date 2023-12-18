import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  vite: {
    server: {
      host: process.env.NODE_ENV === "development" ? "0.0.0.0" : undefined,
      fs: {
        // Allow serving files from one level up to the project root
        allow: ["../.."],
      },
    },
  },
  viteIgnorePlugins: ["vite:dts"],
  plugins: [HstVue()],
  setupFile: "./histoire.setup.ts",
  routerMode: "hash",
  theme: {
    title: "fronnt",
    logoHref: "https://fronnt.io",
    // logo: {
    //   square: './img/square.png',
    //   light: './img/light.png',
    //   dark: './img/dark.png'
    // },
    // favicon: './favicon.ico',
  },
  tree: {
    groups: [
      {
        id: "top",
        title: "", // No toggle
      },
    ],
    order: (a, b) => {
      return a.localeCompare(b);
    },
  },
  defaultStoryProps: {
    icon: "carbon:cube",
    iconColor: "#8478E3",
    layout: {
      type: "grid",
      width: 360,
    },
    responsiveDisabled: false,
    autoPropsDisabled: true,
  },
  backgroundPresets: [
    {
      label: "Transparent",
      color: "transparent",
      contrastColor: "#333",
    },
    {
      label: "White",
      color: "#fff",
      contrastColor: "#333",
    },
    {
      label: "Light gray",
      color: "#fafafa",
      contrastColor: "#eee",
    },
    {
      label: "Dark gray",
      color: "#666",
      contrastColor: "#ccc",
    },
  ],
});
