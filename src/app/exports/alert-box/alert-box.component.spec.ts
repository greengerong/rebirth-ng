import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertBoxModule } from './alert-box.module';
import { AlertBoxComponent } from './alert-box.component';
import { RebirthNGConfig } from '../rebirth-ng.config';


describe('AlertBox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AlertBoxModule
      ],
      providers: [
        { provide: RebirthNGConfig, useClass: RebirthNGConfig }
      ],
      declarations: [],
    });
  });

  it('should init default config', async(() => {
    const fixture = TestBed.createComponent(AlertBoxComponent);

    expect(fixture.componentInstance.type).toEqual('info');
    expect(fixture.componentInstance.closable).toBeFalsy();

  }));

  it('should close alert box when click close button', async(() => {
    const fixture = TestBed.createComponent(AlertBoxComponent);
    fixture.componentInstance.closable = true;
    fixture.detectChanges();
    let closed = false;
    fixture.componentInstance.close.subscribe(() => closed = true);
    fixture.debugElement.query(By.css('.close')).triggerEventHandler('click', null);

    expect(closed).toBeTruthy();

  }));

});
