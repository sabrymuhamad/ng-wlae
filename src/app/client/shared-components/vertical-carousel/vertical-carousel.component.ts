import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-vertical-carousel',
  templateUrl: './vertical-carousel.component.html',
  styleUrls: ['./vertical-carousel.component.scss']
})
export class VerticalCarouselComponent implements OnInit {
  @Input() slides = [];
  carouselSlideConfig = {
    'responsive': [
      {
        'breakpoint': 1024,
        'settings': {
          'slidesToShow': 1
        }
      }
    ],
    dots: false,
    prevArrow: false,
    nextArrow: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    fade: false,
    autoplay: true,
    draggable: true,
  };

  currentSlide: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  afterChange(e) {
    this.currentSlide = e.currentSlide;
    this.getView()
  }


  getView() {

    setTimeout(() => {
      var toScroll = 0;

      var divWindow = $('.thumbs').offset().top;
      var clickedLink = $(".current-thumb").offset().top;

      toScroll = clickedLink - divWindow;
      $('.thumbs').animate({ scrollTop: toScroll }, 900);
    }, 1000);

  }

}
