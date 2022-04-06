import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactWidgetComponent } from './contact-widget.component';

describe('ContactWidgetComponent', () => {
  let component: ContactWidgetComponent;
  let fixture: ComponentFixture<ContactWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
