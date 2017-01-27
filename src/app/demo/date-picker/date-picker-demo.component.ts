
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 're-date-picker-demo',
    templateUrl: './date-picker-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerDemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
