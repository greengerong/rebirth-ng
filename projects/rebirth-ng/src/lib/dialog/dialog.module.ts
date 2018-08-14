import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertDialogComponent } from './alert-dialog.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { RebirthCommonModule } from '../common/index';
import { PromptDialogComponent } from './prompt-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RebirthCommonModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    PromptDialogComponent
  ],
  providers: [],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    PromptDialogComponent
  ]
})
export class DialogModule {
}
