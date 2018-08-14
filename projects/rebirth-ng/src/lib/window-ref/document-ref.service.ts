import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable(
  { providedIn: 'root' }
)
export class DocumentRef {

  constructor(@Inject(DOCUMENT) public document: any) {

  }

  get body(): any {
    return this.document.body;
  }

  get documentElement(): any {
    return this.document.documentElement;
  }

  createElement(tag) {
    return this.document.createElement(tag);
  }
}
