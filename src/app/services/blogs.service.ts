import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  makeHeaders() {
    let options = {
      'Authorization': 'bearer ' + localStorage.getItem('wleToken')
    }
    return options;
  }

  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  upload(data: FormData) {
    return this.http.post(this.proxy.api + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }

  create(blog) {
    return this.http.post(this.proxy.api + `api/admin/blog`, blog, { headers: this.makeHeaders() })
  }

  view(id) {
    return this.http.get(this.proxy.api + `api/blog/${id}/edit`, { headers: this.makeHeaders() })
  }

  update(id, blog) {
    return this.http.put(this.proxy.api + `api/admin/blog/${id}`, blog, { headers: this.makeHeaders() })
  }

  delete(id) {
    return this.http.delete(this.proxy.api + `api/admin/blog/${id}`, { headers: this.makeHeaders() })
  }

  list(page, per_page, catId?) {
    if(!catId)
    return this.http.get(this.proxy.api + `api/blog?page=${page}&per_page=${per_page}`, { headers: this.makeHeaders() })
    else
    return this.http.get(this.proxy.api + `api/blog?page=${page}&per_page=${per_page}&category_id=${catId}`, { headers: this.makeHeaders() })
  }

}
