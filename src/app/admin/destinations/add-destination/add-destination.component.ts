import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.scss']
})
export class AddDestinationComponent implements OnInit {
  name: string;
  loading: boolean;
  uploadIsLoading: boolean;
  imgUrl: string;
  media_id: number;
  constructor(
    public dialogRef: MatDialogRef<AddDestinationComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private toastr: ToastrService, private destService: DestinationsService) { }

  dismiss(): void {
    this.dialogRef.close({ status: 'cancelled' });
  }
  ngOnInit(): void {
    if (this.data.type === 'edit') {
      console.log(this.data)
      this.name = this.data.data.name;
      this.imgUrl = this.data.data.media;
    }
  }

  onUpload(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.uploadIsLoading = true;

      let formData = new FormData();
      formData.append('selectedFile', elem.files[0]);

      this.destService.upload(formData).subscribe((res: any) => {
        this.uploadIsLoading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Image is uploaded successfully');
          this.media_id = res.response.id;
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
      this.destService.create(this.name, this.media_id).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('Destination Added!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    } else if (this.data.type === 'edit') {
      let dest = {
        name: this.name,
        media_id: this.media_id
      }
      this.destService.update(this.data.data.id, dest).subscribe((res) => {
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
