import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFaqsComponent } from './manage-faqs.component';

describe('ManageFaqsComponent', () => {
  let component: ManageFaqsComponent;
  let fixture: ComponentFixture<ManageFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
