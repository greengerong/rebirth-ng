import * as dateParse from 'date-fns/parse';
import * as isDate from 'date-fns/is_date';
import * as dateformat from 'date-fns/format';

export interface DateConverter {
  parse(date: any, pattern?: string, locale?: string): Date ;
  format(date: Date, pattern?: string, locale?: string): string ;
}

export class DefaultDateConverter implements DateConverter {

  static isValidDate(date: Date): boolean {
    return isDate(date) && !isNaN(date.getTime());
  }

  parse(date: any, pattern?: string, locale?: string): Date {
    if (isDate(date)) {
      return date;
    }
    const parseDate = dateParse(date);
    return DefaultDateConverter.isValidDate(parseDate) ? parseDate : null;
  }

  format(date: Date, pattern?: string, locale?: string): string {
    return DefaultDateConverter.isValidDate(date) ? dateformat(date, pattern) : '';
  }


}
