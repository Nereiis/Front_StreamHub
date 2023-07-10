import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';
import { PeliculasI } from 'src/app/models/interfaces';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {

  peliculasList!: PeliculasI[];
  categoriaList: PeliculasI[] = [];
  filtroList!: PeliculasI[];
  valueF:string = "";

  constructor(private service: PeliculasService, public authService: AuthService) {}

  ngOnInit(): void {
    this.service.getPeliculas().subscribe((data: any) => {
      this.peliculasList = [...data];
      this.filtroList = [...data];
    })
  }

  filtrarDatos(ev:string){
    if(this.categoriaList.length > 0){
      this.filtroList = this.categoriaList.filter( (item) =>
         (item.Nombre.toLowerCase().includes(ev.toLowerCase()))
        )
    } else{
      
      this.filtroList = this.peliculasList.filter( (item) =>
      (item.Nombre.toLowerCase().includes(ev.toLowerCase()))
     )
    }
  }


  filtrarCategorias(categoria:string){
    this.valueF = ""
    if(categoria == ""){
      this.categoriaList = [];
      this.filtroList = [...this.peliculasList];
    } else{
    this.categoriaList=this.peliculasList.filter((item) =>
    item.Genero.includes(categoria)
    )
    
    this.filtroList=this.peliculasList.filter((item) => 
    item.Genero.includes(categoria)

    )
  }
  }

}