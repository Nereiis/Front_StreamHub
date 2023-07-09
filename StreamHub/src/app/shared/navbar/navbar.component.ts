import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  token:any;
  constructor(private router:Router, private authService:AuthService){
    this.token=this.authService.getToken();
  }

  logOut(){
    this.authService.logout();
    location.reload();
    this.router.navigate(["/"]);
  }
}
