import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { RebirthUIConfig } from './rebirth-ui.config';


@NgModule({
  imports: [
    ModalModule
  ],
  exports: [
    ModalModule
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
        ModalService
      ]
    };
  }
}
