import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpcomingGroupToursComponent } from './upcoming-group-tours.component';

describe('UpcomingGroupToursComponent', () => {
  let component: UpcomingGroupToursComponent;
  let fixture: ComponentFixture<UpcomingGroupToursComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingGroupToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingGroupToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
