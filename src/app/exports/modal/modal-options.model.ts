import { Type, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';

export interface ModalOptions {
  component: Type<any>;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  resolve?: any;
  backdrop?: boolean;
  backdropClass?: string;
  keyboard?: boolean;
  modal?: boolean;
  modalClass?: string;
  animation?: boolean;
  size?: 'lg' | 'sm';
  rootContainer?: ViewContainerRef;

}
