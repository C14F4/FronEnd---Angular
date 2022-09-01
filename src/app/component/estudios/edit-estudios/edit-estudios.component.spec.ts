import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstudiosComponent } from './edit-estudios.component';

describe('EditEstudiosComponent', () => {
  let component: EditEstudiosComponent;
  let fixture: ComponentFixture<EditEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
