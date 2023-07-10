import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLibroComponent } from './detail-libro.component';

describe('DetailLibroComponent', () => {
  let component: DetailLibroComponent;
  let fixture: ComponentFixture<DetailLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailLibroComponent]
    });
    fixture = TestBed.createComponent(DetailLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
