import { ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

export const SCALE_ANIMATIONS = [
  trigger('state', [
    state('void', style({ transform: 'scale(0)' })),
    state('initial', style({ transform: 'scale(0)' })),
    state('visible', style({ transform: 'scale(1)' })),
    state('hidden', style({ transform: 'scale(0)' })),
    transition('* => visible', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    transition('* => hidden', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
  ])
];
