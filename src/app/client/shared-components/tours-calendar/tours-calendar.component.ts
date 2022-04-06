import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tours-calendar',
  templateUrl: './tours-calendar.component.html',
  styleUrls: ['./tours-calendar.component.scss']
})
export class ToursCalendarComponent implements OnInit {
  selectedDate: any = new Date();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.updateDayStyles()
  }
  dateChanged(date) {
    console.log(`Selected: ${date}`);
  }

  updateDayStyles() {
    let days = [];

    setTimeout(() => {
      days.push(
        document.querySelector('.mat-calendar-body-cell[aria-label="July 13, 2020"] .mat-calendar-body-cell-content'),
        document.querySelector('.mat-calendar-body-cell[aria-label="July 15, 2020"] .mat-calendar-body-cell-content')
      )


      days.forEach((day: HTMLElement) => {
        day.style.backgroundImage = 'url(assets/images/calendar-notif.png)';
        day.style.backgroundPosition = '7px 7px';
        day.style.backgroundRepeat = 'no-repeat';
        day.style.backgroundSize = '15px';
      });
    }, 500);

  }


}
