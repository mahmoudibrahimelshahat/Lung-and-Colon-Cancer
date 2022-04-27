import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAboutComponent } from './second-about.component';

describe('SecondAboutComponent', () => {
  let component: SecondAboutComponent;
  let fixture: ComponentFixture<SecondAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
