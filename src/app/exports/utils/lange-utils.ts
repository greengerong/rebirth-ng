export function formatFileSize(bytes: number): string {
  if (bytes == 0) {
    return '0 B';
  }
  const rate = 1000;
  const precision = 3;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const cover = Math.floor(Math.log(bytes) / Math.log(rate));

  return `${parseFloat((bytes / Math.pow(rate, cover)).toFixed(precision))} ${sizes[cover]}`;
}
