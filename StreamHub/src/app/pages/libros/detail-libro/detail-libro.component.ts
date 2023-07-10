import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LibrosI } from 'src/app/models/interfaces';
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

  constructor (private service: LibrosService, private activatedRouter: ActivatedRoute, private router: Router, public authService: AuthService) {}

  ngOnInit(): void{
    this.activatedRouter.paramMap.subscribe((params) => {
      this.id = String(params.get("id"));
    })
    this.service.getLibroById(this.id).subscribe((data:any) => {
      this.libro = data;
    })
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

}
