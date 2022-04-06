import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddFeaturedAreaComponent } from './add-featured-area.component';

describe('AddFeaturedAreaComponent', () => {
  let component: AddFeaturedAreaComponent;
  let fixture: ComponentFixture<AddFeaturedAreaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeaturedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeaturedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
