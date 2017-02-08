var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
    }
    return TabComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "disabled", void 0);
__decorate([
    ContentChild(TabContentDirective),
    __metadata("design:type", TabContentDirective)
], TabComponent.prototype, "contentTpl", void 0);
__decorate([
    ContentChild(TabTitleDirective),
    __metadata("design:type", TabTitleDirective)
], TabComponent.prototype, "titleTpl", void 0);
TabComponent = __decorate([
    Component({
        selector: 're-tab',
        template: '',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TabComponent);
export { TabComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tabs/tab.component.js.map