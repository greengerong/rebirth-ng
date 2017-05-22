import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { DialogService, DialogModule } from './dialog';
import { PagerModule } from './pager';
import { RebirthNGConfig } from './rebirth-ng.config';
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
import { ProgressBarModule } from './progress-bar';
import { SelectButtonModule } from './select-button';
import { OverlayModule, OverlayService } from './overlay';
import { CarouselModule } from './carousel';
import { SwitchModule } from './switch/switch.module';
import { MenuBarModule } from './menu-bar/menu-bar.module';
import { AutoCompleteModule } from './auto-complete';
import { FlowStepModule } from './flow-step';
import { InfiniteScrollModule } from './infinite-scroll';
import { RebirthCommonModule, AssetsLoader } from './common';
import { DraggableModule } from './draggable';
import { FileUploadModule } from './file-upload';
import { TimePickerModule } from './time-picker';
import { RadioGroupModule } from './radio-group';
import { CheckboxGroupModule } from './checkbox-group';
import { RebirthValidatorsModule } from './validators';
import { NotifyModule, NotifyService } from './notify';
import { TreeViewModule, TreeViewService } from './tree-view';


@NgModule({
  imports: [
    RebirthCommonModule,
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
    ProgressBarModule,
    SelectButtonModule,
    OverlayModule,
    CarouselModule,
    SwitchModule,
    MenuBarModule,
    AutoCompleteModule,
    FlowStepModule,
    InfiniteScrollModule,
    FileUploadModule,
    TimePickerModule,
    RadioGroupModule,
    CheckboxGroupModule,
    RebirthValidatorsModule,
    NotifyModule,
    TreeViewModule
  ],
  exports: [
    RebirthCommonModule,
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
    ProgressBarModule,
    SelectButtonModule,
    OverlayModule,
    CarouselModule,
    SwitchModule,
    MenuBarModule,
    AutoCompleteModule,
    FlowStepModule,
    InfiniteScrollModule,
    DraggableModule,
    FileUploadModule,
    TimePickerModule,
    RadioGroupModule,
    CheckboxGroupModule,
    RebirthValidatorsModule,
    NotifyModule,
    TreeViewModule
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
        { provide: ModalService, useClass: ModalService },
        { provide: DialogService, useClass: DialogService },
        { provide: PositionService, useClass: PositionService },
        { provide: OverlayService, useClass: OverlayService },
        { provide: AssetsLoader, useClass: AssetsLoader },
        { provide: NotifyService, useClass: NotifyService },
        { provide: TreeViewService, useClass: TreeViewService }
      ]
    };
  }
}
