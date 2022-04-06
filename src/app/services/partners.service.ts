import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  create(partner) {
    return this.http.post(this.proxy.api + `api/admin/partner`, partner, { headers: this.makeHeaders() })
  }
  getPartner(id) {
    return this.http.get(this.proxy.api + `api/admin/partner/${id}/edit`, { headers: this.makeHeaders() })
  }
  update(id, partner) {
    return this.http.put(this.proxy.api + `api/admin/partner/${id}`, partner, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.proxy.api + `api/admin/partner/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.proxy.api + `api/admin/partner?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.proxy.api + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }
}
