import { TestBed, async,  ComponentFixture } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from './auto-complete.module';
import { RebirthNGConfig } from '../rebirth-ng.config';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PositionService } from '../position/positioning.service';
import { WindowRef } from '../window-ref/window-ref.service';
import { DocumentRef } from '../window-ref/document-ref.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompletePopupComponent } from './auto-complete-popup.component';

const allSource = ['C#', 'C', 'C++', 'CPython', 'Java', 'JavaScript', 'Go', 'Python', 'Ruby', 'F#', 'TypeScript', 'SQL',
  'LiveScript', 'CoffeeScript'].toString();
@Component({ selector: 'test-cmp', template: '' })
class TestComponent {
  selectItem1 = 'C#';
  languages = allSource;
}

describe('AutoComplete', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        FormsModule
      ],
      providers: [
        { provide: RebirthNGConfig, useClass: RebirthNGConfig },
        { provide: PositionService, useClass: PositionService },
        { provide: WindowRef, useClass: WindowRef },
        { provide: DocumentRef, useClass: DocumentRef },
      ],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<input type="text" class="form-control" [delay]="0" name="language" id="languageFromSource" [minLength]="0"
                 [(ngModel)]="selectItem1" reAutoComplete [dataSource]="languages" #autoComplete1="autoComplete"/> 
                 <div class="input-group-addon" (click)="autoComplete1.toggle($event)">
                      <i class="glyphicon glyphicon-menu-down"></i>
                 </div>`
      }
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should show dropmenu when click toggle button', async(() => {

    fixture.whenStable().then(() => {
      const $input = fixture.debugElement.query(By.css('input'));
      expect($input.properties.value).toEqual('C#');
      fixture.detectChanges();

      const popDebugElement = fixture.debugElement.query(By.directive(AutoCompletePopupComponent));
      console.log(popDebugElement, fixture);
      expect(popDebugElement.styles.top).not.toBeUndefined();
      expect(popDebugElement.styles.left).not.toBeUndefined();
    });
  }));

});
