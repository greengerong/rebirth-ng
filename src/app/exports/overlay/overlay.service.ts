import { ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { OverlayComponent } from './overlay.component';
import { OverlayOptions } from './overlay-options.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class OverlayService {

  private overlayRef: ComponentRef<OverlayComponent>;
  private overlayCount = 0;

  constructor(private rebirthNGConfig: RebirthNGConfig, private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector, private domSanitizer: DomSanitizer) {
  }

  open(options: OverlayOptions): void {
    if (!this.overlayCount++) {
      this.createOverlay(options);
    }
  }

  private createOverlay(options: OverlayOptions) {
    const rootContainer = options.rootContainer || this.rebirthNGConfig.rootContainer;
    if (!rootContainer) {
      throw new Error('Should setup ViewContainerRef on modal overlay or rebirth config service!');
    }

    if (options.html && (typeof options.html === 'string')) {
      options.html = this.domSanitizer.bypassSecurityTrustHtml(options.html as string);
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);
    const injector = options.injector || this.injector;
    this.overlayRef = rootContainer.createComponent(componentFactory, rootContainer.length, injector);
    const cmp = this.overlayRef.instance;
    cmp.addContent(options);
  }

  close(): void {
    this.overlayCount = this.overlayCount > 0 ? this.overlayCount - 1 : 0;
    if (this.overlayCount < 1 && this.overlayRef) {
      this.overlayRef.destroy();
    }
  }
}
