import { Injectable, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { NotifyComponent } from './notify.component';
import { NotifyModel } from './notify.model';

@Injectable()
export class NotifyService {

  private panelRef: ComponentRef<NotifyComponent>;

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  placement(placement: 'top' | 'top-right' | 'bottom' | 'bottom-right') {
    if (this.panelRef) {
      this.panelRef.instance.placement = placement;
    }
  }

  open(notify: NotifyModel, duration?: number) {
    if (!this.panelRef) {
      const rootContainer = this.rebirthNGConfig.rootContainer;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NotifyComponent);
      this.panelRef = rootContainer .createComponent(componentFactory, rootContainer.length);
    }

    this.panelRef.instance.notifies = [...this.panelRef.instance.notifies, notify];
    if (duration) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.close(notify);
      }, duration);
    }
  }

  close(alertModel: NotifyModel) {
    this.panelRef.instance.notifies = this.panelRef.instance.notifies.filter((alert) => alert !== alertModel);
    this.panelRef.changeDetectorRef.markForCheck();
  }

  closeAll() {
    this.panelRef.instance.notifies = [];
    this.panelRef.changeDetectorRef.markForCheck();
  }
}
