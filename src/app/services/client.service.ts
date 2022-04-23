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
    return this.http.get(this.api() + `api/client/home/customer`);
  }

  getPartners() {
    return this.http.get(this.api() + `api/client/home/partner`);
  }

  getDestinations() {
    return this.http.get(this.api() + `api/client/destination`);
  }

  getTours(type, per_page, is_paginated = "1", latest = "1", destID = "") {
    return this.http.get(this.api() + `api/client/tour/${type}/?`, {
      headers: {}, params: {
        per_page: per_page,
        is_paginated: is_paginated,
        latest: latest,
        destination_id: destID
      }
    });
  };

  getFeaturedAreas() {
    return this.http.get(this.api() + `api/client/home/featured`);
  }

  getTour(type, id) {
    return this.http.get(this.api() + `api/client/${type}/tour/${id}/show`);
  }

  getAllCats() {
    return this.http.get(this.api() + `api/client/category`);
  }


}
