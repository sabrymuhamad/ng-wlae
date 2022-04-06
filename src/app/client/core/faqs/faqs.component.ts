import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/admin/shared/models/faq.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  loading: boolean;
  faqs: Faq[] = [];

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.getAllFAQs();
  }

  getAllFAQs() {
    this.loading = true;
    this.settings.getSetting(3).subscribe((res: any) => {
      this.loading = false;
      this.faqs = res.response.content;

      this.faqs.forEach((faq) => {
        faq.answer = faq.answer.replace(/\n/g, '<br>');
      });

    })
  }


}
