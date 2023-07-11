import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LibrosI, UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LibrosService } from 'src/app/services/libros/libros.service';

@Component({
  selector: 'app-detail-libro',
  templateUrl: './detail-libro.component.html',
  styleUrls: ['./detail-libro.component.scss']
})
export class DetailLibroComponent {
  libro!: LibrosI;
  id!: string;
  user!: UsersI;
  favoritos!: string[];

  constructor (private service: LibrosService, private activatedRouter: ActivatedRoute, private router: Router, public authService: AuthService) {}

  ngOnInit(): void{
    this.user = JSON.parse(String(this.authService.getCurrentUser()));

    this.activatedRouter.paramMap.subscribe((params) => {
      this.id = String(params.get("id"));

    })
    this.service.getLibroById(this.id).subscribe((data:any) => {
      this.libro = data;
      let sum:number = 0;
      for (let i = 0; i < this.libro.Resena.length; i++) {
        sum += this.libro.Resena[i].Valoracion;
      }
      if(this.libro.Resena.length === 0) {
        this.libro.Valoracion = 0;
      } else {
        this.libro.Valoracion = sum/this.libro.Resena.length;
      }
      console.log(this.libro);
      
    })
    this.authService.getUserById(this.user._id).subscribe((data:any) => {
      this.favoritos = data.LibrosFavoritos;
    })
    //console.log(this.user);
  }

  deleteLibro(){
    this.service.deleteLibro(this.id).subscribe((data:any) => {
      this.router.navigate(["/libros"]);
    })
  }

  editLibro(libro: LibrosI){
    this.service.editLibro(libro);
    this.router.navigate(["/editarLibro"]);

  }

  addFavoritos(){
    this.authService.getUserById(this.user._id).subscribe((data:any) => {
      if(!data.LibrosFavoritos.includes(this.libro._id)) {
        this.favoritos.push(this.libro._id);
        this.authService.addLibroFavorito(this.user._id, this.libro._id).subscribe();
      } else {
        const index = this.favoritos.indexOf(this.libro._id, 0);
        if (index > -1) {
          this.favoritos.splice(index, 1);
          this.authService.removeLibroFavorita(this.user._id, this.libro._id).subscribe();
        }
      }
    })
  }

  getUsername(id:UsersI) {
    console.log(id.Username);
  }

}
