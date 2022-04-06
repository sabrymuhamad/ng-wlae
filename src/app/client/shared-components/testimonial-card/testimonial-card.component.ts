import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/admin/shared/models/customer.model';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  @Input() customer: Customer;
  constructor() { }

  ngOnInit(): void {
  }

}
