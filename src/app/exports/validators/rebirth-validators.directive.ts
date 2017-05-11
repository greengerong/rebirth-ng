import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { RebirthValidators } from './rebirth-validators';

@Directive({
  selector: '[reRangeLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeLengthDirective, multi: true }]
})
export class RangeLengthDirective implements Validator {

  @Input() reRangeLength: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.rangeLength(this.reRangeLength)(control);
  }
}

@Directive({
  selector: '[reMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {

  @Input() reMin: number;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.min(this.reMin)(control);
  }
}

@Directive({
  selector: '[reMax]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective implements Validator {

  @Input() reMax: number;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.max(this.reMax)(control);
  }
}

@Directive({
  selector: '[reRange]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeDirective, multi: true }]
})
export class RangeDirective implements Validator {

  @Input() reRange: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.range(this.reRange)(control);
  }
}

@Directive({
  selector: '[reDigits]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DigitsDirective, multi: true }]
})
export class DigitsDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.digits()(control);
  }
}

@Directive({
  selector: '[reNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberDirective, multi: true }]
})
export class NumberDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.number()(control);
  }
}

@Directive({
  selector: '[reUrl]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlDirective, multi: true }]
})
export class UrlDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.url()(control);
  }
}

@Directive({
  selector: '[reEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true }]
})
export class EmailDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.email()(control);
  }
}

@Directive({
  selector: '[reDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateDirective, multi: true }]
})
export class DateDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.date()(control);
  }
}

@Directive({
  selector: '[reDateISO]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateISODirective, multi: true }]
})
export class DateISODirective implements Validator {

  validate(control: AbstractControl): ValidationErrors|any {
    return RebirthValidators.dateISO()(control);
  }
}
