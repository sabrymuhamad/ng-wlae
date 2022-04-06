import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/services/partners.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ModalPartnerComponent } from './modal-partner/modal-partner.component';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  loading: boolean;
  partners: any[] = [];
  displayedColumns: string[] = ['image', 'name', 'actions'];
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  constructor(private partnerService: PartnersService, public dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPartners();
  }

  getAllPartners() {
    this.loading = true;
    this.partnerService.getAll(20, this.pageNum).subscribe((partners: any) => {
      this.partners = partners.response.data;
      this.totalElements = partners.response.meta.total;
      this.loading = false;
    }, (err) => {
      this.toastr.error('something went wrong')
    })
  }


  addPartnerModal() {
    const dialogRef = this.dialog.open(ModalPartnerComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'add' },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllPartners();
      }
    });
  };

  updatePartnerModal(data) {
    const dialogRef = this.dialog.open(ModalPartnerComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'edit', data: data },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllPartners();
      }
    });
  };

  delete(id) {
    this.loading = true;
    this.partnerService.delete(id).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.getAllPartners();
        this.loading = false;
      }
    })
  }

  onPaginationChabge(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllPartners();
  }


}
