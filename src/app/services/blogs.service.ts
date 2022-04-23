import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class BlogsService extends ApiService {

  constructor(private http: HttpClient) { super(); }

  upload(data: FormData) {
    return this.http.post(this.api() + `api/admin/upload`, data, { headers: this.makeHeaders() })
  }

  create(blog) {
    return this.http.post(this.api() + `api/admin/blog`, blog, { headers: this.makeHeaders() })
  }

  view(id) {
    return this.http.get(this.api() + `api/blog/${id}/edit`, { headers: this.makeHeaders() })
  }

  update(id, blog) {
    return this.http.put(this.api() + `api/admin/blog/${id}`, blog, { headers: this.makeHeaders() })
  }

  delete(id) {
    return this.http.delete(this.api() + `api/admin/blog/${id}`, { headers: this.makeHeaders() })
  }

  list(page, per_page, catId?) {
    if(!catId)
    return this.http.get(this.api() + `api/blog?page=${page}&per_page=${per_page}`, { headers: this.makeHeaders() })
    else
    return this.http.get(this.api() + `api/blog?page=${page}&per_page=${per_page}&category_id=${catId}`, { headers: this.makeHeaders() })
  }

}
