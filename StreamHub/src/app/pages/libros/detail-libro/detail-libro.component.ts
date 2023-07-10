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

  constructor (private service: LibrosService, private activatedRouter: ActivatedRoute, private router: Router, public authService: AuthService) {}

  ngOnInit(): void{
    this.activatedRouter.paramMap.subscribe((params) => {
      this.id = String(params.get("id"));
    })
    this.service.getLibroById(this.id).subscribe((data:any) => {
      this.libro = data;
    })
    this.user = JSON.parse(String(this.authService.getCurrentUser()));
    console.log(this.user);
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
    if(!this.user.LibrosFavoritos.includes(this.libro._id)) {
      this.user.LibrosFavoritos.push(this.libro._id);
      this.authService.addLibroFavorito(this.user._id, this.libro._id).subscribe();
    }
  }

}
