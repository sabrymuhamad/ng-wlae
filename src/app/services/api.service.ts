import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api(): string {
    return environment.server;
  }

  makeHeaders(): any {
    const options = {
      'x-auth-token': localStorage.getItem('wleToken')
    };
    return options;
  }
}
