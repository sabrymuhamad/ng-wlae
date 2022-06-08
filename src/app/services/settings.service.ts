import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
    providedIn: 'root'
})
export class SettingsService extends ApiService {

    constructor(private http: HttpClient) {
        super();
    }


    getAbout() {
        return this.http.get(this.api() + `api/about`, { headers: this.makeHeaders() })
    }

    updateAbout(content) {
        return this.http.put(this.api() + `api/about`, content, { headers: this.makeHeaders() })
    }

    getContact() {
        return this.http.get(this.api() + `api/contact`, { headers: this.makeHeaders() })
    }

    updateContact(content) {
        return this.http.put(this.api() + `api/contact`, content, { headers: this.makeHeaders() })
    }

    updateFaq(content) {
        return this.http.put(this.api() + `api/faq`, content, { headers: this.makeHeaders() })
    }

    getFaq() {
        return this.http.get(this.api() + `api/faq`, { headers: this.makeHeaders() })
    }

    sendEmail(body) {
        return this.http.post(this.api() + `api/contact/send`, body, { headers: this.makeHeaders() })
    }



}
