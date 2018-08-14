export interface TreeViewModel {
  id: string | number;
  name: string;
  icon?: string;
  children?: TreeViewModel[];
}
