import { Component, Input } from '@angular/core';
import { SeriesI } from 'src/app/models/interfaces';

@Component({
  selector: 'app-preview-serie',
  templateUrl: './preview-serie.component.html',
  styleUrls: ['./preview-serie.component.scss']
})
export class PreviewSerieComponent {
  @Input() serie!: SeriesI;
}
