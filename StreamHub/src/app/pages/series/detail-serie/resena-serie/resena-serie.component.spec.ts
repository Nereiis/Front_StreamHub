import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaSerieComponent } from './resena-serie.component';

describe('ResenaSerieComponent', () => {
  let component: ResenaSerieComponent;
  let fixture: ComponentFixture<ResenaSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenaSerieComponent]
    });
    fixture = TestBed.createComponent(ResenaSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
