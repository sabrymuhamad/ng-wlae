import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  makeHeaders() {
    let options = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Content-Language": ""
    }
    return options;
  }
  constructor(private http: HttpClient, private router: Router, private proxy: ProxyUrl) { }

  login(user) {
    return this.http.post(this.proxy.api + 'api/admin/login', user, { headers: this.makeHeaders() }).pipe(map(
      (res: any) => {
        if (res && res.access_token) {
          localStorage.setItem('wleToken', res.access_token);
          localStorage.setItem('wleUser', JSON.stringify(res.user));
          return res
        } else
          return false
      }));
  }

  logOut() {
    localStorage.removeItem('wleToken');
    localStorage.removeItem('wleUser');
    this.router.navigate(['/admin/login'], {
      queryParams: {
        login: true
      }
    });
  }

}
