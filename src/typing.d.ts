declare module 'highlight.js' {
  export function getLanguage(lang: string): string;

  export function highlight(lang: string, code: string): any;
}
