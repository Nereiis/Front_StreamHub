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
  

  constructor( public authService: AuthService ) {}

  ngOnInit(): void{
    this.user = JSON.parse(String(this.authService.getCurrentUser()));
    this.authService.getUserById(this.user._id).subscribe((data:any) => {

      this.seriesFav = data.SeriesFavoritas;
      this.pelisFav = data.PeliculasFavoritas;
      this.librosFav = data.LibrosFavoritos;
      console.log(this.seriesFav);
      console.log(this.pelisFav);
      console.log(this.librosFav);    
      
      
    })
  }




}
