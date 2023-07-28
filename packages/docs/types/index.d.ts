export type NavigationItem =
  | {
      label: string;
      children: NavigationItem[];
    }
  | {
      label: string;
      link: string;
      children?: NavigationItem[];
    };
