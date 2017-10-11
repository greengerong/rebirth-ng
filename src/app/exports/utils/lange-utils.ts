export function formatFileSize(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }
  const rate = 1000;
  const precision = 3;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const cover = Math.floor(Math.log(bytes) / Math.log(rate));

  return `${parseFloat((bytes / Math.pow(rate, cover)).toFixed(precision))} ${sizes[cover]}`;
}

export function formatString(input, ...args) {
  if (input) {
    return input.replace(/\{(\d+)\}/g, function (match, index) {
      return args[index];
    });
  }
}

export function deepValueGetter(obj: any, path: string) {
  if (!obj || !path) {
    return obj;
  }

  let current = obj;
  const split = path.split('.');
  if (split.length) {
    for (let i = 0; i < split.length; i++) {
      current = current[split[i]];
      // if found undefined, return empty string
      if (current === undefined || current === null) {
        return '';
      }
    }
  }
  return current;
}

export function isImmutableEmpty(array: any): boolean {
  return !array || !(array.length || array.size);
}

export const noop = () => null;
