export interface Breadcrumb {
  text: string;
  icon?: string;
  url?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | any;
  data?: any;
  handle?: (item: Breadcrumb) => void;
}
