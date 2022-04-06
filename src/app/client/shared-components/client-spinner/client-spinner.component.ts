import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-spinner',
  templateUrl: './client-spinner.component.html',
  styleUrls: ['./client-spinner.component.scss']
})
export class ClientSpinnerComponent implements OnInit {
  @Input() theme = 'text-light';
  @Input() size: string = 'x2';
  @Input() type: string = 'absolute'; // fixed / absolute / static
  constructor() { }

  ngOnInit(): void {
  }

}
