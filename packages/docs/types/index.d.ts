export type NavigationItem = {
  label: string;
  link?: string;
  children?: Array<NavigationItem>;
  highlight?: boolean;
};

export type Navigation = Array<NavigationItem>;
