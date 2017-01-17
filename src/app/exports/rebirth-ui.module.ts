import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { DialogService, DialogModule } from './dialog';
import { PagerModule } from './pager';
import { RebirthUIConfig } from './rebirth-ui.config';


@NgModule({
  imports: [
    ModalModule,
    DialogModule,
    PagerModule
  ],
  exports: [
    ModalModule,
    DialogModule,
    PagerModule
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
