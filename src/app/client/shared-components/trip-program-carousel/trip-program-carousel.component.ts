import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Tour } from 'src/app/admin/shared/models/tour.model';
declare var $: any;

@Component({
  selector: 'app-trip-program-carousel',
  templateUrl: './trip-program-carousel.component.html',
  styleUrls: ['./trip-program-carousel.component.scss']
})
export class TripProgramCarouselComponent implements OnInit, AfterContentChecked {
  scrollAmount: number = 0;
  @Input() data: Tour;
  maxScroll: number;
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterContentChecked() {
    this.maxScroll = $("#slider")[0].scrollWidth;

    if (this.data.tour_details[0].description) {
      this.data.tour_details.forEach((tour) => {
        tour.description = tour.description.replace(/\n/g, '<br>');
      });
    }
  }

  onSlide(direction) {
    if (this.scrollAmount < 0) {
      this.scrollAmount = 0
    } else if (this.scrollAmount > this.maxScroll) {
      this.scrollAmount = this.maxScroll
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
