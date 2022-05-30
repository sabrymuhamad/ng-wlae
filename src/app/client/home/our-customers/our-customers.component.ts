import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Customer } from '../../../admin/shared/models/customer.model';
declare var $: any;
@Component({
  selector: 'app-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.scss']
})
export class OurCustomersComponent implements OnInit {
  customers: Customer[] = [];
  width = window.innerWidth;
  loading: boolean;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.loading = true;
    this.clientService.getCustomers().subscribe((res: any) => {
      this.loading = true;
      this.customers = res.data;
      this.initSlider();
    })
  }

  initSlider() {
    $('#carousel-example').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "right") {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  }

}
