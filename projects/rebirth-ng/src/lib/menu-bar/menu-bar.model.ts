import { TemplateRef } from '@angular/core';
export interface MenuItem {
  id?: string | number;
  text?: string;
  icon?: string;
  url?: string;
  router?: any[];
  queryParams?: any;
  handler?: (item: MenuItem) => void;
  itemTemplate?: TemplateRef<any>;
  target?: '_blank' | '_self' | '_parent' | '_top' | any;
  divider?: boolean;
  header?: boolean;
  cssClass?: string;
  children?: MenuItem[];
}

export interface MenuBar {
  logo?: string;
  title?: string;
  home?: string | any[];
  homeQueryParams?: any;
  menus?: MenuItem[];
  rightMenus?: MenuItem[];
}
