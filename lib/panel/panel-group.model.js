var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input } from '@angular/core';
var PanelGroup = (function () {
    function PanelGroup() {
        this.panels = [];
    }
    PanelGroup.prototype.$addItem = function (panel) {
        this.$removeItem(panel);
        if (this.type) {
            panel.type = this.type;
        }
        panel.cssClass = this.cssClass;
        this.initPanel(panel);
        this.panels.push(panel);
    };
    PanelGroup.prototype.$removeItemById = function (id) {
        var index = this.panels.findIndex(function (item) { return item.id === id; });
        this.removeItemByIndex(index);
    };
    PanelGroup.prototype.$removeItem = function (panel) {
        if (panel) {
            var index = this.panels.findIndex(function (item) { return item === panel; });
            this.removeItemByIndex(index);
        }
    };
    PanelGroup.prototype.removeItemByIndex = function (index) {
        if (index !== -1) {
            this.panels.splice(index, 1);
        }
    };
    return PanelGroup;
}());
export { PanelGroup };
__decorate([
    Input(),
    __metadata("design:type", String)
], PanelGroup.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanelGroup.prototype, "cssClass", void 0);
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/panel/panel-group.model.js.map