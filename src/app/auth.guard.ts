import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ServService } from './serv.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private ServService: ServService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
if(this.ServService.userData.getValue()){
        return true;
}
else{
      this.router.navigate(['/login']);
      return false;
    }

  }
}
