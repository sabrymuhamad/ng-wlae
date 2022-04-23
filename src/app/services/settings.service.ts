import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
    providedIn: 'root'
})
export class SettingsService extends ApiService{

    constructor(private http: HttpClient) { 
        super();
    }


    update(id, content) {
        return this.http.put(this.api() + `api/admin/setting/${id}`, content, { headers: this.makeHeaders() })
    }

    getAll() {
        return this.http.get(this.api() + `api/setting`, { headers: this.makeHeaders() })
    }

    getSetting(id) {
        return this.http.get(this.api() + `api/setting/${id}/edit`, { headers: this.makeHeaders() })
    }



}
