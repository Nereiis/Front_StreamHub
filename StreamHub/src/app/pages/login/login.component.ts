import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error:any;
  loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(private form: FormBuilder, private authApi: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      Username: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]]
    })
    if(this.authApi.getToken()){
      this.router.navigate(['/home']);
    }

  }

  onSubmit(){
    this.submitted= true;
    if(this.loginForm.valid){
      let user: UsersI = this.loginForm.value;
        this.authApi.login(user).subscribe((data: any) => {
          console.log(data);
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('user', JSON.stringify(data.user));
          location.reload();
          this.router.navigate(['/home']);
          
        },(error)=>{
          console.log(error.error.message);
          this.error=error.error.message;
        })
      }
    }
}
