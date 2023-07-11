import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersI } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  token:any;
  user!: UsersI;

  constructor(private router:Router, private authService:AuthService){
    
    this.token=this.authService.getToken();
  }
  ngOnInit(): void{
      
    this.user = JSON.parse(String(this.authService.getCurrentUser()));
    this.authService.getUserById(this.user._id).subscribe((data:any) =>{
      console.log(this.user);
      
    })
    }
  

  logOut(){
    this.authService.logout();
    location.reload();
    this.router.navigate(["/"]);
  }
}
