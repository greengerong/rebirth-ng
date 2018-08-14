import { Injectable, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { NotifyComponent } from './notify.component';
import { NotifyModel } from './notify.model';

@Injectable()
export class NotifyService {

  private panelRef: ComponentRef<NotifyComponent>;
  private _placement: 'top' | 'top-right' | 'bottom' | 'bottom-right'| 'center';

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  placement(placement: 'top' | 'top-right' | 'bottom' | 'bottom-right'| 'center') {
    if (this.panelRef) {
      this.panelRef.instance.placement = placement || 'top-right';
    }
    this._placement = placement;
  }

  open(notify: NotifyModel, duration?: number) {
    if (!this.panelRef) {
      const rootContainer = this.rebirthNGConfig.rootContainer;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NotifyComponent);
      this.panelRef = rootContainer .createComponent(componentFactory, rootContainer.length);
      if (this.placement) {
        this.panelRef.instance.placement = this._placement;
      }
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
