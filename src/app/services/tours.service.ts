import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ToursService extends ApiService {

  constructor(private http: HttpClient) { super(); }

  upload(data: FormData) {
    return this.http.post(this.api() + `api/file/singleFile`, data, { headers: this.makeHeaders() })
  }

  create(tour, type) {
    return this.http.post(this.api() + `api/admin/${type}/tour`, tour, { headers: this.makeHeaders() })
  }

  view(id) {
    return this.http.get(this.api() + `api/tours/${id}`, { headers: this.makeHeaders() })
  }

  update(type, id, tour) {
    return this.http.put(this.api() + `api/admin/${type}/tour/${id}`, tour, { headers: this.makeHeaders() })
  }

  delete(id, type) {
    return this.http.delete(this.api() + `api/admin/${type}/tour/${id}`, { headers: this.makeHeaders() })
  }

  list(type, page, per_page) {
    return this.http.get(this.api() + `api/tours?type=${type}&page=${page}&per_page=${per_page}`, { headers: this.makeHeaders() })
  }





}
