import { SeriesService } from 'src/app/services/series/series.service';
import { SeriesI } from './../../models/interfaces';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  seriesList!: SeriesI[];
  categoriaList: SeriesI[] = [];
  filtroList!: SeriesI[];
  valueF:string = "";

  constructor(private service: SeriesService, public authService: AuthService) {}

  ngOnInit(): void {
    this.service.getSeries().subscribe((data: any) => {
      this.seriesList = [...data];
      this.filtroList = [...data];
    })
  }

  filtrarDatos(ev:string){
    if(this.categoriaList.length > 0){
      this.filtroList = this.categoriaList.filter( (item) =>
         (item.Nombre.toLowerCase().includes(ev.toLowerCase()))
        )
    } else{
      
      this.filtroList = this.seriesList.filter( (item) =>
      (item.Nombre.toLowerCase().includes(ev.toLowerCase()))
     )
    }
  }

  filtrarCategorias(categoria:string){
    this.valueF = ""
    if(categoria == ""){
      this.categoriaList = [];
      this.filtroList = [...this.seriesList];
    } else{
    this.categoriaList=this.seriesList.filter((item) =>
    item.Genero.includes(categoria)
    )
    
    this.filtroList=this.seriesList.filter((item) => 
    item.Genero.includes(categoria)

    )
  }
  }


}
