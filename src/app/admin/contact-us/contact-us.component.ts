import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ContactUs } from '../shared/models/contact.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUs: ContactUs = new ContactUs();
  loading: boolean;

  constructor(private settings: SettingsService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.settings.getContact().subscribe((res: any) => {
      this.loading = false;
      this.contactUs = res;
    })
  }

  submit() {
    this.loading = true;
    this.settings.updateContact(this.contactUs).subscribe((res: any) => {
      this.loading = false;
      this.contactUs = res;
    })
  }
}
