import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSingleFaqComponent } from './manage-single-faq.component';

describe('ManageSingleFaqComponent', () => {
  let component: ManageSingleFaqComponent;
  let fixture: ComponentFixture<ManageSingleFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSingleFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSingleFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
