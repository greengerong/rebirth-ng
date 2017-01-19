import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { DialogService, DialogModule } from './dialog';
import { PagerModule } from './pager';
import { RebirthUIConfig } from './rebirth-ui.config';
import { PaginationModule } from './pagination';
import { COMMON_SERVICES } from './window-ref';
import { AlertBoxModule } from './alert-box';


@NgModule({
  imports: [
    ModalModule,
    DialogModule,
    PagerModule,
    PaginationModule,
    AlertBoxModule
  ],
  exports: [
    ModalModule,
    DialogModule,
    PagerModule,
    PaginationModule,
    AlertBoxModule
  ],
  declarations: [],
  providers: [],
})
export class RebirthUIModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: RebirthUIModule,
      providers: [
        ...COMMON_SERVICES,
        RebirthUIConfig,
        ModalService,
        DialogService
      ]
    };
  }
}
