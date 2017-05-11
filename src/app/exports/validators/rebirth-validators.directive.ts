import { Directive, Inject, Input, LOCALE_ID } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { RebirthValidators } from './rebirth-validators';

@Directive({
  selector: '[reRangeLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeLengthDirective, multi: true }]
})
export class RangeLengthDirective implements Validator {

  @Input() reRangeLength: number[];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | any {
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

  validate(control: AbstractControl): ValidationErrors | any {
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

  validate(control: AbstractControl): ValidationErrors | any {
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

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.range(this.reRange)(control);
  }
}

@Directive({
  selector: '[reDigits]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DigitsDirective, multi: true }]
})
export class DigitsDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.digits()(control);
  }
}

@Directive({
  selector: '[reNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberDirective, multi: true }]
})
export class NumberDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.number()(control);
  }
}

@Directive({
  selector: '[reUrl]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlDirective, multi: true }]
})
export class UrlDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.url()(control);
  }
}

@Directive({
  selector: '[reEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true }]
})
export class EmailDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.email()(control);
  }
}

@Directive({
  selector: '[reDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateDirective, multi: true }]
})
export class DateDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.date()(control);
  }
}

@Directive({
  selector: '[reDateISO]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateISODirective, multi: true }]
})
export class DateISODirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.dateISO()(control);
  }
}

@Directive({
  selector: '[reJson]',
  providers: [{ provide: NG_VALIDATORS, useExisting: JsonDirective, multi: true }]
})
export class JsonDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.json()(control);
  }
}

@Directive({
  selector: '[reBase64]',
  providers: [{ provide: NG_VALIDATORS, useExisting: Base64Directive, multi: true }]
})
export class Base64Directive implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.base64()(control);
  }
}

@Directive({
  selector: '[rePhone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {

  @Input() rePhone: string;

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.phone(this.rePhone || this.locale)(control);
  }
}

@Directive({
  selector: '[reUUID]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UUIDDirective, multi: true }]
})
export class UUIDDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.uuid()(control);
  }
}

@Directive({
  selector: '[reEqual]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualDirective, multi: true }]
})
export class EqualDirective implements Validator {

  @Input() reEqual: any;

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.equal(this.reEqual)(control);
  }
}

@Directive({
  selector: '[reIncludes]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IncludesDirective, multi: true }]
})
export class IncludesDirective implements Validator {

  @Input() reIncludes: any[];

  validate(control: AbstractControl): ValidationErrors | any {
    return RebirthValidators.includes(this.reIncludes)(control);
  }
}

@Directive({
  selector: '[reEqualTo]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualToDirective, multi: true }]
})
export class EqualToDirective implements Validator {
  private validatorFn: ValidatorFn;

  @Input() set reEqualTo(target: AbstractControl | string) {
    this.validatorFn = RebirthValidators.equalTo(target);
  };

  validate(control: AbstractControl): ValidationErrors | any {
    return this.validatorFn(control);
  }
}

@Directive({
  selector: '[reBeforeDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: BeforeDateDirective, multi: true }]
})
export class BeforeDateDirective implements Validator {
  private validatorFn: ValidatorFn;

  @Input() set reBeforeDate(target: string | Date | number) {
    console.log('1 :', target);
    this.validatorFn = RebirthValidators.beforeDate(target);
  };

  validate(control: AbstractControl): ValidationErrors | any {
    return this.validatorFn(control);
  }
}
