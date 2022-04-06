import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  loading: boolean;
  categories: Category[];
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  constructor(public dialog: MatDialog, private catService: CategoriesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.loading = true;
    this.catService.getAll(20, this.pageNum).subscribe((categories: any) => {
      this.categories = categories.response.data;
      this.totalElements = categories.response.meta.total;
      this.loading = false;
    }, (err) => {
      this.toastr.error('something went wrong')
    })
  }

  addCategoryModal() {
    const dialogRef = this.dialog.open(ManageCategoryComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'add' },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllCategories();
      }
    });
  }

  updateCategoryModal(data) {
    const dialogRef = this.dialog.open(ManageCategoryComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'edit', data: data },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllCategories();
      }
    });
  };

  delete(id) {
    this.loading = true;
    this.catService.delete(id).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.getAllCategories();
        this.loading = false;
      }
    })
  }

  onPaginationChange(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllCategories();
  }

}
