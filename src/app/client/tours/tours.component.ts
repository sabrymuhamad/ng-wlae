import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    columnWidth: 350,
  };
  tripType: string;
  masonryItems = [];
  loading: boolean;
  selectedDest: any;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.router.navigate([], {
      queryParams: { trip: true },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });

    this.route.queryParams.subscribe((params) => {
      this.tripType = params.type;
    });

  }

  onSelectDest(dest) {
    this.selectedDest = dest;
    this.loading = true;
    this.clientService.getTours(this.tripType, 20, '0', '1', dest._id).subscribe((res: any) => {
      this.masonryItems = res.data;
      this.masonryItems.map((item) => {
        item.height = Math.floor(Math.random() * 100) + 250;
      });
    })
  }

}
