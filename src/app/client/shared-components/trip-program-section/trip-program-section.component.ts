import { Component, Input, OnInit } from '@angular/core';
import { Tour } from 'src/app/admin/shared/models/tour.model';

@Component({
  selector: 'app-trip-program-section',
  templateUrl: './trip-program-section.component.html',
  styleUrls: ['./trip-program-section.component.scss']
})
export class TripProgramSectionComponent implements OnInit {
  @Input() data: Tour;
  constructor() { }

  ngOnInit(): void {
  }

}
