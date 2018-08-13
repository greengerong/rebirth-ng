import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class RebirthNGConfig {

  rootContainer: ViewContainerRef;

  extend(obj: any): this {
    this.extendConfig(obj, this);
    return this;
  }

  private extendConfig(obj: any, targetObj: any) {
    Object.keys(obj || {})
      .reduce((target, key) => {
        const value = obj[key];
        if (value instanceof Object) {
          this.extendConfig(value, target[key])
        } else {
          target[key] = value;
        }
        return target;
      }, targetObj);
  }
}
