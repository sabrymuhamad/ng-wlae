import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogItemComponent } from './blog-item.component';

describe('BlogItemComponent', () => {
  let component: BlogItemComponent;
  let fixture: ComponentFixture<BlogItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
