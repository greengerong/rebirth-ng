var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ComponentFactoryResolver, Directive, ElementRef, forwardRef, HostListener, Injector, Input, Renderer, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PositionService } from '../position/positioning.service';
import { DatePickerPopupComponent } from './date-picker-popup.component';
import { SelectDateChangeReason } from './date-change-event-args.model';
import { RebirthUIConfig } from '../rebirth-ui.config';
import { DefaultDateConverter } from '../utils/default-date-converter';
var DatePickerDirective = DatePickerDirective_1 = (function () {
    function DatePickerDirective(elementRef, viewContainerRef, componentFactoryResolver, renderer, injector, positionService, rebirthUIConfig) {
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.injector = injector;
        this.positionService = positionService;
        this.rebirthUIConfig = rebirthUIConfig;
        this.placement = 'bottom-left';
        this.disabled = false;
        this.isOpen = false;
        this.onChange = function (_) { return null; };
        this.onTouched = function () { return null; };
        this.dateConfig = rebirthUIConfig.datePicker;
        this.dateConverter = rebirthUIConfig.datePicker.dateConverter || new DefaultDateConverter();
        this.showTimePicker = rebirthUIConfig.datePicker.timePicker;
        this.locale = rebirthUIConfig.datePicker.locale;
        this._minDate = new Date(this.dateConfig.min, 0, 1, 0, 0, 0);
        this._maxDate = new Date(this.dateConfig.max, 11, 31, 23, 59, 59);
    }
    Object.defineProperty(DatePickerDirective.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (date) {
            var parseDate = this.dateConverter.parse(date, this.getDateFormat(), this.locale);
            if (parseDate) {
                this._maxDate = parseDate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (date) {
            var parseDate = this.dateConverter.parse(date, this.getDateFormat(), this.locale);
            if (parseDate) {
                this._minDate = parseDate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerDirective.prototype, "dateFormat", {
        get: function () {
            return this._dateFormat;
        },
        set: function (dateFormat) {
            if (this._dateFormat !== dateFormat) {
                this._dateFormat = dateFormat;
                this.writeModelValue(this.selectedDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    DatePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerPopupComponent);
        this.cmpRef = this.viewContainerRef.createComponent(factory, this.viewContainerRef.length, this.injector);
        this.applyPopupStyling(this.cmpRef.location.nativeElement);
        var component = this.cmpRef.instance;
        this.hide();
        component.writeValue(this.selectedDate);
        this.fillPopupData();
        component.ngOnInit();
        component.registerOnChange(function (selectedDate) {
            _this.writeValue(selectedDate);
            _this.onChange(selectedDate);
        });
        component.selectedDateChange.subscribe(function (arg) {
            if (arg.reason === SelectDateChangeReason.date) {
                _this.hide();
            }
        });
    };
    DatePickerDirective.prototype.writeValue = function (obj) {
        this.selectedDate = obj ? this.dateConverter.parse(obj, this.getDateFormat(), this.locale) : null;
        this.writeModelValue(this.selectedDate);
    };
    DatePickerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerDirective.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
        if (this.isOpen) {
            this.cmpRef.instance.setDisabledState(isDisabled);
        }
    };
    DatePickerDirective.prototype.toggle = function ($event) {
        if ($event) {
            $event.stopPropagation();
        }
        if (this.isOpen) {
            this.hide();
            return;
        }
        this.show();
    };
    DatePickerDirective.prototype.onDocumentClick = function ($event) {
        var hostElement = this.elementRef.nativeElement;
        if ($event.target !== hostElement) {
            this.hide();
        }
    };
    DatePickerDirective.prototype.show = function () {
        var component = this.cmpRef.instance;
        component.writeValue(this.selectedDate);
        this.fillPopupData();
        this.isOpen = true;
        var targetElement = this.cmpRef.location.nativeElement;
        var hostElement = this.elementRef.nativeElement;
        this.renderer.setElementStyle(targetElement, 'display', 'inline-block');
        var clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, false);
        this.renderer.setElementStyle(targetElement, 'left', clientRect.left + "px");
        this.renderer.setElementStyle(targetElement, 'top', clientRect.top + "px");
    };
    DatePickerDirective.prototype.hide = function () {
        this.isOpen = false;
        var target = this.cmpRef.location.nativeElement;
        this.renderer.setElementStyle(target, 'display', 'none');
    };
    DatePickerDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    DatePickerDirective.prototype.onChangeFromInput = function ($event) {
        var value = $event.target.value;
        var parseDate = value ? this.dateConverter.parse(value, this.dateFormat, this.locale) : null;
        if (parseDate) {
            if (parseDate.getTime() < this.minDate.getTime()) {
                parseDate = this.minDate;
            }
            if (parseDate.getTime() > this.maxDate.getTime()) {
                parseDate = this.maxDate;
            }
        }
        this.writeValue(parseDate);
        this.onChange(this.selectedDate);
    };
    DatePickerDirective.prototype.onEscKeyup = function () {
        this.hide();
    };
    DatePickerDirective.prototype.writeModelValue = function (selectDate) {
        var value = selectDate ? this.dateConverter.format(selectDate, this.getDateFormat(), this.locale) : '';
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'value', value);
        if (this.isOpen) {
            this.cmpRef.instance.writeValue(selectDate);
            this.onTouched();
        }
    };
    DatePickerDirective.prototype.getDateFormat = function () {
        if (this.dateFormat) {
            return this.dateFormat;
        }
        return this.showTimePicker ? this.dateConfig.format.time : this.dateConfig.format.date;
    };
    DatePickerDirective.prototype.applyPopupStyling = function (nativeElement) {
        this.renderer.setElementClass(nativeElement, 'dropdown-menu', true);
        this.renderer.setElementStyle(nativeElement, 'padding', '0px');
    };
    DatePickerDirective.prototype.fillPopupData = function () {
        var _this = this;
        ['showTimePicker', 'maxDate', 'minDate', 'cssClass', 'disabled', 'dateConverter', 'locale', 'dateFormat']
            .forEach(function (key) {
            if (_this[key] !== undefined) {
                _this.cmpRef.instance[key] = _this[key];
            }
        });
    };
    return DatePickerDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], DatePickerDirective.prototype, "selectedDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerDirective.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DatePickerDirective.prototype, "showTimePicker", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerDirective.prototype, "cssClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerDirective.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerDirective.prototype, "dateConverter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatePickerDirective.prototype, "maxDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatePickerDirective.prototype, "minDate", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DatePickerDirective.prototype, "dateFormat", null);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DatePickerDirective.prototype, "onDocumentClick", null);
__decorate([
    HostListener('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatePickerDirective.prototype, "onBlur", null);
__decorate([
    HostListener('change', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DatePickerDirective.prototype, "onChangeFromInput", null);
__decorate([
    HostListener('keyup.esc', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatePickerDirective.prototype, "onEscKeyup", null);
DatePickerDirective = DatePickerDirective_1 = __decorate([
    Directive({
        selector: '[reDatePicker]',
        exportAs: 'datePicker',
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return DatePickerDirective_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [ElementRef, ViewContainerRef,
        ComponentFactoryResolver, Renderer,
        Injector, PositionService,
        RebirthUIConfig])
], DatePickerDirective);
export { DatePickerDirective };
var DatePickerDirective_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/date-picker/date-picker.directive.js.map