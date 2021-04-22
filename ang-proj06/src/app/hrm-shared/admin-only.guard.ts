import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../hrm-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOnlyGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let isAllowed = this.authService.getCurrentUserRole()==='ADMIN';

    if(!isAllowed){
      this.router.navigateByUrl("/");
    }

    return isAllowed;
  }
}
