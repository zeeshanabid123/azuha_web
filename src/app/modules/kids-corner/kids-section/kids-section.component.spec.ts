import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsSectionComponent } from './kids-section.component';

describe('KidsSectionComponent', () => {
  let component: KidsSectionComponent;
  let fixture: ComponentFixture<KidsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
