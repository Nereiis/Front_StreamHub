import { Component } from '@angular/core';
import { PeliculasI } from 'src/app/models/interfaces';
import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  peliculasList: PeliculasI[] = [];
  currentSlideIndex: number = 0;

  constructor(private service: PeliculasService) {}

  ngOnInit(): void {
    this.service.getPeliculas().subscribe((data: any) => {
      console.log(data);
      this.peliculasList = [...data];
    });
  }


}

