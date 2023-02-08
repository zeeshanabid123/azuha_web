import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingDetailsComponent } from './up-coming-details.component';

describe('UpComingDetailsComponent', () => {
  let component: UpComingDetailsComponent;
  let fixture: ComponentFixture<UpComingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
