import { isDate, parse, format } from 'date-fns';

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
  const parsedDate = parse(date);
  return isValidDate(parsedDate) ? parsedDate : null;
}

export function formatDate(date: Date, pattern = 'YYYY-MM-DD HH:mm:ss'): string {
  return isValidDate(date) ? format(date, pattern) : '';
}
