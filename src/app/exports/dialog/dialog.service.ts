import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalService } from '../modal/modal.service';
import { DialogOptions } from './dialog-options.model';
import { AlertDialogComponent } from './alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DialogService {

  constructor(private  modalService: ModalService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private domSanitizer: DomSanitizer) {

  }

  alert<T>(dialogOptions: DialogOptions): Observable<T> {
    if (dialogOptions.content && dialogOptions.html && (typeof dialogOptions.content === 'string')) {
      dialogOptions.content = this.domSanitizer.bypassSecurityTrustHtml(dialogOptions.content as string);
    }

    return this.modalService.open({
      component: AlertDialogComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: dialogOptions,
      modalClass: dialogOptions.cssClass,
      injector: dialogOptions.injector,
      rootContainer: dialogOptions.rootContainer,
      backdrop: dialogOptions.backdrop,
      backdropClass: dialogOptions.backdropClass,
      modal: dialogOptions.modal,
      keyboard: dialogOptions.keyboard,

    });
  }

  confirm<T>(dialogOptions: DialogOptions): Observable<T> {
    if (dialogOptions.content && dialogOptions.html && (typeof dialogOptions.content === 'string')) {
      dialogOptions.content = this.domSanitizer.bypassSecurityTrustHtml(dialogOptions.content as string);
    }
    return this.modalService.open({
      component: ConfirmDialogComponent,
      componentFactoryResolver: this.componentFactoryResolver,
      resolve: dialogOptions,
      modalClass: dialogOptions.cssClass,
      injector: dialogOptions.injector,
      rootContainer: dialogOptions.rootContainer,
      backdrop: dialogOptions.backdrop,
      backdropClass: dialogOptions.backdropClass,
      modal: dialogOptions.modal,
      keyboard: dialogOptions.keyboard,
    });
  }
}
