import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumeProfileComponent } from './upload-resume-profile.component';

describe('UploadResumeProfileComponent', () => {
  let component: UploadResumeProfileComponent;
  let fixture: ComponentFixture<UploadResumeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
