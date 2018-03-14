import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SiteTestComponent } from './site-test.component';

describe('SiteTestComponent', () => {
  let component: SiteTestComponent;
  let fixture: ComponentFixture<SiteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Hello Test" in paragraph', () => {
    let debugElement = fixture.debugElement;
    fixture.detectChanges();
    const para = debugElement.query(By.css('p#test')).nativeElement;
    expect(para.textContent).toContain('Hello Test');
  });

});
