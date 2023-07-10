import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPeliculaComponent } from './preview-pelicula.component';

describe('PreviewPeliculaComponent', () => {
  let component: PreviewPeliculaComponent;
  let fixture: ComponentFixture<PreviewPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewPeliculaComponent]
    });
    fixture = TestBed.createComponent(PreviewPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
