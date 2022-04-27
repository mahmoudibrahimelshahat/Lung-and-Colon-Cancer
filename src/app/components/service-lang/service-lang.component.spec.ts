import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLangComponent } from './service-lang.component';

describe('ServiceLangComponent', () => {
  let component: ServiceLangComponent;
  let fixture: ComponentFixture<ServiceLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
