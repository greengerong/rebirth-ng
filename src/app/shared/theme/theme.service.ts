import { Injectable, Renderer, ElementRef } from '@angular/core';

@Injectable()
export class ThemeService {
  static THEME_KEY = 'rebirth-ui:theme';

  setupTheme(theme: string, renderer: Renderer, parentElementRef: ElementRef) {
    theme = theme || localStorage.getItem(ThemeService.THEME_KEY);
    if (theme) {
      const link = renderer.createElement(parentElementRef.nativeElement, 'link');
      link.rel = 'stylesheet';
      link.href = `./assets/themes/bootstrap.${theme.toLowerCase()}.css`;
      localStorage.setItem(ThemeService.THEME_KEY, theme);
    }
  }
}
