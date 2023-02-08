import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdmissionStep2Component } from './get-admission-step2.component';

describe('GetAdmissionStep2Component', () => {
  let component: GetAdmissionStep2Component;
  let fixture: ComponentFixture<GetAdmissionStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdmissionStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdmissionStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
