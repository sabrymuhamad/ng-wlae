import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Tour } from 'src/app/admin/shared/models/tour.model';
declare var $: any;
@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {
  tripType: string;
  tripId: number;
  loading: boolean;
  tour: Tour = new Tour();
  showMoreDates: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.router.navigate([], {
      queryParams: { trip: true },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });

    this.route.queryParams.subscribe((params) => {
      this.tripType = params.type;
    });

    this.tripId = this.route.snapshot.params.id;
    this.getTourDetails();
  }

  getTourDetails() {
    this.loading = true;
    this.clientService.getTour(this.tripType, this.tripId).subscribe((res: any) => {
      this.tour = res.data;
      this.tour.expectation_description = this.tour.expectation_description.replace(/\n/g, '<br>');
    })
  }

  gotoPrices() {
    $('html, body').animate({
      scrollTop: $("#prices").offset().top
    }, 1000);
  }

}
