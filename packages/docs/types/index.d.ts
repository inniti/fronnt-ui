type LabelNavigationItem = {
  label: string;
  children: LinkNavigationItem[];
  highlight?: boolean;
};

type LinkNavigationItem = {
  label: string;
  link: string;
  children?: LinkNavigationItem[];
  highlight?: boolean;
};

export type NavigationItem = LabelNavigationItem | LinkNavigationItem;
