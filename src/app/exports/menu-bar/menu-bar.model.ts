export interface MenuItem {
  id?: string | number;
  text?: string;
  icon?: string;
  url?: string;
  router?: any[];
  handler?: (item: MenuItem) => void;
  target?: '_blank' | '_self' | '_parent' | '_top' | any;
  divider?: boolean;
  header?: boolean;
  cssClass?: string;
  children?: MenuItem[];
}

export interface MenuBar {
  logo?: string;
  title: string;
  home: string;
  menus: MenuItem[];
  rightMenus?: MenuItem[];
}
