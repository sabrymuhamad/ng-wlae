import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  upload(data: FormData) {
    return this.http.post(this.proxy.api + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }

  create(tour, type) {
    return this.http.post(this.proxy.api + `api/admin/${type}/tour`, tour, { headers: this.makeHeaders() })
  }

  view(type, id) {
    return this.http.get(this.proxy.api + `api/admin/${type}/tour/${id}/edit`, { headers: this.makeHeaders() })
  }

  update(type, id, tour) {
    return this.http.put(this.proxy.api + `api/admin/${type}/tour/${id}`, tour, { headers: this.makeHeaders() })
  }

  delete(id, type) {
    return this.http.delete(this.proxy.api + `api/admin/${type}/tour/${id}`, { headers: this.makeHeaders() })
  }

  list(type, page, per_page) {
    return this.http.get(this.proxy.api + `api/admin/${type}/tour?page=${page}&per_page=${per_page}`, { headers: this.makeHeaders() })
  }





}
