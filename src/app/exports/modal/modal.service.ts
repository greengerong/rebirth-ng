import { Injectable, Injector, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalOptions } from './modal-options.model';
import { RebirthConfig } from '../rebirth-ui.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ModalService {
  private instanceCount = 0;

  constructor(private rebirthConfig: RebirthConfig, private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }


  show<T>(options: ModalOptions): Observable<T> {
    const rootContainer = options.rootContainer || this.rebirthConfig.rootContainer;
    if (!rootContainer) {
      throw new Error('Should setup ViewContainerRef on modal options or rebirth config service!');
    }
    this.instanceCount++;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const injector = options.injector || this.injector;
    const modalRef = rootContainer.createComponent(componentFactory, rootContainer.length, injector);
    const instance: ModalComponent = modalRef.instance;
    instance.instanceCount = this.instanceCount;
    const result = instance.addContent(options)
      .do(() => this.hide(modalRef))
      .catch((error) => {
        this.hide(modalRef);
        return _throw(error);
      });
    instance.open();
    return result;
  }

  private hide(modalRef: ComponentRef<ModalComponent>): void {
    modalRef.instance.close();
    modalRef.destroy();
    this.instanceCount--;
  }
}
