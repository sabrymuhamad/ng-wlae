import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-upcoming-group-tours',
  templateUrl: './upcoming-group-tours.component.html',
  styleUrls: ['./upcoming-group-tours.component.scss']
})
export class UpcomingGroupToursComponent implements OnInit {
  slides: any[] = [];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  currentSlide: number = 0;
  loading: boolean;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getTours();
  }

  afterChange(e) {
    this.currentSlide = e.currentSlide;
  }

  getTours() {
    this.loading = true;
    this.clientService.getTours('public', 8, "0", "1").subscribe((res: any) => {
      this.slides = res.data;
    })
  }

}
