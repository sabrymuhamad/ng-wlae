import { Component, OnInit, Input } from '@angular/core';
import { Pricing } from 'src/app/admin/shared/models/tour.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  @Input() premium: boolean;
  @Input() data: Pricing;
  @Input() theme: string;

  tripType: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tripType = this.route.snapshot.queryParams.type;
  }


}
