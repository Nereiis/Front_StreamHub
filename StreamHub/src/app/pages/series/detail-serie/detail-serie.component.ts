import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeriesI, UsersI } from 'src/app/models/interfaces';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.scss']
})
export class DetailSerieComponent {
  serie!: SeriesI;
  id!: string;
  user!: UsersI;
  value: number = 3;
  
  constructor(private service: SeriesService, private activatedRoute: ActivatedRoute, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    this.service.getSerieById(this.id).subscribe((data:any) => {
      this.serie = data;
      let sum:number = 0;
      for (let i = 0; i < this.serie.Resena.length; i++) {
        sum += this.serie.Resena[i].Valoracion;
      }
      if(this.serie.Resena.length === 0) {
        this.serie.Valoracion = 0;
      } else {
        this.serie.Valoracion = sum/this.serie.Resena.length;
      }
    })
    this.user = JSON.parse(String(this.authService.getCurrentUser()));
    //console.log(this.user);
  }

  deleteSerie() {
    this.service.deleteSerie(this.id).subscribe((data:any) => {
      //alert("producto eliminado");
      this.router.navigate(['/series']);
    })
  }

  editSerie(serie:SeriesI) {
    this.service.editSerie(serie);
    this.router.navigate(['/gestionSeries']);
  }

  addFavoritos(){
    if(!this.user.SeriesFavoritas.includes(this.serie._id)) {
      this.user.SeriesFavoritas.push(this.serie._id);
      this.authService.addSerieFavorita(this.user._id, this.serie._id).subscribe();
    }
  }
}
