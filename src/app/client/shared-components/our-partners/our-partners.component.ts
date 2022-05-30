import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Partner } from 'src/app/admin/shared/models/partner.model';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {
  loading: boolean;
  partners: Partner[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.loading = true;
    this.clientService.getPartners().subscribe((res: any) => {
      this.loading = false;
      this.partners = res.data;
    });
  }

}
