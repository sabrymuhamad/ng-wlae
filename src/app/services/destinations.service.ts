import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  create(destName, media_id) {
    return this.http.post(this.proxy.api + `api/admin/destination`, { name: destName, media_id:media_id }, { headers: this.makeHeaders() })
  }
  update(id, dest) {
    return this.http.put(this.proxy.api + `api/admin/destination/${id}`, dest, { headers: this.makeHeaders() })
  }
  delete(id) {
    return this.http.delete(this.proxy.api + `api/admin/destination/${id}`, { headers: this.makeHeaders() })
  }
  getAll(per_page, pageNum) {
    return this.http.get(this.proxy.api + `api/admin/destination?per_page=${per_page}&page=${pageNum}`, { headers: this.makeHeaders() })
  }
  upload(data: FormData) {
    return this.http.post(this.proxy.api + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }
}
