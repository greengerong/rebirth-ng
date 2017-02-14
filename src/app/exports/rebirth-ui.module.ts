import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { DialogService, DialogModule } from './dialog';
import { PagerModule } from './pager';
import { RebirthUIConfig } from './rebirth-ui.config';
import { PaginationModule } from './pagination';
import { COMMON_SERVICES } from './window-ref';
import { AlertBoxModule } from './alert-box';
import { BadgeModule } from './badge';
import { PanelModule } from './panel';
import { AccordionModule } from './accordion';
import { ActionButtonModule } from './action-button';
import { RatingModule } from './rating';
import { TabsModule } from './tabs';
import { TooltipModule } from './tooltip';
import { PositionService } from './position';
import { PopoverModule } from './popover';
import { DatePickerModule } from './date-picker';
import { BreadcrumbsModule } from './breadcrumbs';
import { ProgressBarModule } from './progress-bar/progress-bar.module';


@NgModule({
  imports: [
    ModalModule,
    DialogModule,
    PagerModule,
    PaginationModule,
    AlertBoxModule,
    BadgeModule,
    PanelModule,
    AccordionModule,
    ActionButtonModule,
    RatingModule,
    TabsModule,
    TooltipModule,
    PopoverModule,
    DatePickerModule,
    BreadcrumbsModule,
    ProgressBarModule
  ],
  exports: [
    ModalModule,
    DialogModule,
    PagerModule,
    PaginationModule,
    AlertBoxModule,
    BadgeModule,
    PanelModule,
    AccordionModule,
    ActionButtonModule,
    RatingModule,
    TabsModule,
    TooltipModule,
    PopoverModule,
    DatePickerModule,
    BreadcrumbsModule,
    ProgressBarModule
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
        { provide: RebirthUIConfig, useClass: RebirthUIConfig },
        // { provide: RebirthUIConfig, useClass: ZHCNRebirthUIConfig },
        { provide: ModalService, useClass: ModalService },
        { provide: DialogService, useClass: DialogService },
        { provide: PositionService, useClass: PositionService }
      ]
    };
  }
}
