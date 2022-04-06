import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTourRequestFormComponent } from './pub-tour-request-form.component';

describe('PubTourRequestFormComponent', () => {
  let component: PubTourRequestFormComponent;
  let fixture: ComponentFixture<PubTourRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubTourRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTourRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
