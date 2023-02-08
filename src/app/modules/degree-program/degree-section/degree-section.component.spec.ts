import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeSectionComponent } from './degree-section.component';

describe('DegreeSectionComponent', () => {
  let component: DegreeSectionComponent;
  let fixture: ComponentFixture<DegreeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
