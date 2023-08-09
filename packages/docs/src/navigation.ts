import type { LabelNavigationItem, LinkNavigationItem } from "../types";

export const components: LabelNavigationItem[] = [
  {
    label: "Base",
    children: [
      { link: "/components/buttons/", label: "Buttons" },
      { link: "/components/links/", label: "Links" },
    ],
  },
];

export const designSystem: LabelNavigationItem[] = [
  {
    label: "Design System",
    children: [
      { link: "/design-system/colors/", label: "Colors" },
      { link: "/design-system/typography/", label: "Typography" },
      { link: "/design-system/tokens/", label: "Tokens" },
    ],
  },
];

export const topbar: LinkNavigationItem[] = [
  {
    label: "Design System",
    link: "/design-system/",
  },
  {
    label: "Components",
    link: "/components/buttons",
  },
  {
    label: "Pro",
    link: "/pro/",
    highlight: true,
  },
];
