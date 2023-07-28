type LabelNavigationItem = {
  label: string;
  children: LinkNavigationItem[];
};

type LinkNavigationItem = {
  label: string;
  link: string;
  children?: LinkNavigationItem[];
};

export type NavigationItem = LabelNavigationItem | LinkNavigationItem;
