import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumeEducationComponent } from './upload-resume-education.component';

describe('UploadResumeEducationComponent', () => {
  let component: UploadResumeEducationComponent;
  let fixture: ComponentFixture<UploadResumeEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
