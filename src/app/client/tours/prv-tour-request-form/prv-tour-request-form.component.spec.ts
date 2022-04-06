import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvTourRequestFormComponent } from './prv-tour-request-form.component';

describe('PrvTourRequestFormComponent', () => {
  let component: PrvTourRequestFormComponent;
  let fixture: ComponentFixture<PrvTourRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvTourRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvTourRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
