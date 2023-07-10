import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authService.getRole())
      console.log(route.routeConfig?.path);
    
    if(!this.authService.getToken()) {
      this.router.navigate(['/login']);
    }
    if((route.routeConfig?.path == 'gestionLibros' || route.routeConfig?.path == 'gestionSeries' || 
    route.routeConfig?.path == 'gestionPeliculas' || route.routeConfig?.path == 'editLibros') && this.authService.getRole() == 'user') {
      this.router.navigate(['/']);
    }

    return true;
  }
}