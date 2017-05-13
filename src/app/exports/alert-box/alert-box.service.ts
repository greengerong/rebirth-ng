import { Injectable, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { AlertBoxPanelComponent } from './alert-box-panel.component';
import { AlertBoxModel } from './alert-box.model';

@Injectable()
export class AlertBoxService {

  private panelRef: ComponentRef<AlertBoxPanelComponent>;

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  show(alertModel: AlertBoxModel, duration?: number) {
    if (!this.panelRef) {
      const rootContainer = this.rebirthNGConfig.rootContainer;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertBoxPanelComponent);
      this.panelRef = rootContainer .createComponent(componentFactory, rootContainer.length);
    }

    this.panelRef.instance.alerts = [...this.panelRef.instance.alerts, alertModel];
    if (duration) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.close(alertModel);
      }, duration);
    }
  }

  close(alertModel: AlertBoxModel) {
    this.panelRef.instance.alerts = this.panelRef.instance.alerts.filter((alert) => alert !== alertModel);
    this.panelRef.changeDetectorRef.markForCheck();
  }

  closeAll() {
    this.panelRef.instance.alerts = [];
    this.panelRef.changeDetectorRef.markForCheck();
  }
}
