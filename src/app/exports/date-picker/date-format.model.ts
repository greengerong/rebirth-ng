export interface DateFormat {
  parse(date: string, pattern: string): Date;
  format(date: Date, pattern: string): string;
}
