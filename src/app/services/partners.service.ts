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
    return this.http.post(this.api() + `api/admin/partner`, partner, { headers: this.makeHeaders() })
  }
  getPartner(id) {
    return this.http.get(this.api() + `api/admin/partner/${id}/edit`, { headers: this.makeHeaders() })
  }
  update(id, partner) {
    return this.http.put(this.api() + `api/admin/partner/${id}`, partner, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.api() + `api/admin/partner/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.api() + `api/admin/partner?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.api() + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }
}
