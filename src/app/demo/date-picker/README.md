
#### Notices

* `DatePicker` component use [`dateFns`](https://date-fns.org/) to parse & format Date by default. 

* `appendBody` to append popup to `document.body`. Make sure you have setup `RebirthNGConfig.rootContainer` when application bootstrap.


    export class AppComponent {
      constructor(private rebirthNGConfig: RebirthNGConfig, ...) {
        this.rebirthNGConfig.rootContainer = this.viewContainerRef; // setup root container for all append body component.
      }
    }


* If you want to setup a new date converter, you can pass `dateConverter` to each `DatePicker` component or override in `RebirthNGConfig.datePicker.dateConverter`.  Date converter
  should implements interface [`DateConverter`](https://greengerong.github.io/rebirth-ng/compodocs/interfaces/DateConverter.html).

* [`dateFns`](https://date-fns.org/) format accepted tokens [https://date-fns.org/docs/format](https://date-fns.org/docs/format):

<table class="table table-striped table-bordered">
  <thead>
  <tr>
    <th>Unit</th>
    <th>Token</th>
    <th>Result examples</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Month</td>
    <td>M</td>
    <td>1, 2, …, 12</td>
  </tr>
  <tr>
    <td></td>
    <td>Mo</td>
    <td>1st, 2nd, …, 12th</td>
  </tr>
  <tr>
    <td></td>
    <td>MM</td>
    <td>01, 02, …, 12</td>
  </tr>
  <tr>
    <td></td>
    <td>MMM</td>
    <td>Jan, Feb, …, Dec</td>
  </tr>
  <tr>
    <td></td>
    <td>MMMM</td>
    <td>January, February, …, December</td>
  </tr>
  <tr>
    <td>Quarter</td>
    <td>Q</td>
    <td>1, 2, 3, 4</td>
  </tr>
  <tr>
    <td></td>
    <td>Qo</td>
    <td>1st, 2nd, 3rd, 4th</td>
  </tr>
  <tr>
    <td>Day of month</td>
    <td>D</td>
    <td>1, 2, …, 31</td>
  </tr>
  <tr>
    <td></td>
    <td>Do</td>
    <td>1st, 2nd, …, 31st</td>
  </tr>
  <tr>
    <td></td>
    <td>DD</td>
    <td>01, 02, …, 31</td>
  </tr>
  <tr>
    <td>Day of year</td>
    <td>DDD</td>
    <td>1, 2, …, 366</td>
  </tr>
  <tr>
    <td></td>
    <td>DDDo</td>
    <td>1st, 2nd, …, 366th</td>
  </tr>
  <tr>
    <td></td>
    <td>DDDD</td>
    <td>001, 002, …, 366</td>
  </tr>
  <tr>
    <td>Day of week</td>
    <td>d</td>
    <td>0, 1, …, 6</td>
  </tr>
  <tr>
    <td></td>
    <td>do</td>
    <td>0th, 1st, …, 6th</td>
  </tr>
  <tr>
    <td></td>
    <td>dd</td>
    <td>Su, Mo, …, Sa</td>
  </tr>
  <tr>
    <td></td>
    <td>ddd</td>
    <td>Sun, Mon, …, Sat</td>
  </tr>
  <tr>
    <td></td>
    <td>dddd</td>
    <td>Sunday, Monday, …, Saturday</td>
  </tr>
  <tr>
    <td>Day of ISO week</td>
    <td>E</td>
    <td>1, 2, …, 7</td>
  </tr>
  <tr>
    <td>ISO week</td>
    <td>W</td>
    <td>1, 2, …, 53</td>
  </tr>
  <tr>
    <td></td>
    <td>Wo</td>
    <td>1st, 2nd, …, 53rd</td>
  </tr>
  <tr>
    <td></td>
    <td>WW</td>
    <td>01, 02, …, 53</td>
  </tr>
  <tr>
    <td>Year</td>
    <td>YY</td>
    <td>00, 01, …, 99</td>
  </tr>
  <tr>
    <td></td>
    <td>YYYY</td>
    <td>1900, 1901, …, 2099</td>
  </tr>
  <tr>
    <td>ISO week-numbering year</td>
    <td>GG</td>
    <td>00, 01, …, 99</td>
  </tr>
  <tr>
    <td></td>
    <td>GGGG</td>
    <td>1900, 1901, …, 2099</td>
  </tr>
  <tr>
    <td>AM/PM</td>
    <td>A</td>
    <td>AM, PM</td>
  </tr>
  <tr>
    <td></td>
    <td>a</td>
    <td>am, pm</td>
  </tr>
  <tr>
    <td></td>
    <td>aa</td>
    <td>a.m., p.m.</td>
  </tr>
  <tr>
    <td>Hour</td>
    <td>H</td>
    <td>0, 1, … 23</td>
  </tr>
  <tr>
    <td></td>
    <td>HH</td>
    <td>00, 01, … 23</td>
  </tr>
  <tr>
    <td></td>
    <td>h</td>
    <td>1, 2, …, 12</td>
  </tr>
  <tr>
    <td></td>
    <td>hh</td>
    <td>01, 02, …, 12</td>
  </tr>
  <tr>
    <td>Minute</td>
    <td>m</td>
    <td>0, 1, …, 59</td>
  </tr>
  <tr>
    <td></td>
    <td>mm</td>
    <td>00, 01, …, 59</td>
  </tr>
  <tr>
    <td>Second</td>
    <td>s</td>
    <td>0, 1, …, 59</td>
  </tr>
  <tr>
    <td></td>
    <td>ss</td>
    <td>00, 01, …, 59</td>
  </tr>
  <tr>
    <td>1/10 of second</td>
    <td>S</td>
    <td>0, 1, …, 9</td>
  </tr>
  <tr>
    <td>1/100 of second</td>
    <td>SS</td>
    <td>00, 01, …, 99</td>
  </tr>
  <tr>
    <td>Millisecond</td>
    <td>SSS</td>
    <td>000, 001, …, 999</td>
  </tr>
  <tr>
    <td>Timezone</td>
    <td>Z</td>
    <td>-01:00, +00:00, … +12:00</td>
  </tr>
  <tr>
    <td></td>
    <td>ZZ</td>
    <td>-0100, +0000, …, +1200</td>
  </tr>
  <tr>
    <td>Seconds timestamp</td>
    <td>X</td>
    <td>512969520</td>
  </tr>
  <tr>
    <td>Milliseconds timestamp</td>
    <td>x</td>
    <td>512969520900</td>
  </tr>
  </tbody>
</table>
  
