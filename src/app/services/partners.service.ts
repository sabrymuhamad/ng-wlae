import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class PartnersService extends ApiService
{


  constructor(private http: HttpClient) {
    super();
   }

  create(partner) {
    return this.http.post(this.api() + `api/partners`, partner, { headers: this.makeHeaders() })
  }
  getPartner(id) {
    return this.http.get(this.api() + `api/partners/${id}/edit`, { headers: this.makeHeaders() })
  }
  update(id, partner) {
    return this.http.put(this.api() + `api/partners/${id}`, partner, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.api() + `api/partners/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.api() + `api/partners?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.api() + `api/file/singleFile`, data, { headers: this.makeHeaders() })
  }
}
