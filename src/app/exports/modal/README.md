
#### Notices
 
* Shoulde pass `rebirthUIConfig.rootContainer` in your `AppComponent` when you did not pass `rootContainer` parameters to `ModalService`.


    export class AppComponent implements OnInit {
      constructor(private rebirthConfig: RebirthUIConfig,
                  private viewContainerRef: ViewContainerRef) {
                  
        this.rebirthConfig.rootContainer = this.viewContainerRef; // default container for append body component(Modal, DatePicker...)
        // this.rebirthConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
      }

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

