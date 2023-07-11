import { Component } from '@angular/core';
import { LibrosI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LibrosService } from 'src/app/services/libros/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent {
  librosList!: LibrosI[];
  categoriaList: LibrosI[] = [];
  filtroList!: LibrosI[];
  valueF:string = "";

  constructor(private service: LibrosService, public authService: AuthService) {}

  ngOnInit(): void {
    this.service.getLibros().subscribe((data: any) => {
      this.librosList = [...data];
      this.filtroList = [...data];
    })
  }

  filtrarDatos(ev:string){
    if(this.categoriaList.length > 0){
      this.filtroList = this.categoriaList.filter( (item) =>
         (item.Nombre.toLowerCase().includes(ev.toLowerCase()))
        )
    } else{
      
      this.filtroList = this.librosList.filter( (item) =>
      (item.Nombre.toLowerCase().includes(ev.toLowerCase()))
     )
    }
  }

  filtrarCategorias(categoria:string){
    this.valueF = ""
    if(categoria == ""){
      this.categoriaList = [];
      this.filtroList = [...this.librosList];
    } else{
      this.categoriaList=this.librosList.filter((item) =>
        item.Genero.includes(categoria)
      )
    
      this.filtroList=this.librosList.filter((item) => 
      item.Genero.includes(categoria)
      )
    }
  }
}

