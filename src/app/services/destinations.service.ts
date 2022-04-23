import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService extends ApiService {

  constructor(private http: HttpClient) { super(); }

  create(destName, media_id) {
    return this.http.post(this.api() + `api/destinations`, { name: destName, media_id:media_id }, { headers: this.makeHeaders() })
  }
  update(id, dest) {
    return this.http.put(this.api() + `api/destinations/${id}`, dest, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.api() + `api/destinations/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.api() + `api/destinations?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.api() + `api/file/singleFile`, data, { headers: this.makeHeaders() })
  }
}
