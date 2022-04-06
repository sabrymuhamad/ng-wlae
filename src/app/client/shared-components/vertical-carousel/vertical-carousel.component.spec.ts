import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerticalCarouselComponent } from './vertical-carousel.component';

describe('VerticalCarouselComponent', () => {
  let component: VerticalCarouselComponent;
  let fixture: ComponentFixture<VerticalCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
