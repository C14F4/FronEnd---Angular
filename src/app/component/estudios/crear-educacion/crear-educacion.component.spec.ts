import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEducacionComponent } from './crear-educacion.component';

describe('CrearEducacionComponent', () => {
  let component: CrearEducacionComponent;
  let fixture: ComponentFixture<CrearEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
