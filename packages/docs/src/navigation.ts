import type {
  LabelNavigationItem,
  LinkNavigationItem,
} from "../types";

const components: LabelNavigationItem[] = [
  {
    label: "Base",
    children: [
      { link: "/components/buttons/", label: "Buttons" },
      { link: "/components/links/", label: "Links" },
    ],
  },
];

const topbar: LinkNavigationItem[] = [
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
