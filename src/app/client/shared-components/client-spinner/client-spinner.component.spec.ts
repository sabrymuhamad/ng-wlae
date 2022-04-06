import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpinnerComponent } from './client-spinner.component';

describe('ClientSpinnerComponent', () => {
  let component: ClientSpinnerComponent;
  let fixture: ComponentFixture<ClientSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
