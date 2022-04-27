import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAboutComponent } from './first-about.component';

describe('FirstAboutComponent', () => {
  let component: FirstAboutComponent;
  let fixture: ComponentFixture<FirstAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
