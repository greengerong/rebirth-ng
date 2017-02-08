# Getting started 

> Angular2 UI plugin with bootstrap

## Welcome

Welcome to `@Rebirth/UI`. This repo is Angular2 ui library for Bootstrap. And it is being built from scratch in Typescript.

You can check [Demo Showcase](/) & [API document](/ng2-rebirth-ui/compodocs/overview.html).


## Dependencies

`@Rebirth/UI` is all base on Angular2 and Bootstrap css. It no dependency on jQuery or Bootstrap's JavaScript is required.
The only required dependencies are:

* [Angular](https://angular.io/) (requires `Angular` version 2.3.1 or higher)
* [Bootstrap CSS](http://getbootstrap.com/) (`bootstrap-sass` 3.3.7)
* [DateFns](https://date-fns.org/) (`date-fns` 1.27.2 or higher. It is for `DatePicker` parse & format date)


## Installation

After installing the above dependencies, install `@Rebirth/UI` via: 
  
    npm install --save ng2-rebirth-ui
  
Once installed you need to import our main module.

    import { RebirthUIModule } from 'ng2-rebirth-ui';
  
Then use `RebirthUIModule.forRoot()` to declare on your root module:

    
    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        RebirthUIModule.forRoot(),
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }


And use `RebirthUIModule` to declare on your feature module:

    @NgModule({
      imports: [CommonModule, FormsModule, RebirthUIModule],
      exports: [DatePickerDemoComponent],
      declarations: [DatePickerDemoComponent],
      providers: [],
    })
    export class DatePickerDemoModule {
    }

## FAQ

Please check [github](https://github.com/greengerong/ng2-rebirth-ui/issues) issue for your common problems / solutions.
