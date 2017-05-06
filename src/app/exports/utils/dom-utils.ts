import { ElementRef, Renderer2 } from '@angular/core';
import { WindowRef } from '../window-ref';
import { DocumentRef } from '../window-ref/document-ref.service';

export function centerWindowPosition(elementRef: ElementRef, windowRef: WindowRef): { top?: number, left?: number } {
  if (!elementRef.nativeElement || !elementRef.nativeElement.getBoundingClientRect) {
    return {};
  }

  const rect = elementRef.nativeElement.getBoundingClientRect();
  const elmHeight = rect.height;
  const elmWidth = rect.width;
  const winHeight = windowRef.innerHeight;
  const winWidth = windowRef.innerWidth;

  return {
    left: ( winWidth - elmWidth) / 2,
    top: ( winHeight - elmHeight) / 2
  };
}

export function stopPropagationIfExist($event?: Event) {
  if ($event) {
    $event.stopPropagation();
  }
}

export function readFileAsDataURL(file) {
  return new Promise<any>((resolve) => {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        resolve(this.result);
      }, false);

      return reader.readAsDataURL(file);
    }

    resolve(null);
  });
}


export function getScrollBarWidth(renderer: Renderer2, documentRef: DocumentRef) {
  const outer = renderer.createElement('div');
  renderer.setStyle(outer, 'visibility', 'hidden');
  renderer.setStyle(outer, 'width', '100px');
  renderer.setStyle(outer, 'msOverflowStyle', 'scrollbar');

  const body = documentRef.body;
  renderer.appendChild(body, outer);

  const widthNoScroll = outer.offsetWidth;
  renderer.setStyle(outer, 'overflow', 'scroll');
  const inner = renderer.createElement('div');
  renderer.setStyle(inner, 'width', '100%');

  renderer.appendChild(outer, inner);

  const widthWithScroll = inner.offsetWidth;
  renderer.removeChild(body, outer);
  return widthNoScroll - widthWithScroll;
}


