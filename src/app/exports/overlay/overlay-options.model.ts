import { Type, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';

export interface OverlayOptions {
  component?: Type<any>;
  html?: string;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  backdropClass?: string;
  rootContainer?: ViewContainerRef;
}
