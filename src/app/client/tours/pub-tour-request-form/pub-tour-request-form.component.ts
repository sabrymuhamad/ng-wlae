import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Countries, PublicTourRequest } from 'src/app/admin/shared/models/request.model';
import { Tour } from 'src/app/admin/shared/models/tour.model';

@Component({
  selector: 'app-pub-tour-request-form',
  templateUrl: './pub-tour-request-form.component.html',
  styleUrls: ['./pub-tour-request-form.component.scss']
})
export class PubTourRequestFormComponent implements OnInit, AfterContentChecked {
  @Input() tour: Tour;
  request: PublicTourRequest = new PublicTourRequest();
  countries = Countries;
  selectedDateIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.prepare();
  }

  sendReq(form: NgForm) {
    if (form.form.status === 'VALID') {
      console.log(this.request)
    }
  }

  onSelectDate(selectedDate, index) {
    this.selectedDateIndex = index;
    this.request.tourDate = selectedDate;
  }

  personCount(type, index) {
    if (type === 'plus') {
      this.tour.tour_price[index].perPerson += 1;
      this.tour.tour_price[index].total = this.tour.tour_price[index].perPerson * this.tour.tour_price[index].price;
    } else {
      if (this.tour.tour_price[index].perPerson > 0) {
        this.tour.tour_price[index].perPerson -= 1;
        this.tour.tour_price[index].total = this.tour.tour_price[index].perPerson * this.tour.tour_price[index].price;
      }
    }
    this.tour.totalCost = this.tour.tour_price.reduce((a, b) => {
      if (!b.total) b.total = 0;
      return a + b.total
    }, 0)
  }

  prepare() {
    this.tour.tour_price.forEach((price) => {
      if (!price.perPerson)
        price.perPerson = 0;
    });
  }
}
