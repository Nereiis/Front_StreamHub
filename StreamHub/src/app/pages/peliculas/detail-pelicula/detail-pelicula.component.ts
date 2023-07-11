import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PeliculasI, ResenasI, UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-pelicula.component.html',
  styleUrls: ['./detail-pelicula.component.scss']
})
export class DetailPeliculaComponent {
  pelicula!: PeliculasI;
  id!: string;
  user!: UsersI;
  favoritos!: string[];
  // username?: string;
  
  constructor(private service: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = String(params.get('id'));
    })
    this.service.getPeliculaById(this.id).subscribe((data:any) => {
      this.pelicula = data;
      let sum:number = 0;
      for (let i = 0; i < this.pelicula.Resena.length; i++) {
        sum += this.pelicula.Resena[i].Valoracion;
      }
      if(this.pelicula.Resena.length === 0) {
        this.pelicula.Valoracion = 0;
      } else {
        this.pelicula.Valoracion = sum/this.pelicula.Resena.length;
      }
    })
    this.user = JSON.parse(String(this.authService.getCurrentUser()));
    this.authService.getUserById(this.user._id).subscribe((data:any) => {
      this.favoritos = data.PeliculasFavoritas;
    })
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

  addFavoritos(){
    this.authService.getUserById(this.user._id).subscribe((data:any) => {
      if(!data.PeliculasFavoritas.includes(this.pelicula._id)) {
        this.favoritos.push(this.pelicula._id);
        this.authService.addPeliculaFavorita(this.user._id, this.pelicula._id).subscribe();
      } else {
        const index = this.favoritos.indexOf(this.pelicula._id, 0);
        if (index > -1) {
          this.favoritos.splice(index, 1);
          this.authService.removePeliculaFavorita(this.user._id, this.pelicula._id).subscribe();
        }
      }
    })
  }
  
}
