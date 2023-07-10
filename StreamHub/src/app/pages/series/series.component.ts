import { SeriesService } from 'src/app/services/series/series.service';
import { SeriesI } from './../../models/interfaces';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  seriesList: SeriesI[] = [];
  constructor(private service: SeriesService, public authService: AuthService) {}

  ngOnInit(): void {
    this.service.getSeries().subscribe((data: any) => {
      console.log(data);
      this.seriesList = [...data];
    })
  }
}
