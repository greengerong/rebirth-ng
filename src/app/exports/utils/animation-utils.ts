import { ElementRef, Renderer2 } from '@angular/core';

const TRANSITION_END_EVENT = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend',
  transition: 'transitionend'
};

function getSupportTransitionEndEvent(elementRef: ElementRef) {
  for (const name in TRANSITION_END_EVENT) {
    if (elementRef.nativeElement && elementRef.nativeElement.style[name] !== undefined) {
      return TRANSITION_END_EVENT[name];
    }
  }
}

export function animation(renderer: Renderer2, elementRef: ElementRef, duration = 0): Promise<any> {
  const endEvent = getSupportTransitionEndEvent(elementRef);
  return new Promise((resolve) => {
    if (endEvent) {
      const listen = renderer.listen(elementRef.nativeElement, endEvent, function () {
        listen();
        resolve();
      });
    }

    const timeout = setTimeout(() => {
      resolve();
      clearTimeout(timeout);
    }, duration);

  });
}

export function animationTimeout(duration = 0) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve();
      clearTimeout(timeout);
    }, duration);
  });
}
