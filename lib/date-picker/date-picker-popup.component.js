var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostListener, forwardRef, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDateChangeReason } from './date-change-event-args.model';
import { RebirthUIConfig } from '../rebirth-ui.config';
import { DefaultDateConverter } from '../utils/default-date-converter';
import { isValidDate } from '../utils/date-utils';
var DatePickerPopupComponent = DatePickerPopupComponent_1 = (function () {
    function DatePickerPopupComponent(elementRef, renderer, rebirthUIConfig) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.rebirthUIConfig = rebirthUIConfig;
        this.selectedDateChange = new EventEmitter();
        this.disabled = false;
        this.onChange = function (_) { return null; };
        this.onTouched = function () { return null; };
        this.locale = this.rebirthUIConfig.datePicker.locale;
        this.dateConverter = rebirthUIConfig.datePicker.dateConverter || new DefaultDateConverter();
        this.dateConfig = rebirthUIConfig.datePicker;
        this.showTimePicker = rebirthUIConfig.datePicker.timePicker;
        this._minDate = new Date(this.dateConfig.min, 0, 1, 0, 0, 0);
        this._maxDate = new Date(this.dateConfig.max, 11, 31, 23, 59, 59);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'inline-block');
    }
    Object.defineProperty(DatePickerPopupComponent.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (date) {
            var parseDate = this.dateConverter.parse(date, this.dateFormat, this.locale);
            if (parseDate) {
                this._maxDate = parseDate;
                this.onYearRangeChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePickerPopupComponent.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (date) {
            var parseDate = this.dateConverter.parse(date, this.dateFormat, this.locale);
            if (parseDate) {
                this._minDate = parseDate;
                this.onYearRangeChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DatePickerPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hourOptions = new Array(24).fill(0).map(function (value, index) { return _this.fillLeft(index); });
        this.minuteOptions = new Array(60).fill(0).map(function (value, index) { return _this.fillLeft(index); });
        this.onSelectDateChanged();
        this.onDisplayWeeksChange();
        this.onYearRangeChange();
    };
    DatePickerPopupComponent.prototype.writeValue = function (obj) {
        this.selectedDate = obj ? this.dateConverter.parse(obj, this.dateFormat, this.locale) : null;
        this.onSelectDateChanged();
        this.onDisplayWeeksChange();
    };
    DatePickerPopupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerPopupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerPopupComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DatePickerPopupComponent.prototype.onSelectDate = function (date) {
        if (this.isDisabledDay(date)) {
            return;
        }
        var selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), this.currentHour, this.currentMinute);
        this.onTouched();
        this.writeValue(selectedDate);
        this.onChange(selectedDate);
        this.selectedDateChange.emit({ reason: SelectDateChangeReason.date, date: this.selectedDate });
        if (this.currentMonth !== this.selectedDate.getMonth() || this.currentYear !== this.selectedDate.getFullYear()) {
            this.currentYear = this.selectedDate.getFullYear();
            this.currentMonth = this.selectedDate.getMonth();
            this.onDisplayWeeksChange();
        }
    };
    DatePickerPopupComponent.prototype.onTimeChange = function () {
        var date = this.selectedDate || new Date();
        this.selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), this.currentHour, this.currentMinute);
        this.onTouched();
        this.writeValue(this.selectedDate);
        this.onChange(this.selectedDate);
        this.selectedDateChange.emit({ reason: SelectDateChangeReason.time, date: this.selectedDate });
    };
    DatePickerPopupComponent.prototype.hasPreMonth = function () {
        return this.currentMonth > 0 || this.currentYear > this.minDate.getFullYear();
    };
    DatePickerPopupComponent.prototype.onPreMonth = function () {
        if (!this.hasPreMonth()) {
            return;
        }
        if (this.currentMonth > 0) {
            this.currentMonth -= 1;
        }
        else {
            this.currentMonth = 11;
            this.currentYear -= 1;
        }
        this.onDisplayWeeksChange();
    };
    DatePickerPopupComponent.prototype.hasNextMonth = function () {
        return this.currentMonth < 11 || this.currentYear < this.maxDate.getFullYear();
    };
    DatePickerPopupComponent.prototype.onNextMonth = function () {
        if (!this.hasNextMonth()) {
            return;
        }
        if (this.currentMonth < 11) {
            this.currentMonth += 1;
        }
        else {
            this.currentMonth = 0;
            this.currentYear += 1;
        }
        this.onDisplayWeeksChange();
    };
    DatePickerPopupComponent.prototype.isDisabledDay = function (date) {
        var minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        var maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate(), 23, 59, 59);
        return this.disabled || (date.getTime() < minDate.getTime() ||
            date.getTime() > maxDate.getTime());
    };
    DatePickerPopupComponent.prototype.isSelectDay = function (date) {
        if (!this.selectedDate || !date) {
            return false;
        }
        return date.getFullYear() === this.selectedDate.getFullYear() &&
            date.getMonth() === this.selectedDate.getMonth() &&
            date.getDate() === this.selectedDate.getDate();
    };
    DatePickerPopupComponent.prototype.onYearRangeChange = function () {
        if (!isValidDate(this.minDate) || !isValidDate(this.maxDate)) {
            return;
        }
        var minYear = this.minDate.getFullYear();
        var maxYear = this.maxDate.getFullYear();
        this.yearOptions = new Array(maxYear - minYear + 1).fill(0).map(function (value, index) {
            return minYear + index;
        });
    };
    DatePickerPopupComponent.prototype.onDocumentClick = function ($event) {
        $event.stopPropagation();
    };
    DatePickerPopupComponent.prototype.onSelectDateChanged = function () {
        var date = this.selectedDate || new Date();
        if (date.getTime() < this.minDate.getTime()) {
            date = this.minDate;
        }
        if (date.getTime() > this.maxDate.getTime()) {
            date = this.maxDate;
        }
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth();
        this.currentHour = this.showTimePicker ? date.getHours() : 0;
        this.currentMinute = this.showTimePicker ? date.getMinutes() : 0;
    };
    DatePickerPopupComponent.prototype.fillLeft = function (num) {
        return num < 10 ? "0" + num : "" + num;
    };
    DatePickerPopupComponent.prototype.onDisplayWeeksChange = function () {
        var _this = this;
        var firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
        var weekOfDay = firstDayOfMonth.getDay();
        var startDate = new Date(firstDayOfMonth.getTime() - weekOfDay * DatePickerPopupComponent_1.DAY_DURATION);
        var displayWeeks = [];
        var _loop_1 = function (i) {
            var startWeekDate = startDate.getTime() + i * 7 * DatePickerPopupComponent_1.DAY_DURATION;
            var weekDays = new Array(7).fill(0).map(function (value, index) {
                var currentDate = new Date(startWeekDate + index * DatePickerPopupComponent_1.DAY_DURATION);
                return {
                    day: _this.fillLeft(currentDate.getDate()),
                    date: currentDate,
                    inMonth: currentDate.getMonth().toString() === _this.currentMonth.toString()
                };
            });
            displayWeeks.push(weekDays);
        };
        for (var i = 0; i < 6; i++) {
            _loop_1(i);
        }
        this.displayWeeks = displayWeeks;
    };
    return DatePickerPopupComponent;
}());
DatePickerPopupComponent.DAY_DURATION = 24 * 60 * 60 * 1000;
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DatePickerPopupComponent.prototype, "showTimePicker", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerPopupComponent.prototype, "cssClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatePickerPopupComponent.prototype, "dateConverter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerPopupComponent.prototype, "locale", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DatePickerPopupComponent.prototype, "selectedDateChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatePickerPopupComponent.prototype, "dateFormat", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatePickerPopupComponent.prototype, "maxDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatePickerPopupComponent.prototype, "minDate", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DatePickerPopupComponent.prototype, "onDocumentClick", null);
DatePickerPopupComponent = DatePickerPopupComponent_1 = __decorate([
    Component({
        selector: 're-date-picker-popup',
        templateUrl: './date-picker-popup.component.html',
        styleUrls: ['./date-picker-popup.component.scss'],
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return DatePickerPopupComponent_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer, RebirthUIConfig])
], DatePickerPopupComponent);
export { DatePickerPopupComponent };
var DatePickerPopupComponent_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/date-picker/date-picker-popup.component.js.map