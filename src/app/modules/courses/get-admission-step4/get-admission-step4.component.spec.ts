import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdmissionStep4Component } from './get-admission-step4.component';

describe('GetAdmissionStep4Component', () => {
  let component: GetAdmissionStep4Component;
  let fixture: ComponentFixture<GetAdmissionStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdmissionStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdmissionStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
