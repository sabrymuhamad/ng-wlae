import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripProgramSectionComponent } from './trip-program-section.component';

describe('TripProgramSectionComponent', () => {
  let component: TripProgramSectionComponent;
  let fixture: ComponentFixture<TripProgramSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripProgramSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripProgramSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
