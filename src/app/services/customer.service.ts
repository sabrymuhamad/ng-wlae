import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerService extends ApiService{

  constructor(private http: HttpClient) { super();}

  create(customer) {
    return this.http.post(this.api() + `api/customers`, customer, { headers: this.makeHeaders() })
  }
  getCustomer(id) {
    return this.http.get(this.api() + `api/customers/${id}`, { headers: this.makeHeaders() })
  }
  update(id, customer) {
    return this.http.put(this.api() + `api/customers/${id}`, customer, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.api() + `api/customers/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.api() + `api/customers?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.api() + `api/file/singleFile`, data, { headers: this.makeHeaders() })
  }
}
