import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaPeliculaComponent } from './resena-pelicula.component';

describe('ResenaPeliculaComponent', () => {
  let component: ResenaPeliculaComponent;
  let fixture: ComponentFixture<ResenaPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenaPeliculaComponent]
    });
    fixture = TestBed.createComponent(ResenaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
