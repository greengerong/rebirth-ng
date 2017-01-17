import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { RebirthConfig } from './rebirth-ui.config';


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
        RebirthConfig,
        ModalService
      ]
    };
  }
}
