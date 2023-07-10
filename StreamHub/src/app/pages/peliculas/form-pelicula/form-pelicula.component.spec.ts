import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPeliculaComponent } from './form-pelicula.component';

describe('FormPeliculaComponent', () => {
  let component: FormPeliculaComponent;
  let fixture: ComponentFixture<FormPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPeliculaComponent]
    });
    fixture = TestBed.createComponent(FormPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
