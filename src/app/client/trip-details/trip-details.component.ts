import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Tour } from 'src/app/admin/shared/models/tour.model';
declare var $: any;
@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  scrollAmount: number = 0;
  tripId: number;
  tripType: string;
  loading: boolean;
  tour: Tour = new Tour();

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: { trip: true, footer: false },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
    this.tripId = this.route.snapshot.params.id;
    this.tripType = this.route.snapshot.queryParams.type;
    setTimeout(() => {
      this.getTourDetails();
    }, 500);
  }


  getTourDetails() {
    this.loading = true;
    this.clientService.getTour(this.tripType, this.tripId).subscribe((res: any) => {
      this.tour = res.response;
    })
  }

  onSlide(direction) {
    if (this.scrollAmount < 0) {
      this.scrollAmount = 0
    } else if (this.scrollAmount > 3000) {
      this.scrollAmount = 3000
    }
    if (direction === 'right') {
      this.scrollAmount += 1000;
      $("#slider").animate({ scrollLeft: this.scrollAmount }, 600);

    } else {
      this.scrollAmount -= 1000;
      $("#slider").animate({ scrollLeft: this.scrollAmount }, 600);
    }

  }

}
