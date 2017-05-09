import { ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';

export interface DialogOptions {
  title: string;
  content: string;
  html?: boolean;
  yes?: string;
  no?: string;
  icon?: string;
  cssClass?: string;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  rootContainer?: ViewContainerRef;
}
