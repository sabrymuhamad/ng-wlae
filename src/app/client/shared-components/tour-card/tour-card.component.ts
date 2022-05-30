import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../../../admin/shared/models/tour.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  @Input() height: number = 380;
  @Input() width: number;
  @Input() showCalendar: boolean = true;
  @Input() data: Tour = new Tour();
  type: string = 'public';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.type)
        this.type = params.type;
    })

    console.log(this.data)
  }

}
