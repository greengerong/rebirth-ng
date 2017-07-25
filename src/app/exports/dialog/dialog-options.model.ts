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
  backdrop?: boolean;
  backdropClass?: string;
  keyboard?: boolean;
  modal?: boolean;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  rootContainer?: ViewContainerRef;
}
