import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authService :HardcodedAuthenticationService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {

    console.log('hhhhhh');
    if(this.authService.isUserLoggedIn())
    {
        return true;
    }

     return false;
  }

}
