import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { AboutUs } from '../shared/models/about.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  loading: boolean;
  pageData: AboutUs = new AboutUs();

  constructor(private settings: SettingsService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.settings.getAbout().subscribe((res: any) => {
      this.loading = false;
        this.pageData = res;
    })
  }

  submit() {
    this.loading = true;
    this.settings.updateAbout(this.pageData).subscribe((res: any) => {
      this.loading = false;
      this.pageData = res;
    })
  }

}


