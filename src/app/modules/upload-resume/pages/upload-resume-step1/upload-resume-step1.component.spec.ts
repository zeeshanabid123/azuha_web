import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumeStep1Component } from './upload-resume-step1.component';

describe('UploadResumeStep1Component', () => {
  let component: UploadResumeStep1Component;
  let fixture: ComponentFixture<UploadResumeStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumeStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
