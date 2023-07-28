import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx()],
  vite: {
    ssr: {
      noExternal: ["@fronnt/styles"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
    },
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["heading-link"],
          },
          // content: {
          //   type: "element",
          //   tagName: "span",
          //   properties: {
          //     className: ["heading-icon"],
          //   },
          //   children: [],
          // },
          content: { type: "comment", value: "" },
        },
      ],
    ],
  },
});
