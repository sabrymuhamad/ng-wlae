import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    dots: false,
    prevArrow: true,
    nextArrow: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  loading: boolean;
  privateTours: any[] = [];
  publicTours: any[] = [];
  hiddenGems: any[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getTours('private', 4);
    this.getTours('public', 5);
  }

  getTours(type, size) {
    this.loading = true;
    this.clientService.getTours(type, size, "0", "1").subscribe((res: any) => {
      if (type === 'private') {
        this.privateTours = res.response;
      }
      else {
        this.publicTours = res.response;
      }
      this.hiddenGems = [...this.hiddenGems, ...res.response]
    })
  }

}
