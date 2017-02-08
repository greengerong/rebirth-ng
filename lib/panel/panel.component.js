var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, Optional, Host } from '@angular/core';
import { PanelGroup } from './panel-group.model';
import { RebirthUIConfig } from '../rebirth-ui.config';
var PanelComponent = (function () {
    function PanelComponent(panelGroup, rebirthUIConfig) {
        this.panelGroup = panelGroup;
        this.rebirthUIConfig = rebirthUIConfig;
        this.isCollapsed = false;
        this.close = new EventEmitter();
        this.collapse = new EventEmitter();
        this.type = rebirthUIConfig.panel.type;
        this.closable = rebirthUIConfig.panel.closable;
        this.collapsable = rebirthUIConfig.panel.collapsable;
    }
    PanelComponent.prototype.ngOnInit = function () {
        if (this.panelGroup) {
            this.panelGroup.$addItem(this);
        }
    };
    PanelComponent.prototype.onClose = function ($event) {
        $event.stopPropagation();
        this.close.emit(this);
    };
    PanelComponent.prototype.onCollapse = function () {
        if (this.collapsable) {
            this.isCollapsed = !this.isCollapsed;
            this.collapse.emit(this.isCollapsed);
        }
    };
    PanelComponent.prototype.ngOnDestroy = function () {
        if (this.panelGroup) {
            this.panelGroup.$removeItem(this);
        }
    };
    return PanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], PanelComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PanelComponent.prototype, "closable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PanelComponent.prototype, "collapsable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PanelComponent.prototype, "isCollapsed", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "cssClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PanelComponent.prototype, "close", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PanelComponent.prototype, "collapse", void 0);
PanelComponent = __decorate([
    Component({
        selector: 're-panel,re-accordion-item',
        templateUrl: './panel.component.html',
        // changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'panel'
    }),
    __param(0, Optional()), __param(0, Host()),
    __metadata("design:paramtypes", [PanelGroup, RebirthUIConfig])
], PanelComponent);
export { PanelComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/panel/panel.component.js.map