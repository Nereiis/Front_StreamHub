import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosI } from 'src/app/models/interfaces';
import { LibrosService } from 'src/app/services/libros/libros.service';


@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styleUrls: ['./edit-libro.component.scss']
})
export class EditLibroComponent {

  id!: string;
  libro!: LibrosI;
  submitted: boolean = false;
  libroForm!: FormGroup;

  genres: Array<any> = [
    { name: 'Manga', value: 'Manga' },
    { name: 'Narrativa de humor', value: 'Narrativa de humor' },
    { name: 'Infantil', value: 'Infantil' },
    { name: 'Novela de Terror', value: 'Novela de Terror' },
    { name: 'Novela romántica', value: 'Novela romantica' },
    { name: 'Narrativa fantástica', value: 'Narrativa fantastica' },
    { name: 'Novela negra', value: 'Novela ' },
    { name: 'Novela histórica', value: 'Novela historica' }
  ];

  constructor (private libroApi: LibrosService, private form: FormBuilder, private router:Router ){
    this.libro = this.libroApi.getOneLibro();
    this.id = this.libroApi.getId();
  }

  ngOnInit(): void {
    this.libroForm = this.form.group({
      Portada: [this.libro?.Portada, [Validators.required]],
      Nombre: [this.libro?.Nombre, [Validators.required]],
      Autor: [this.libro?.Autor, [Validators.required]],
      Genero: [this.libro?.Genero, [Validators.required]],
      Descripcion: [this.libro?.Descripcion, [Validators.required]],
    })
    this.libroForm.valueChanges.subscribe((data) => {
      this.libro = data;
    })
  }

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.libro.Genero.push(event.target.value);
    } else  {
      const index = this.libro.Genero.indexOf(event.target.value);
      if (index > -1) {
        this.libro.Genero.splice(index, 1);
      }
    }
  }

  editLibro(){
    this.submitted = true;
    if(this.libroForm.valid){
      this.libroApi.putLibro(this.id, this.libro,).subscribe((data) =>{
        this.libroForm.reset();
        this.submitted = false;
        this.router.navigate(["/libros"]);
      })
    };
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.libroApi.resetLibroData();
    this.id = "";
  }


}
