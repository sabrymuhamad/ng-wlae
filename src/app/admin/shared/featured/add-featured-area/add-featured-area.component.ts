import { Component, OnInit, Inject } from '@angular/core';
import { FeaturedArea } from '../../models/tour.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-featured-area',
  templateUrl: './add-featured-area.component.html',
  styleUrls: ['./add-featured-area.component.scss']
})
export class AddFeaturedAreaComponent implements OnInit {
  area: FeaturedArea = new FeaturedArea();
  loading: boolean;
  uploadIsLoading: boolean;
  imgUrl: string;
  constructor(
    public dialogRef: MatDialogRef<AddFeaturedAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private toastr: ToastrService, private sharedService: SharedService) { }

  dismiss(): void {
    this.dialogRef.close({ status: 'cancelled' });
  }
  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.area = this.data.data;
    }
  }

  onUpload(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.uploadIsLoading = true;

      let formData = new FormData();
      formData.append('selectedFile', elem.files[0]);

      this.sharedService.upload(formData).subscribe((res: any) => {
        this.uploadIsLoading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Image is uploaded successfully');
          this.area.media_id = res.response.id;
          this.area.media_path = res.response.thumb_image;
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
      this.sharedService.create(this.area).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('Featured Area Added!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    } else if (this.data.type === 'edit') {
      this.sharedService.update(this.area.id,this.area).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('Featured Area Updated!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    }
  }
}
