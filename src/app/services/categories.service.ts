import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService {


  constructor(private http: HttpClient) { 
    super();
  }

  create(category) {
    return this.http.post(this.api() + `api/admin/category/`, category, { headers: this.makeHeaders() })
  }
  update(id, category) {
    return this.http.put(this.api() + `api/admin/category/${id}`, category, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.api() + `api/admin/category/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.api() + `api/category?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  getCategory(id) {
    return this.http.get(this.api() + `api/admin/category/${id}/edit`, { headers: this.makeHeaders() })
  }

  getCatsDD() {
    return this.http.get(this.api() + `api/admin/dropdown/category`, { headers: this.makeHeaders() })
  }

}
