import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { AutoCompleteDirective } from '../../exports';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 're-auto-complete-demo',
  templateUrl: './auto-complete-demo.component.html',
  styleUrls: ['./auto-complete-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteDemoComponent {
  selectItem1 = 'C#';
  selectItem2: string;
  selectItem3: string;
  selectItem4: any;
  selectItem5: string;
  mutipleItems: string[] = ['C#', 'C', 'C++', 'CPython', 'Java'];
  isDisabled = false;
  icons = ['glyphicon-asterisk', 'glyphicon glyphicon-plus', 'glyphicon glyphicon-euro', 'glyphicon glyphicon-eu'];
  languages = ['C#', 'C', 'C++', 'CPython', 'Java', 'JavaScript', 'Go', 'Python', 'Ruby', 'F#', 'TypeScript', 'SQL',
    'LiveScript', 'CoffeeScript'];

  onSearchLocal = (term) => of(this.languages
    .filter(lang => lang.toLowerCase().indexOf(term.toLowerCase()) !== -1));


  onSearchObject = (term) => of(this.languages
    .map((lang, index) => ({ label: lang, id: index }))
    .filter(lang => lang.label.toLowerCase().indexOf(term.toLowerCase()) !== -1)
  );

  searchWiki = (term) => {
    return this.httpClient
      .jsonp(`https://en.wikipedia.org/w/api.php?search=${term}&action=opensearch&format=json`,
        'callback')
      .map(response => <string[]> response[1]);
  };

  onSearch = (term) => {
    return this.searchWiki(term);
  };

  constructor(private httpClient: HttpClient) {

  }

  getIcon(index) {
    return this.icons[index % this.icons.length];
  }

}
