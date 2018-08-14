import {
  Component,
  ComponentRef,
  ViewContainerRef,
  Injector,
  OnDestroy,
  ComponentFactoryResolver
} from '@angular/core';
import { OverlayOptions } from './overlay-options.model';

@Component({
  selector: 're-overlay-content',
  template: '',
  exportAs: 'overlayContent'
})
export class OverlayContentComponent implements OnDestroy {

  contentRef: ComponentRef<any>;

  constructor(private contentContainer: ViewContainerRef, private  injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  addContent(options: OverlayOptions) {
    const componentFactoryResolver = options.componentFactoryResolver || this.componentFactoryResolver;
    const componentFactory = componentFactoryResolver.resolveComponentFactory(options.component);
    this.contentRef = this.contentContainer
      .createComponent(componentFactory, this.contentContainer.length, options.injector || this.injector);
  }

  ngOnDestroy(): void {
    if (this.contentRef) {
      this.contentRef.destroy();
    }
  }
}
