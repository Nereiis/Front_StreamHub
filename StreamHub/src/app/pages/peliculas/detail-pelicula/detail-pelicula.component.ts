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
    });
  }

  //  getUser(resena: ResenasI) {
  //    this.authService.getUserById(String(resena.Username)).subscribe((data:any) => {
  //     this.username = data.Username;
  //    })
  //    console.log("username:" + this.username);
  //    //return resena.Username.Username;
  //  }

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
