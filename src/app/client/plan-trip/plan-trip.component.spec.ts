import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanTripComponent } from './plan-trip.component';

describe('PlanTripComponent', () => {
  let component: PlanTripComponent;
  let fixture: ComponentFixture<PlanTripComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
