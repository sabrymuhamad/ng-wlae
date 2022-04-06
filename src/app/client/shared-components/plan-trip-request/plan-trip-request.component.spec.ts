import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanTripRequestComponent } from './plan-trip-request.component';

describe('PlanTripRequestComponent', () => {
  let component: PlanTripRequestComponent;
  let fixture: ComponentFixture<PlanTripRequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTripRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTripRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
