import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeliculaComponent } from './detail-pelicula.component';

describe('DetailPeliculaComponent', () => {
  let component: DetailPeliculaComponent;
  let fixture: ComponentFixture<DetailPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPeliculaComponent]
    });
    fixture = TestBed.createComponent(DetailPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
