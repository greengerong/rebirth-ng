# Getting started 

> Angular UI plugin with bootstrap

## Welcome

Welcome to `@Rebirth/NG`. This repo is Angular ui library for Bootstrap. And it is being built from scratch in Typescript.

You can check [Demo Showcase](/rebirth-ng) & [API document](/rebirth-ng/compodocs/overview.html).


## Dependencies

`@Rebirth/NG` is all base on Angular2 and Bootstrap css. It no dependency on jQuery or Bootstrap's JavaScript is required.
The only required dependencies are:

* [Angular](https://angular.io/) (requires `Angular` version 4.0.0 or higher)
* [Bootstrap CSS](http://getbootstrap.com/) (`bootstrap-sass` 3.3.7)
* [DateFns](https://date-fns.org/) (`date-fns` 1.27.2 or higher. It is for `DatePicker` parse & format date)


*Notice*: `OnPush` @Input is recommended in `@Rebirth/NG`, so use `Immutable.js` will be easy.

## Installation

After installing the above dependencies, install `@Rebirth/NG` via: 
  
    npm install --save rebirth-ng
  
Once installed you need to import our main module.

    import { RebirthNGModule } from 'rebirth-ng';
  
Then use `RebirthNGModule.forRoot()` to declare on your root module:

    
    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        RebirthNGModule.forRoot(),
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }


And use `RebirthNGModule` to declare on your feature module:

    @NgModule({
      imports: [CommonModule, FormsModule, RebirthNGModule],
      exports: [DatePickerDemoComponent],
      declarations: [DatePickerDemoComponent],
      providers: [],
    })
    export class DatePickerDemoModule {
    }


## Animations

`@Rebirth/NG` have got animations done. So You should include `BrowserAnimationsModule` or `NoopAnimationsModule` to your `AppModule`.

example:

    import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
    
    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        SharedModule.forRoot(),
        RebirthNGModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }

## FAQ


Please check [github](https://github.com/greengerong/rebirth-ng/issues) issue for your common problems / solutions.
