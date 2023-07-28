import type { NavigationItem } from "../types";

const components: NavigationItem[] = [
  {
    label: "Base",
    children: [
      { link: "/components/buttons/", label: "Buttons" },
      { link: "/components/links/", label: "Links" },
    ],
  },
];

const topbar: NavigationItem[] = [
  {
    label: "Design System",
    link: "/design-system/",
  },
  {
    label: "Components",
    link: "/components/buttons",
  },
];

export { components, topbar };
