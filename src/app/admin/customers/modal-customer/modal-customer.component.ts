import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../shared/models/customer.model';

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrls: ['./modal-customer.component.scss']
})
export class ModalCustomerComponent implements OnInit {
  uploadIsLoading: boolean;
  loading: boolean;
  customer: Customer = new Customer();
  imgUrl: string;
  media_id: number;
  constructor(
    public dialogRef: MatDialogRef<ModalCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private toastr: ToastrService, private customerService: CustomerService) { }


  ngOnInit(): void {
    if (this.data.type === 'edit') {
      console.log(this.data)
      this.customer = this.data.data;
    }
  }

  dismiss(): void {
    this.dialogRef.close({ status: 'cancelled' });
  }

  onUpload(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.uploadIsLoading = true;

      let formData = new FormData();
      formData.append('selectedFile', elem.files[0]);

      this.customerService.upload(formData).subscribe((res: any) => {
        this.uploadIsLoading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Image is uploaded successfully');
          this.customer.media_id = res.response.id;
          this.customer.media_path = res.response.thumb_image;
          this.imgUrl = res.response.thumb_image;
        } else {
          this.toastr.error('Please try again!', 'Error uploading image');
        }
      }, (err) => {
        this.uploadIsLoading = false;
        this.toastr.error('Please try again!', 'Error uploading image');
      })
    }
  }

  submit() {
    this.loading = true;
    if (this.data.type === 'add') {
      this.customerService.create(this.customer).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('Customer Added!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    } else if (this.data.type === 'edit') {

      this.customerService.update(this.customer.id, this.customer).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('Destination Updated!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    }
  }

}
