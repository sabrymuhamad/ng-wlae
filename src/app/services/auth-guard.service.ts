import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  tokenExp() {
    let jwt = new JwtHelperService();
    let token = localStorage.getItem('wleToken');
    let isExpired = jwt.isTokenExpired(token);
    // let expDate = jwt.getTokenExpirationDate(token);
    if (isExpired) {
      localStorage.removeItem('token');
      localStorage.removeItem('wleUser');
    }
    return !isExpired;
  }

  canActivate(route, state: RouterStateSnapshot) {

    this.tokenExp();

    if (this.tokenExp()) {
      return true;
    } else {
      this.router.navigate(['/admin/login'], {
        queryParams: { login: true }
      });
    }
  }

}
