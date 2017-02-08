var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, QueryList, ContentChildren, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TabComponent } from './tab.component';
import { RebirthUIConfig } from '../rebirth-ui.config';
var TabsComponent = (function () {
    function TabsComponent(rebirthUIConfig) {
        this.rebirthUIConfig = rebirthUIConfig;
        this.activeTabChange = new EventEmitter();
        this.type = rebirthUIConfig.tabs.type;
        this.justified = rebirthUIConfig.tabs.justified;
        this.vertical = rebirthUIConfig.tabs.vertical;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.ngAfterContentInit = function () {
        if (this.activeTab === undefined && this.tabs.length) {
            this.select(this.tabs.first.id);
        }
    };
    TabsComponent.prototype.select = function (id) {
        var tab = this.tabs.find(function (item) { return item.id === id; });
        if (tab && !tab.disabled) {
            this.activeTab = id;
            this.activeTabChange.emit(id);
        }
    };
    return TabsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], TabsComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabsComponent.prototype, "activeTab", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabsComponent.prototype, "vertical", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabsComponent.prototype, "justified", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabsComponent.prototype, "cssClass", void 0);
__decorate([
    ContentChildren(TabComponent),
    __metadata("design:type", QueryList)
], TabsComponent.prototype, "tabs", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TabsComponent.prototype, "activeTabChange", void 0);
TabsComponent = __decorate([
    Component({
        selector: 're-tabs',
        templateUrl: './tabs.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], TabsComponent);
export { TabsComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tabs/tabs.component.js.map