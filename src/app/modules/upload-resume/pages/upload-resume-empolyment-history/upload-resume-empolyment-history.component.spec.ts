import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumeEmpolymentHistoryComponent } from './upload-resume-empolyment-history.component';

describe('UploadResumeEmpolymentHistoryComponent', () => {
  let component: UploadResumeEmpolymentHistoryComponent;
  let fixture: ComponentFixture<UploadResumeEmpolymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeEmpolymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumeEmpolymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
