import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  create(category) {
    return this.http.post(this.proxy.api + `api/admin/category/`, category, { headers: this.makeHeaders() })
  }
  update(id, category) {
    return this.http.put(this.proxy.api + `api/admin/category/${id}`, category, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.proxy.api + `api/admin/category/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.proxy.api + `api/category?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  getCategory(id) {
    return this.http.get(this.proxy.api + `api/admin/category/${id}/edit`, { headers: this.makeHeaders() })
  }

  getCatsDD() {
    return this.http.get(this.proxy.api + `api/admin/dropdown/category`, { headers: this.makeHeaders() })
  }

}
