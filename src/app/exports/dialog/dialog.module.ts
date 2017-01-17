import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './alert-dialog.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    AlertDialogComponent
  ],
  providers: [],
  entryComponents: [
    AlertDialogComponent
  ]
})
export class DialogModule {
}
