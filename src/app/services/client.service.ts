import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient, private proxy: ProxyUrl) { }

  getCustomers() {
    return this.http.get(this.proxy.api + `api/client/home/customer`);
  }

  getPartners() {
    return this.http.get(this.proxy.api + `api/client/home/partner`);
  }

  getDestinations() {
    return this.http.get(this.proxy.api + `api/client/destination`);
  }

  getTours(type, per_page, is_paginated = "1", latest = "1", destID = "") {
    return this.http.get(this.proxy.api + `api/client/tour/${type}/?`, {
      headers: {}, params: {
        per_page: per_page,
        is_paginated: is_paginated,
        latest: latest,
        destination_id: destID
      }
    });
  };

  getFeaturedAreas() {
    return this.http.get(this.proxy.api + `api/client/home/featured`);
  }

  getTour(type, id) {
    return this.http.get(this.proxy.api + `api/client/${type}/tour/${id}/show`);
  }

  getAllCats() {
    return this.http.get(this.proxy.api + `api/client/category`);
  }


}
