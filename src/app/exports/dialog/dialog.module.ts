import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './alert-dialog.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    AlertDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent
  ]
})
export class DialogModule {
}
