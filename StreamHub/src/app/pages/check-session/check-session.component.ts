import { Component } from '@angular/core';
import { LibrosI, PeliculasI, SeriesI, UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LibrosService } from 'src/app/services/libros/libros.service';
import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-check-session',
  templateUrl: './check-session.component.html',
  styleUrls: ['./check-session.component.scss']
})
export class CheckSessionComponent {
  
  user!: UsersI;
  seriesFav: string[] = []; 
  pelisFav: string[] = [];
  librosFav: string[] = [];

  libros: LibrosI[] = [];
  series: SeriesI[] = [];
  pelis: PeliculasI[] = [];

  constructor( public authService: AuthService, public libroService: LibrosService, public serieService: SeriesService, public pelisService: PeliculasService ) {}

  ngOnInit(): void{
    this.user = JSON.parse(String(this.authService.getCurrentUser()));
    this.authService.getUserById(this.user._id).subscribe((data:any) => {

      this.seriesFav = data.SeriesFavoritas;
      this.pelisFav = data.PeliculasFavoritas;
      this.librosFav = data.LibrosFavoritos;
      console.log(this.seriesFav);
      console.log(this.pelisFav);
      console.log(this.librosFav);    
      
      for(let libroId of this.librosFav) {
        this.libroService.getLibroById(libroId).subscribe((data:any) => {
          this.libros.push(data);
        })
      }

      for(let serieId of this.seriesFav) {
        this.serieService.getSerieById(serieId).subscribe((data:any) => {
          this.series.push(data);
        })
      }

      for(let peliId of this.pelisFav) {
        this.pelisService.getPeliculaById(peliId).subscribe((data:any) => {
          this.pelis.push(data);
        })
      }
    })
  }




}
