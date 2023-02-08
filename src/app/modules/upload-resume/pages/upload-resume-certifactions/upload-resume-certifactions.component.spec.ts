import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumeCertifactionsComponent } from './upload-resume-certifactions.component';

describe('UploadResumeCertifactionsComponent', () => {
  let component: UploadResumeCertifactionsComponent;
  let fixture: ComponentFixture<UploadResumeCertifactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeCertifactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumeCertifactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
