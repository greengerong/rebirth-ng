import { ValidatorFn, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { parseDate } from '../utils/index';

export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

function isEmptyInputValue(value: any): boolean {
  if (value && typeof value === 'string') {
    return !value.trim();
  }
  return value == null || value.length === 0;
}

function isNumber(value: any): boolean {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    const parsedValue = parseInt(value, 10);
    if (value.length === parsedValue.toString().length && Number.isInteger(parsedValue)) {
      return true;
    }
  }
  return false;
}

/* tslint:disable:max-line-length */

export function requiredWithTrim(control: AbstractControl): ValidationErrors | null {
  return isEmptyInputValue(control.value) ? { 'requiredWithTrim': true } : null;
}

/**
 * Validator that requires controls to have a value of a range length.
 */
export function rangeLengthValidator(rangeLength: Array<number>): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const value: string = control.value;
    const min = rangeLength[0] || 0;
    const max = rangeLength[1] || Number.MAX_VALUE;
    return value.length >= min && value.length <= max ? null : { 'reRangeLength': true };
  };
}

/**
 * Validator that requires controls to have a value of a min value.
 */
export function minValidator(min: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: number = control.value;
    return v >= min ? null : { 'reMin': true };
  };
}

/**
 * Validator that requires controls to have a value of a max value.
 */
export function maxValidator(max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: number = control.value;
    return v <= max ? null : { 'reMax': true };
  };
}

/**
 * Validator that requires controls to have a value of a range value.
 */
export function rangeValidator(range: Array<number>): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: number = control.value;
    const min = range[0] || Number.MIN_VALUE;
    const max = range[1] || Number.MAX_VALUE;
    return v >= min && v <= max ? null : { 'reRange': true };
  };
}

/**
 * Validator that requires controls to have a value of digits.
 */
export function digitsValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return /^\d+$/.test(v) ? null : { 'reDigits': true };
  };
}

/**
 * Validator that requires controls to have a value of number.
 */
export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'reNumber': true };
  };
}

/**
 * Validator that requires controls to have a value of url.
 */
export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'reUrl': true };

  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v) ? null : { 'reEmail': true };
  };
}

/**
 * Validator that requires controls to have a value of date.
 */
export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return !/Invalid|NaN/.test(new Date(v).toString()) ? null : { 'reDate': true };
  };
}

/**
 * Validator that requires controls to have a value of dateISO.
 */
export function dateISOValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { 'reDateISO': true };
  };
}

/**
 * Validator that requires controls to have a value of JSON.
 */
export function jsonValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const value: string = control.value;
    try {
      const obj = JSON.parse(value);
      if (Boolean(obj) && typeof obj === 'object') {
        return null;
      }
      return { 'reJson': true };
    } catch (e) {
      return { 'reJson': true };
    }
  };
}

/**
 * Validator that requires controls to have a value of base64.
 */
export function base64Validator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    return /^(data:image\/\w+;base64,)?(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'reBase64': true };

  };
}

/**
 * Validator that requires controls to have a value of phone.
 */
export function phoneValidator(locale?: string): ValidatorFn {
  const phones = {
    'zh-CN': /^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,
    'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
    'en-ZA': /^(\+?27|0)\d{9}$/,
    'en-AU': /^(\+?61|0)4\d{8}$/,
    'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
    'fr-FR': /^(\+?33|0)[67]\d{8}$/,
    'de-DE': /^(\+?49|0)[1-9]\d{10}$/,
    'pt-PT': /^(\+351)?9[1236]\d{7}$/,
    'el-GR': /^(\+?30)?(69\d{8})$/,
    'en-GB': /^(\+?44|0)7\d{9}$/,
    'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
    'en-ZM': /^(\+26)?09[567]\d{7}$/,
    'ru-RU': /^(\+?7|8)?9\d{9}$/,
    'nb-NO': /^(\+?47)?[49]\d{7}$/,
    'nn-NO': /^(\+?47)?[49]\d{7}$/,
    'vi-VN': /^(0|\+?84)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
    'en-NZ': /^(\+?64|0)2\d{7,9}$/,
    'hu-HU': /^(?:\+?(?:36|\(36\)))[ -\/]?(?:(?:(?:(?!1|20|21|30|31|70|90)[2-9][0-9])[ -\/]?\d{3}[ -\/]?\d{3})|(?:(?:1|20|21|30|31|70|90)[ -\/]?\d{3}[ -\/]?\d{2}[ -\/]?\d{2}))$/,
    'nl-NL': /^(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)$/
  };

  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    const pattern = phones[locale] || phones['en-US'];
    return (new RegExp(pattern)).test(v) ? null : { 'rePhone': true };
  };
}

/**
 * Validator that requires controls to have a value of uuid.
 */
export function uuidValidator(version?: string): ValidatorFn {
  const uuid = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };

  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: string = control.value;
    const pattern = uuid[version] || uuid.all;
    return (new RegExp(pattern)).test(v) ? null : { 'reUUID': true };
  };
}

/**
 * Validator that requires controls to have a value to equal another value.
 */
export function equalValidator(val: any): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: any = control.value;
    return val === v ? null : { reEqual: true };
  };
}

/**
 * Validator that requires controls to have a value to equal another control.
 */
export function equalToValidator(target: AbstractControl | string): ValidatorFn {
  let subscription;
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const targetControl = typeof target === 'string' ? control.root.get(target) : target;
    if (!subscription) {
      subscription = targetControl.valueChanges.subscribe(() => control.updateValueAndValidity());
    }
    const sourceValue: any = control.value;
    const targetValue: any = targetControl.value;
    return sourceValue === targetValue ? null : { reEqualTo: true };
  };
}

/**
 * Validator that requires controls to have a value include in a array.
 */
export function includesValidator(optionalValue: Array<any>): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    return (optionalValue || []).indexOf((control.value || '').trim()) !== -1 ? null : { 'reIncludes': true };
  };
}

/**
 * Date should before and equal given date(default date is today).
 */
export function beforeDateValidator(target: Date | string | number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (!target) {
      target = new Date();
    }

    if (isNumber(target)) {
      target = parseInt(<string>target, 10);
    }

    const date = parseDate(target);
    let targetValue = control.value;

    if (isNumber(targetValue)) {
      targetValue = parseInt(targetValue, 10);
    }

    const targetDate = parseDate(targetValue);

    return date.getTime() >= targetDate.getTime() ? null : { 'reBeforeDate': true };
  };
}

/**
 * Date should after and equal given date(default date is today).
 */
export function afterDateValidator(target: Date | string | number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (!target) {
      target = new Date();
    }

    if (isNumber(target)) {
      target = parseInt(<string>target, 10);
    }

    const date = parseDate(target);
    let targetValue = control.value;

    if (isNumber(targetValue)) {
      targetValue = parseInt(targetValue, 10);
    }

    const targetDate = parseDate(targetValue);

    return date.getTime() <= targetDate.getTime() ? null : { 'reAfterDate': true };
  };
}


/* tslint:enable:max-line-length */
