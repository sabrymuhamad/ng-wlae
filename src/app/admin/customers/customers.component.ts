import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/models/customer.model';
import { ModalCustomerComponent } from './modal-customer/modal-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  loading: boolean;
  customers: Customer[] = [];
  displayedColumns: string[] = ['image', 'name', 'country', 'testimonial', 'actions'];
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  constructor(private customerService: CustomerService, public dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.loading = true;
    this.customerService.getAll(20, this.pageNum).subscribe((customers: any) => {
      this.customers = customers.data;
      this.totalElements = customers.meta.total;
      this.loading = false;
    }, (err) => {
      this.toastr.error('something went wrong')
    })
  }

  addCustomerModal() {
    const dialogRef = this.dialog.open(ModalCustomerComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'add' },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllCustomers();
      }
    });
  };

  updateCustomerModal(data) {
    const dialogRef = this.dialog.open(ModalCustomerComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'edit', data: data },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllCustomers();
      }
    });
  };

  delete(id) {
    this.loading = true;
    this.customerService.delete(id).subscribe((res: any) => {

        this.getAllCustomers();
        this.loading = false;

    })
  }

  onPaginationChabge(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllCustomers();
  }

}
