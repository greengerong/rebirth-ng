import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './alert-dialog.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { RebirthCommonModule } from '../common';


@NgModule({
  imports: [
    CommonModule,
    RebirthCommonModule
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
