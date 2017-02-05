import {
  Component, OnInit, ChangeDetectionStrategy, Type, Input, ViewContainerRef,
  ComponentFactoryResolver, Injector, ComponentRef
} from '@angular/core';

@Component({
  selector: 're-doc-content',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocContentComponent {

  cmp: Type<any>;
  cmpRef: ComponentRef<any>;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }

  @Input() set component(cmp: Type<any>) {
    this.cmp = cmp;
    this.onComponentChange();
  }

  get component() {
    return this.cmp;
  }

  onComponentChange() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.cmp);
    this.cmpRef = this.viewContainerRef.createComponent(factory, this.viewContainerRef.length, this.injector);
  }

}
