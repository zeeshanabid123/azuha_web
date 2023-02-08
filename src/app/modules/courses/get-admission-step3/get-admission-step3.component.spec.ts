import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdmissionStep3Component } from './get-admission-step3.component';

describe('GetAdmissionStep3Component', () => {
  let component: GetAdmissionStep3Component;
  let fixture: ComponentFixture<GetAdmissionStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdmissionStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdmissionStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
