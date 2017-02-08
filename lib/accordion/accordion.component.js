var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, forwardRef, Output, EventEmitter } from '@angular/core';
import { PanelGroup } from '../panel';
import { RebirthUIConfig } from '../rebirth-ui.config';
var AccordionComponent = AccordionComponent_1 = (function (_super) {
    __extends(AccordionComponent, _super);
    function AccordionComponent(rebirthUIConfig) {
        var _this = _super.call(this) || this;
        _this.rebirthUIConfig = rebirthUIConfig;
        _this.close = new EventEmitter();
        _this.keepOneItem = rebirthUIConfig.accordion.keepOneItem;
        _this.closable = rebirthUIConfig.accordion.closable;
        _this.type = rebirthUIConfig.accordion.type;
        return _this;
    }
    AccordionComponent.prototype.initPanel = function (panel) {
        var _this = this;
        panel.collapsable = true;
        panel.isCollapsed = true;
        panel.closable = this.closable;
        panel.close.subscribe(function (item) { return _this.close.emit(item); });
        panel.collapse.subscribe(function (collapse) {
            if (!collapse) {
                _this.keepOnePanelOpen(panel);
            }
        });
    };
    AccordionComponent.prototype.toggleById = function (id) {
        var panel = this.panels.find(function (item) { return item.id === id; });
        this.toggle(panel);
    };
    AccordionComponent.prototype.toggle = function (panel) {
        if (panel) {
            panel.onCollapse();
        }
    };
    AccordionComponent.prototype.keepOnePanelOpen = function (panel) {
        if (this.keepOneItem) {
            this.panels.forEach(function (item) {
                if (item !== panel) {
                    item.isCollapsed = true;
                }
            });
        }
    };
    return AccordionComponent;
}(PanelGroup));
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AccordionComponent.prototype, "keepOneItem", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AccordionComponent.prototype, "closable", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "close", void 0);
AccordionComponent = AccordionComponent_1 = __decorate([
    Component({
        selector: 're-accordion',
        templateUrl: './accordion.component.html',
        exportAs: 'accordion',
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{ provide: PanelGroup, useExisting: forwardRef(function () { return AccordionComponent_1; }) }],
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], AccordionComponent);
export { AccordionComponent };
var AccordionComponent_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/accordion/accordion.component.js.map