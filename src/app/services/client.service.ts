import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ClientService extends ApiService{


  constructor(private http: HttpClient) {
    super();
   }

  getCustomers() {
    return this.http.get(this.api() + `api/customers`);
  }

  getPartners() {
    return this.http.get(this.api() + `api/partners`);
  }

  getDestinations() {
    return this.http.get(this.api() + `api/destinations`);
  }

  getTours(type, per_page, is_paginated = "1", latest = "1", destID = "") {
    return this.http.get(this.api() + `api/tours?`, {
      headers: {}, params: {
        type:type,
        per_page: per_page,
        is_paginated: is_paginated,
        latest: latest,
        destination_id: destID
      }
    });
  };

  getFeaturedAreas() {
    return this.http.get(this.api() + `api/featured`);
  }

  getTour(type, id) {
    return this.http.get(this.api() + `api/tours/${id}`);
  }

  getAllCats() {
    return this.http.get(this.api() + `api/categories`);
  }


}
