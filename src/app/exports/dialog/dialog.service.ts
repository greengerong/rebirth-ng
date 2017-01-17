import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { ModalService } from '../modal/modal.service';
import { DialogOptions } from './dialog-options.model';
import { AlertDialogComponent } from './alert-dialog.component';

@Injectable()
export class DialogService {

  constructor(private  modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  alert<T>(dialogOptions: DialogOptions): Observable<T> {
    return this.modalService.open({
      component: AlertDialogComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: dialogOptions,
      modalClass: dialogOptions.cssClass
    });
  }
}
