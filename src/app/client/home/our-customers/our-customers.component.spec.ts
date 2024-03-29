import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OurCustomersComponent } from './our-customers.component';

describe('OurCustomersComponent', () => {
  let component: OurCustomersComponent;
  let fixture: ComponentFixture<OurCustomersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
