import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DocumentRef {

  constructor(@Inject(DOCUMENT) public document: Document) {

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
