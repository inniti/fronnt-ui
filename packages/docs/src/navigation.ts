import type { LabelNavigationItem, LinkNavigationItem } from "../types";

export const components: LabelNavigationItem[] = [
  {
    label: "Getting started",
    link: "/components/getting-started/",
  },
  {
    label: "Components",
    children: [
      { link: "/components/buttons/", label: "Buttons" },
      { link: "/components/links/", label: "Links" },
    ],
  },
];

export const designSystem: LabelNavigationItem[] = [
  {
    label: "Design System",
    link: "/design-system/",
    children: [
      { link: "/design-system/colors/", label: "Colors" },
      { link: "/design-system/typography/", label: "Typography" },
      { link: "/design-system/spacing/", label: "Spacing" },
      { link: "/design-system/shadows/", label: "Shadows" },
    ],
  },
];

export const mainNav: LinkNavigationItem[] = [
  {
    label: "Design System",
    link: "/design-system/",
  },
  {
    label: "Components",
    link: "/components/",
  },
  {
    label: "Icons",
    link: "/icons/",
  },
  {
    label: "Pro",
    link: "/pro/",
    highlight: true,
  },
];
