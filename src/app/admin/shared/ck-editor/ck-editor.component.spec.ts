import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CKEditorComponent } from './ck-editor.component';

describe('CKEditorComponent', () => {
  let component: CKEditorComponent;
  let fixture: ComponentFixture<CKEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CKEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CKEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
