import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageToursComponent } from './manage-tours.component';

describe('ManageToursComponent', () => {
  let component: ManageToursComponent;
  let fixture: ComponentFixture<ManageToursComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
