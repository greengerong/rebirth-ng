import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs/Observable/of';
import { Jsonp, URLSearchParams } from '@angular/http';
import { AutoCompleteDirective } from '../../exports/auto-complete/auto-complete.directive';


@Component({
  selector: 're-auto-complete-demo',
  templateUrl: './auto-complete-demo.component.html',
  styleUrls: ['./auto-complete-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteDemoComponent implements OnInit {
  selectItem1: string;
  selectItem2: string;
  selectItem3: string;
  selectItem4: string;
  selectItem5: string;
  mutipleItems: string[] = ['C#', 'C', 'C++', 'CPython', 'Java'];
  isDisabled = false;
  icons = ['glyphicon-asterisk', 'glyphicon glyphicon-plus', 'glyphicon glyphicon-euro', 'glyphicon glyphicon-eu'];
  languages = ['C#', 'C', 'C++', 'CPython', 'Java', 'JavaScript', 'Go', 'Python', 'Ruby', 'F#', 'TypeScript', 'SQL',
    'LiveScript', 'CoffeeScript'];

  constructor(private jsonp: Jsonp) {

  }

  ngOnInit() {
  }

  getIcon(index) {
    return this.icons[index % this.icons.length];
  }


  onSearchLocal(term) {
    return of(this.languages.filter(lang => lang.toLowerCase().indexOf(term.toLowerCase()) !== -1));
  }

  onSearchObject(term) {
    return of(this.languages
      .map((lang, index) => ({ label: lang, id: index }))
      .filter(lang => lang.label.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    );
  }

  onMutipleSearch() {
    console.log(this.selectItem5);
    if (this.mutipleItems.indexOf(this.selectItem5) === -1) {
      this.mutipleItems.push(this.selectItem5);
    }

    this.selectItem5 = '';
  }

  removeLabel(label) {
    if (this.mutipleItems.indexOf(label) !== -1) {
      this.mutipleItems = this.mutipleItems.filter(item => item !== label);
    }
  }

  onSearch(term) {
    return this.searchWiki(term);
  }

  searchWiki(term) {
    const params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get('https://en.wikipedia.org/w/api.php', { search: params })
      .map(response => <string[]> response.json()[1]);
  }

  onMmutipleSearchBoxBackspace($event: Event, autoComplete: AutoCompleteDirective) {
    if (!(<any>$event.target).value && this.mutipleItems.length) {
      this.mutipleItems.pop();
      setTimeout(() => autoComplete.positionPopup(), 0);
    }
  }
}
