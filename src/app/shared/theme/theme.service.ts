import { Injectable, Renderer2, ElementRef } from '@angular/core';

@Injectable()
export class ThemeService {
  static THEME_KEY = 'rebirth-ng:theme';

  setupTheme(theme: string, renderer: Renderer2, parentElementRef: ElementRef) {
    theme = theme || localStorage.getItem(ThemeService.THEME_KEY);
    if (theme) {
      const link = renderer.createElement('link');
      link.rel = 'stylesheet';
      link.href = `./assets/themes/bootstrap.${theme.toLowerCase()}.css`;
      renderer.appendChild(parentElementRef.nativeElement, link);
      localStorage.setItem(ThemeService.THEME_KEY, theme);
    }
  }
}
