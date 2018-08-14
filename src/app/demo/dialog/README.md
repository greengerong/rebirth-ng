## Dialog

* Shoulde pass `RebirthNGConfig.rootContainer` in your `AppComponent` when you did not pass `rootContainer` parameters to `DialogService`.


    export class AppComponent implements OnInit {
      constructor(private rebirthNGConfig: RebirthNGConfig,
                  private viewContainerRef: ViewContainerRef) {
                  
        this.rebirthNGConfig.rootContainer = this.viewContainerRef; // default container for append body component(Modal, DatePicker...)
        // this.rebirthNGConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
      }

