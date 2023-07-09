import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PeliculasI } from 'src/app/models/interfaces';
import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-pelicula.component.html',
  styleUrls: ['./detail-pelicula.component.scss']
})
export class DetailPeliculaComponent {
  pelicula!: PeliculasI;
  id!: string;
  
  constructor(private service: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    this.service.getPeliculaById(this.id).subscribe((data:any) => {
      this.pelicula = data;
    });
  }

  deletePelicula() {
    this.service.deletePelicula(this.id).subscribe((data:any) => {
      //alert("producto eliminado");
      this.router.navigate(['/peliculas']);
    })
  }

  editPelicula(pelicula:PeliculasI) {
    this.service.editPelicula(pelicula);
    this.router.navigate(['/gestionPeliculas']);
  }
}
