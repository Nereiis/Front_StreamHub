import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSerieComponent } from './preview-serie.component';

describe('PreviewSerieComponent', () => {
  let component: PreviewSerieComponent;
  let fixture: ComponentFixture<PreviewSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewSerieComponent]
    });
    fixture = TestBed.createComponent(PreviewSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
