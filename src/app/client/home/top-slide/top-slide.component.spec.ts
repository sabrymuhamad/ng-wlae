import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSlideComponent } from './top-slide.component';

describe('TopSlideComponent', () => {
  let component: TopSlideComponent;
  let fixture: ComponentFixture<TopSlideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
