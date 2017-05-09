import { ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface DialogOptions {
  title: string;
  content: string | SafeHtml;
  html?: boolean;
  yes?: string;
  no?: string;
  icon?: string;
  cssClass?: string;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  rootContainer?: ViewContainerRef;
}
