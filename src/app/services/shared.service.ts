import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  create(item) {
    return this.http.post(this.proxy.api + `api/admin/featured`, item, { headers: this.makeHeaders() })
  }

  update(id, item) {
    return this.http.put(this.proxy.api + `api/admin/featured/${id}`, item, { headers: this.makeHeaders() })
  }

  delete(id) {
    return this.http.delete(this.proxy.api + `api/admin/featured/${id}`, { headers: this.makeHeaders() })
  }

  getAll(per_page, pageNum) {
    return this.http.get(this.proxy.api + `api/admin/featured?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }

  getItem(id) {
    return this.http.get(this.proxy.api + `api/admin/featured/${id}/edit`, { headers: this.makeHeaders() })
  }

  upload(data: FormData) {
    return this.http.post(this.proxy.api + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }
}
