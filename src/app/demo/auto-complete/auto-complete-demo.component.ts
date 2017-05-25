import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { URLSearchParams, Jsonp } from '@angular/http';
import { AutoCompleteDirective } from '../../exports';


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
  selectItem4: string;
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
  )


  searchWiki = (term) => {
    const params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get('https://en.wikipedia.org/w/api.php', { search: params })
      .map(response => <string[]> response.json()[1]);
  }

  onSearch = (term) => {
    return this.searchWiki(term);
  }

  constructor(private jsonp: Jsonp) {

  }

  getIcon(index) {
    return this.icons[index % this.icons.length];
  }

}
