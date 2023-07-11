import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResenasI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResenaService } from 'src/app/services/resena/resena.service';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-resena-serie',
  templateUrl: './resena-serie.component.html',
  styleUrls: ['./resena-serie.component.scss']
})
export class ResenaSerieComponent {
  @Input() idSerie!: string;
  resenaForm!: FormGroup;
  submitted: boolean = false;
  resena!: ResenasI;
  value: number = 3;

  constructor(private authService: AuthService, private serieService: SeriesService, private resenaService: ResenaService, private form: FormBuilder, private router: Router) {}

  ngOnInit() : void {
    this.resenaForm = this.form.group({
      Titulo: [this.resena?.Titulo, [Validators.required]],
      Comentario: [this.resena?.Comentario, [Validators.required]],
      Valoracion: [this.resena?.Valoracion, [Validators.required]]
    });

    this.resenaForm.valueChanges.subscribe((data) => {
      this.resena = data;
    })

    console.log(this.idSerie);
  }

  onClick() {
    this.submitted = true;
    this.resena.Username = JSON.parse(String(this.authService.getCurrentUser()));
    if(this.resenaForm.valid) {
      this.resenaService.postResena(this.resena).subscribe((data:any) => {
        this.resenaForm.reset();
        this.submitted = false;
        console.log(data._id);
        this.serieService.addReviewToSerie(this.idSerie, data._id).subscribe((data2:any) => {
          window.location.reload();
        });
      });
    }
  }
}
