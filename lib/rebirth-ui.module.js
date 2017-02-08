var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
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
var RebirthUIModule = RebirthUIModule_1 = (function () {
    function RebirthUIModule() {
    }
    RebirthUIModule.forRoot = function () {
        return {
            ngModule: RebirthUIModule_1,
            providers: COMMON_SERVICES.concat([
                { provide: RebirthUIConfig, useClass: RebirthUIConfig },
                // { provide: RebirthUIConfig, useClass: ZHCNRebirthUIConfig },
                { provide: ModalService, useClass: ModalService },
                { provide: DialogService, useClass: DialogService },
                { provide: PositionService, useClass: PositionService }
            ])
        };
    };
    return RebirthUIModule;
}());
RebirthUIModule = RebirthUIModule_1 = __decorate([
    NgModule({
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
            DatePickerModule
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
            DatePickerModule
        ],
        declarations: [],
        providers: [],
    })
], RebirthUIModule);
export { RebirthUIModule };
var RebirthUIModule_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/rebirth-ui.module.js.map