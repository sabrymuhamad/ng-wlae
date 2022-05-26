import { Component, OnInit, Inject } from '@angular/core';
import { Partner } from '../../shared/models/partner.model';
import { PartnersService } from 'src/app/services/partners.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-partner',
  templateUrl: './modal-partner.component.html',
  styleUrls: ['./modal-partner.component.scss']
})

export class ModalPartnerComponent implements OnInit {
  uploadIsLoading: boolean;
  loading: boolean;
  partner: Partner = new Partner();
  imgUrl: string;
  media_id: number;
  constructor(
    public dialogRef: MatDialogRef<ModalPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private toastr: ToastrService, private partnerService: PartnersService) { }


  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.partner = this.data.data;
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
      formData.append('file', elem.files[0]);

      this.partnerService.upload(formData).subscribe((res: any) => {
        this.uploadIsLoading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Image is uploaded successfully');
          this.partner.media_id = res._id;
          this.partner.media_path = res.filePath;
          this.imgUrl = res.filePath;
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
      this.partnerService.create(this.partner).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('partner Added!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    } else if (this.data.type === 'edit') {

      this.partnerService.update(this.partner._id, this.partner).subscribe((res) => {
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
