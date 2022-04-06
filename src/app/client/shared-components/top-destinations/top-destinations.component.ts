import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Destination } from 'src/app/admin/shared/models/destination.model';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.scss']
})
export class TopDestinationsComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  destinations: Destination[];
  loading: boolean;
  selectedIndex: number = 0;

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };


  currentSlide: number = 0;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.getDests();
    })
  }

  getDests() {
    this.loading = true;
    this.clientService.getDestinations().subscribe((res: any) => {
      this.loading = false;
      this.destinations = res.response;
      this.onSelect.emit(this.destinations[0]);
    })
  };
  afterChange(e) {
    this.currentSlide = e.currentSlide;
  }

}
