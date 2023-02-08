import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumePreviewComponent } from './upload-resume-preview.component';

describe('UploadResumePreviewComponent', () => {
  let component: UploadResumePreviewComponent;
  let fixture: ComponentFixture<UploadResumePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
