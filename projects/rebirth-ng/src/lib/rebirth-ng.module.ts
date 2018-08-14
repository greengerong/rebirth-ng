import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal/index';
import { DialogService, DialogModule } from './dialog/index';
import { PagerModule } from './pager/index';
import { RebirthNGConfig } from './rebirth-ng.config';
import { PaginationModule } from './pagination/index';
import { COMMON_SERVICES } from './window-ref/index';
import { AlertBoxModule } from './alert-box/index';
import { BadgeModule } from './badge/index';
import { PanelModule } from './panel/index';
import { AccordionModule } from './accordion/index';
import { ActionButtonModule } from './action-button/index';
import { RatingModule } from './rating/index';
import { TabsModule } from './tabs/index';
import { TooltipModule } from './tooltip/index';
import { PositionService } from './position/index';
import { PopoverModule } from './popover/index';
import { DatePickerModule } from './date-picker/index';
import { BreadcrumbsModule } from './breadcrumbs/index';
import { ProgressBarModule } from './progress-bar/index';
import { SelectButtonModule } from './select-button/index';
import { OverlayModule, OverlayService } from './overlay/index';
import { CarouselModule } from './carousel/index';
import { SwitchModule } from './switch/switch.module';
import { MenuBarModule } from './menu-bar/menu-bar.module';
import { AutoCompleteModule } from './auto-complete/index';
import { FlowStepModule } from './flow-step/index';
import { InfiniteScrollModule } from './infinite-scroll/index';
import { RebirthCommonModule, AssetsLoader, ComponentDeactivateGuard } from './common/index';
import { DraggableModule } from './draggable/index';
import { FileUploadModule } from './file-upload/index';
import { TimePickerModule } from './time-picker/index';
import { RadioGroupModule } from './radio-group/index';
import { CheckboxGroupModule } from './checkbox-group/index';
import { RebirthValidatorsModule } from './validators/index';
import { NotifyModule, NotifyService } from './notify/index';
import { TreeViewModule, TreeViewService } from './tree-view/index';
import { EllipsisModule } from './ellipsis/index';
import { TagsModule } from './tags/index';
import { ImageUploadModule } from './image-upload/index';
import { SelectModule } from './select/index';
import { SliderModule } from './slider/index';
// module import

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
    TreeViewModule,
    EllipsisModule,
    TagsModule,
    ImageUploadModule,
    SelectModule,
    SliderModule,
    // module declare
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
    TreeViewModule,
    EllipsisModule,
    TagsModule,
    ImageUploadModule,
    SelectModule,
    SliderModule,
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
        { provide: ModalService, useClass: ModalService },
        { provide: DialogService, useClass: DialogService },
        { provide: PositionService, useClass: PositionService },
        { provide: OverlayService, useClass: OverlayService },
        { provide: AssetsLoader, useClass: AssetsLoader },
        { provide: NotifyService, useClass: NotifyService },
        { provide: TreeViewService, useClass: TreeViewService },
        { provide: ComponentDeactivateGuard, useClass: ComponentDeactivateGuard }
      ]
    };
  }
}
