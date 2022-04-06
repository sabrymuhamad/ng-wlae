import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../shared/models/category.model';
@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {
  name: string;
  loading: boolean;
  category: Category = new Category();
  constructor(
    public dialogRef: MatDialogRef<ManageCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private toastr: ToastrService, private catService: CategoriesService) { }

  dismiss(): void {
    this.dialogRef.close({ status: 'cancelled' });
  }
  ngOnInit(): void {
    if (this.data.type === 'edit') {
      console.log(this.data)
      this.name = this.data.data.name;
    }
  }

  submit() {
    this.loading = true;
    this.category.name = this.name;
    if (this.data.type === 'add') {
      this.catService.create(this.category).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close({ status: 'succeeded' });
        this.toastr.success('Destination Added!');
      }, (err) => {
        this.loading = false;
        this.toastr.error('Something went wrong!');
      })
    } else if (this.data.type === 'edit') {

      this.catService.update(this.data.data.id, this.category).subscribe((res) => {
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
