import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalService } from '../modal/modal.service';
import { DialogOptions } from './dialog-options.model';
import { AlertDialogComponent } from './alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class DialogService {

  constructor(private  modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  alert<T>(dialogOptions: DialogOptions): Observable<T> {
    return this.modalService.open({
      component: AlertDialogComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: dialogOptions,
      modalClass: dialogOptions.cssClass,
      injector: dialogOptions.injector,
      rootContainer: dialogOptions.rootContainer,
    });
  }

  confirm<T>(dialogOptions: DialogOptions): Observable<T> {
    return this.modalService.open({
      component: ConfirmDialogComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: dialogOptions,
      modalClass: dialogOptions.cssClass,
      injector: dialogOptions.injector,
      rootContainer: dialogOptions.rootContainer,
    });
  }
}
