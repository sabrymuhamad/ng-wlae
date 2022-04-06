import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TripProgramCarouselComponent } from './trip-program-carousel.component';

describe('TripProgramCarouselComponent', () => {
  let component: TripProgramCarouselComponent;
  let fixture: ComponentFixture<TripProgramCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TripProgramCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripProgramCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
