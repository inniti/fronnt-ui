import type { Navigation } from "../types";

export const components: Navigation = [
  {
    label: "Getting started",
    link: "/components/getting-started/",
  },
  {
    label: "Components",
    children: [
      { link: "/components/buttons/", label: "Buttons" },
      { link: "/components/navigation/", label: "Navigation" },
      { link: "/components/input-fields/", label: "Input Fields" },
    ],
  },
];

export const designSystem: Navigation = [
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

export const mainNav: Navigation = [
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
