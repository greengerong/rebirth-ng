import * as hljs from 'highlight.js';
import { Renderer2 } from '@angular/core';

export function highlightCodeBlock(renderer: Renderer2, code): string {
  if (code) {
    const elm = renderer.createElement('pre');
    renderer.setProperty(elm, 'innerText', code);
    hljs.highlightBlock(elm);
    return elm.innerHTML;
  }
}

export function fixTSModuleImport(code): string {
  return (code || '').replace(/\.\.\/\.\.\/exports(\/.*)?/, 'rebirth-ng');
}
