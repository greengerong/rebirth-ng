import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { ModalService } from './modal/modal.service';
import { DialogModule } from './dialog/dialog.module';
import { DialogService } from './dialog/dialog.service';
import { PagerModule } from './pager/pager.module';
import { RebirthNGConfig } from './rebirth-ng.config';
import { PaginationModule } from './pagination/pagination.module';
import { AlertBoxModule } from './alert-box/alert-box.module';
import { BadgeModule } from './badge/badge.module';
import { PanelModule } from './panel/panel.module';
import { AccordionModule } from './accordion/accordion.module';
import { ActionButtonModule } from './action-button/action-button.module';
import { RatingModule } from './rating/rating.module';
import { TabsModule } from './tabs/tabs.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PositionService } from './position/positioning.service';
import { PopoverModule } from './popover/popover.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { SelectButtonModule } from './select-button/select-button.module';
import { OverlayModule } from './overlay/overlay.module';
import { OverlayService } from './overlay/overlay.service';
import { CarouselModule } from './carousel/carousel.module';
import { SwitchModule } from './switch/switch.module';
import { MenuBarModule } from './menu-bar/menu-bar.module';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';
import { FlowStepModule } from './flow-step/flow-step.module';
import { InfiniteScrollModule } from './infinite-scroll/infinite-scroll.module';
import { RebirthCommonModule } from './common/common.module';
import { AssetsLoader } from './common/assets-loader.service';
import { ComponentDeactivateGuard } from './common/component.deactivate';
import { DraggableModule } from './draggable/draggable.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { TimePickerModule } from './time-picker/time-picker.module';
import { RadioGroupModule } from './radio-group/radio-group.module';
import { CheckboxGroupModule } from './checkbox-group/checkbox-group.module';
import { RebirthValidatorsModule } from './validators/rebirth-validators.module';
import { NotifyModule } from './notify/notify.module';
import { NotifyService } from './notify/notify.service';
import { TreeViewModule } from './tree-view/tree-view.module';
import { TreeViewService } from './tree-view/tree-view.service';
import { EllipsisModule } from './ellipsis/ellipsis.module';
import { TagsModule } from './tags/tags.module';
import { ImageUploadModule } from './image-upload/image-upload.module';
import { SelectModule } from './select/select.module';
import { SliderModule } from './slider/slider.module';
import { DocumentRef } from './window-ref/document-ref.service';
import { WindowRef } from './window-ref/window-ref.service';

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
  providers: [
    { provide: DocumentRef, useClass: DocumentRef },
    { provide: WindowRef, useClass: WindowRef },

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
})
export class RebirthNGModule {

}
