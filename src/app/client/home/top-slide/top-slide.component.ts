import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-top-slide',
  templateUrl: './top-slide.component.html',
  styleUrls: ['./top-slide.component.scss']
})
export class TopSlideComponent implements OnInit {
  loading: boolean;
  featuredData: any;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.clientService.getFeaturedAreas().subscribe((res: any) => {
      this.featuredData = res.data[0];
    })
  }

}
