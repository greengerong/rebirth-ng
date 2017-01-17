import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { DialogService, DialogModule } from './dialog';
import { RebirthUIConfig } from './rebirth-ui.config';


@NgModule({
  imports: [
    ModalModule,
    DialogModule
  ],
  exports: [
    ModalModule,
    DialogModule
  ],
  declarations: [],
  providers: [],
})
export class RebirthUIModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: RebirthUIModule,
      providers: [
        RebirthUIConfig,
        ModalService,
        DialogService
      ]
    };
  }
}
