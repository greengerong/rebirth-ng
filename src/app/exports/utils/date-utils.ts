import * as isDate from 'date-fns/is_date';
import * as dateParse from 'date-fns/parse';
import * as dateFormat from 'date-fns/format';

export function isValidDate(date: Date): boolean {
  return isDate(date) && !isNaN(date.getTime());
}

export function parseDate(date: any): Date {
  if (!date) {
    return null;
  }

  if (isDate(date)) {
    return date;
  }
  const parsedDate = dateParse(date);
  return isValidDate(parsedDate) ? parsedDate : null;
}

export function formatDate(date: Date, pattern = 'YYYY-MM-DD HH:mm:ss'): string {
  return isValidDate(date) ? dateFormat(date, pattern) : '';
}
