import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToursCalendarComponent } from './tours-calendar.component';

describe('ToursCalendarComponent', () => {
  let component: ToursCalendarComponent;
  let fixture: ComponentFixture<ToursCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
