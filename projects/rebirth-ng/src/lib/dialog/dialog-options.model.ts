import { ViewContainerRef, Injector, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ValidatorFn } from '@angular/forms';

export interface PromptContent {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  template?: TemplateRef<any>;
  validators?: { [key: string]: { validator: ValidatorFn, message: string } };
}

export interface DialogOptions {
  title: string;
  content: string | SafeHtml | PromptContent;
  html?: boolean;
  yes?: string;
  no?: string;
  icon?: string;
  cssClass?: string;
  backdrop?: boolean;
  backdropClass?: string;
  keyboard?: boolean;
  modal?: boolean;
  animation?: boolean;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  rootContainer?: ViewContainerRef;
}
