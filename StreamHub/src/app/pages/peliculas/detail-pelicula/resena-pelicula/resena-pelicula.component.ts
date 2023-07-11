import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResenasI, UsersI } from 'src/app/models/interfaces';
import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';
import { ResenaService } from 'src/app/services/resena/resena.service';

@Component({
  selector: 'app-resena-pelicula',
  templateUrl: './resena-pelicula.component.html',
  styleUrls: ['./resena-pelicula.component.scss']
})
export class ResenaPeliculaComponent {
  @Input() idPelicula!: string;
  resenaForm!: FormGroup;
  submitted: boolean = false;
  resena!: ResenasI;
  value: number = 3;

  constructor(private authService: AuthService, private peliculaService: PeliculasService, private resenaService: ResenaService, private form: FormBuilder, private router: Router) {}

  ngOnInit() : void {
    this.resenaForm = this.form.group({
      Titulo: [this.resena?.Titulo, [Validators.required]],
      Comentario: [this.resena?.Comentario, [Validators.required]],
      Valoracion: [this.resena?.Valoracion, [Validators.required]]
    });

    this.resenaForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.resena = data;
    })

    console.log(this.idPelicula);
  }

  onClick() {
    this.submitted = true;
    this.resena.Username = JSON.parse(String(this.authService.getCurrentUser()));
    if(this.resenaForm.valid) {
      this.resenaService.postResena(this.resena).subscribe((data:any) => {
        this.resenaForm.reset();
        this.submitted = false;
        console.log(data._id);
        this.peliculaService.addReviewToPelicula(this.idPelicula, data._id).subscribe((data2:any) => {
          window.location.reload();
        });
      });
    }
  }
}
