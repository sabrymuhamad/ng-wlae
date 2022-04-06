import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  create(customer) {
    return this.http.post(this.proxy.api + `api/admin/customer`, customer, { headers: this.makeHeaders() })
  }
  getCustomer(id) {
    return this.http.get(this.proxy.api + `api/admin/customer/${id}/edit`, { headers: this.makeHeaders() })
  }
  update(id, customer) {
    return this.http.put(this.proxy.api + `api/admin/customer/${id}`, customer, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.proxy.api + `api/admin/customer/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.proxy.api + `api/admin/customer?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.proxy.api + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }
}
