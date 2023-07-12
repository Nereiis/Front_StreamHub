import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error:any;
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private form: FormBuilder, private authApi: AuthService, private router: Router) {}

  ngOnInit() : void {
    this.registerForm = this.form.group({
      Username: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]],
      PeliculasFavoritas: [[]],
      SeriesFavoritas: [[]],
      LibrosFavoritos: [[]]
    });
  }

  onSubmit(){
    this.submitted= true;
    if(this.registerForm.valid){
      let user: UsersI = this.registerForm.value;
      this.authApi.register(user).subscribe((data: any) => {
        console.log(data);
        this.submitted = false;
        this.router.navigate(['/tarifas']);
      }, (error) =>{
        this.error=error.error.message;
      })
    }
  }
}
