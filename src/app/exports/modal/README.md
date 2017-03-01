
#### Notices
 
* Make sure put your modal component to `entryComponents` of your module! Example with `ModalTestComponent`: 

    
    @NgModule({
      ...
      declarations: [
        ModalTestComponent
      ],
      entryComponents: [
        ModalTestComponent
      ]
    })
    export class ModalDemoModule {
    }

