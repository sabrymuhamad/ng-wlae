import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  create(item) {
    return this.http.post(this.api() + `api/featured`, item, { headers: this.makeHeaders() })
  }

  update(id, item) {
    return this.http.put(this.api() + `api/featured/${id}`, item, { headers: this.makeHeaders() })
  }

  delete(id) {
    return this.http.delete(this.api() + `api/featured/${id}`, { headers: this.makeHeaders() })
  }

  getAll(per_page, pageNum) {
    return this.http.get(this.api() + `api/featured?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }

  getItem(id) {
    return this.http.get(this.api() + `api/featured/${id}/edit`, { headers: this.makeHeaders() })
  }

  upload(data: FormData) {
    return this.http.post(this.api() + `api/file/singleFile`, data, { headers: this.makeHeaders() })
  }
}
