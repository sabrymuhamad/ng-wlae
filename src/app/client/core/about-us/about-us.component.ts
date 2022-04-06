import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AboutUs } from 'src/app/admin/shared/models/about.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  pageData: AboutUs = new AboutUs();
  loading: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private settings: SettingsService) { }
  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: { trip: true },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
    this.getData();
  }

  getData() {
    this.loading = true;
    this.settings.getSetting(1).subscribe((res: any) => {
      this.loading = false;
      this.pageData = res.response;
    })
  }
}
