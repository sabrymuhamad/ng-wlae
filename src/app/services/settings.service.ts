import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProxyUrl } from '../api';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    makeHeaders() {
        let options = {
            'Authorization': 'bearer ' + localStorage.getItem('wleToken')
        }
        return options;
    }

    constructor(private http: HttpClient, private proxy: ProxyUrl) { }


    update(id, content) {
        return this.http.put(this.proxy.api + `api/admin/setting/${id}`, content, { headers: this.makeHeaders() })
    }

    getAll() {
        return this.http.get(this.proxy.api + `api/setting`, { headers: this.makeHeaders() })
    }

    getSetting(id) {
        return this.http.get(this.proxy.api + `api/setting/${id}/edit`, { headers: this.makeHeaders() })
    }



}
