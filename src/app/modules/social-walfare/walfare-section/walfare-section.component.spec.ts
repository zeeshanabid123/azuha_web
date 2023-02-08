import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalfareSectionComponent } from './walfare-section.component';

describe('WalfareSectionComponent', () => {
  let component: WalfareSectionComponent;
  let fixture: ComponentFixture<WalfareSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalfareSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalfareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
