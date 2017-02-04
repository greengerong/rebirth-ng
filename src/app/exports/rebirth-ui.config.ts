import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class RebirthUIConfig {

  rootContainer: ViewContainerRef;

  dialog = {
    button: {
      yes: 'Yes',
      no: 'No'
    }
  };

}
