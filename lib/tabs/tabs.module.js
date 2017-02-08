var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabTitleDirective } from './tab-title.directive';
import { TabContentDirective } from './tab-content.directive';
import { TabComponent } from './tab.component';
var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [TabsComponent, TabComponent, TabTitleDirective, TabContentDirective],
        declarations: [TabsComponent, TabComponent, TabTitleDirective, TabContentDirective],
        providers: [],
    })
], TabsModule);
export { TabsModule };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tabs/tabs.module.js.map