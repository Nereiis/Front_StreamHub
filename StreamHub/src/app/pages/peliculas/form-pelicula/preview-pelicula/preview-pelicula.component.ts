import { Component, Input } from '@angular/core';
import { PeliculasI } from 'src/app/models/interfaces';

@Component({
  selector: 'app-preview-pelicula',
  templateUrl: './preview-pelicula.component.html',
  styleUrls: ['./preview-pelicula.component.scss']
})
export class PreviewPeliculaComponent {
  @Input() pelicula!: PeliculasI;
}
