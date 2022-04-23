import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService extends ApiService {

  makeHeaders() {
    let options = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Content-Language": ""
    }
    return options;
  }
  constructor(private http: HttpClient, private router: Router) { 
    super()
  }

  login(user) {
    return this.http.post(this.api() + 'api/auth', user, { headers: this.makeHeaders() }).pipe(map(
      (res: any) => {
        if (res && res.token) {
          localStorage.setItem('wleToken', res.token);
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
