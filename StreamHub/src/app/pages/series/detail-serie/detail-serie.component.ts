import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeriesI } from 'src/app/models/interfaces';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.scss']
})
export class DetailSerieComponent {
  serie!: SeriesI;
  id!: string;
  
  constructor(private service: SeriesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    this.service.getSerieById(this.id).subscribe((data:any) => {
      this.serie = data;
    });
  }

  deleteSerie() {
    this.service.deleteSerie(this.id).subscribe((data:any) => {
      //alert("producto eliminado");
      this.router.navigate(['/series']);
    })
  }
}
