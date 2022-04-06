import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanItemsComponent } from './plan-items.component';

describe('PlanItemsComponent', () => {
  let component: PlanItemsComponent;
  let fixture: ComponentFixture<PlanItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
