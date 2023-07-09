import { Component } from '@angular/core';
import { LibrosI } from 'src/app/models/interfaces';
import { LibrosService } from 'src/app/services/libros/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent {
  librosList: LibrosI[] = [];
  constructor(private service: LibrosService) {}

  ngOnInit(): void {
    this.service.getLibros().subscribe((data: any) => {
      console.log(data);
      this.librosList = [...data];
    })
  }
}

