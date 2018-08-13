import { NgModule, ModuleWithProviders } from '@angular/core';
import { RebirthNGConfig } from './rebirth-ng.config';
import { COMMON_SERVICES } from './window-ref';
import { RebirthCommonModule, AssetsLoader, ComponentDeactivateGuard } from './common';
import { RebirthValidatorsModule } from './validators';
import { MenuBarModule } from './menu-bar';
// module import

@NgModule({
  imports: [
    RebirthCommonModule,
    RebirthValidatorsModule,
    MenuBarModule,
    // module declare
  ],
  exports: [
    RebirthCommonModule,
    RebirthValidatorsModule,
    MenuBarModule,
    // module declare
  ],
  declarations: [],
  providers: [],
})
export class RebirthNGModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: RebirthNGModule,
      providers: [
        ...COMMON_SERVICES,
        { provide: RebirthNGConfig, useClass: RebirthNGConfig },
        { provide: AssetsLoader, useClass: AssetsLoader },
        { provide: ComponentDeactivateGuard, useClass: ComponentDeactivateGuard }
      ]
    };
  }
}
