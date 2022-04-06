import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-plan-items',
  templateUrl: './plan-items.component.html',
  styleUrls: ['./plan-items.component.scss']
})
export class PlanItemsComponent implements OnInit {
  tabs: string = 'tab1';
  loading:boolean;
  privateTours: any[] = [];
  publicTours: any[] = [];
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
    })
  }

}
