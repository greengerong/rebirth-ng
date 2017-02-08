var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';
var RatingComponent = (function () {
    function RatingComponent(rebirthUIConfig) {
        this.rebirthUIConfig = rebirthUIConfig;
        this.value = 0;
        this.disabled = false;
        this.valueChange = new EventEmitter();
        this.statValue = 0;
        this.icons = rebirthUIConfig.rating.icons;
        this.ratingRanges = this.fillRatingRange(rebirthUIConfig.rating.max);
    }
    Object.defineProperty(RatingComponent.prototype, "ratingValue", {
        set: function (value) {
            this.statValue = this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "max", {
        set: function (value) {
            this.ratingRanges = this.fillRatingRange(value);
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.rate = function (value) {
        if (!this.disabled) {
            this.ratingValue = value;
            this.valueChange.emit(this.value);
        }
    };
    RatingComponent.prototype.enter = function (value) {
        if (!this.disabled) {
            this.statValue = value;
        }
    };
    RatingComponent.prototype.reset = function () {
        this.statValue = this.value;
    };
    RatingComponent.prototype.fillRatingRange = function (range) {
        return Array(range).fill(0).map(function (_, i) { return i + 1; });
    };
    RatingComponent.prototype.ngOnInit = function () {
    };
    return RatingComponent;
}());
__decorate([
    Input('ngModel'),
    __metadata("design:type", Object)
], RatingComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RatingComponent.prototype, "cssClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "icons", void 0);
__decorate([
    Output('ngModelChange'),
    __metadata("design:type", Object)
], RatingComponent.prototype, "valueChange", void 0);
__decorate([
    Input('ngModel'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RatingComponent.prototype, "ratingValue", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RatingComponent.prototype, "max", null);
RatingComponent = __decorate([
    Component({
        selector: 're-rating',
        templateUrl: './rating.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'rating'
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/rating/rating.component.js.map