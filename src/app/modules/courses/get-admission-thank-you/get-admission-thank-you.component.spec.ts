import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdmissionThankYouComponent } from './get-admission-thank-you.component';

describe('GetAdmissionThankYouComponent', () => {
  let component: GetAdmissionThankYouComponent;
  let fixture: ComponentFixture<GetAdmissionThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdmissionThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdmissionThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
