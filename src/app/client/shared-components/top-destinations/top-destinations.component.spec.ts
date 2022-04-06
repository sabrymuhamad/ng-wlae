import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopDestinationsComponent } from './top-destinations.component';

describe('TopDestinationsComponent', () => {
  let component: TopDestinationsComponent;
  let fixture: ComponentFixture<TopDestinationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
