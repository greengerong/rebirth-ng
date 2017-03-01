import { ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';
import { OverlayComponent } from './overlay.component';
import { OverlayOptions } from './overlay-options.model';

@Injectable()
export class OverlayService {

  private overlayRef: ComponentRef<OverlayComponent>;
  private overlayCount = 0;

  constructor(private rebirthUIConfig: RebirthUIConfig, private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }

  open(options: OverlayOptions): void {
    if (!this.overlayCount++) {
      this.createOverlay(options);
    }
  }

  private createOverlay(options: OverlayOptions) {
    const rootContainer = options.rootContainer || this.rebirthUIConfig.rootContainer;
    if (!rootContainer) {
      throw new Error('Should setup ViewContainerRef on modal overlay or rebirth config service!');
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);
    const injector = options.injector || this.injector;
    this.overlayRef = rootContainer.createComponent(componentFactory, rootContainer.length, injector);
    const cmp = this.overlayRef.instance;
    cmp.addContent(options);
  }

  close(): void {
    this.overlayCount--;
    if (this.overlayCount < 1 && this.overlayRef) {
      this.overlayRef.destroy();
    }
  }
}
