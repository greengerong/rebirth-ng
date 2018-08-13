import { Type, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface OverlayOptions {
  component?: Type<any>;
  html?: string | SafeHtml;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  backdropClass?: string;
  rootContainer?: ViewContainerRef;
}
