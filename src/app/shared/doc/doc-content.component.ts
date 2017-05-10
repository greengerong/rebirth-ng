import {
  Component,
  Type,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 're-doc-content',
  template: ''
})
export class DocContentComponent implements OnDestroy {
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
    this.destroyCmp();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.cmp);
    this.cmpRef = this.viewContainerRef.createComponent(factory, this.viewContainerRef.length, this.injector);
    this.cmpRef.changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this.destroyCmp();
  }

  private destroyCmp() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
