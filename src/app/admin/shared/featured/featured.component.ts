import { Component, OnInit } from '@angular/core';
import { FeaturedArea } from '../models/tour.model';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { AddFeaturedAreaComponent } from './add-featured-area/add-featured-area.component';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  loading: boolean;
  featuredAreas: FeaturedArea[];
  displayedColumns: string[] = ['media_path', 'title', 'sub_title', 'tag', 'actions'];
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  constructor(public dialog: MatDialog, private sharedService: SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllAreas();
  }

  getAllAreas(){
    this.loading = true;
    this.sharedService.getAll(20, this.pageNum).subscribe((areas: any) => {
      this.featuredAreas = areas.response.data;
      this.totalElements = areas.response.meta.total;
      this.loading = false;
    },(err)=>{
      this.toastr.error('something went wrong')
    })
  }

  addAreaModal() {
    const dialogRef = this.dialog.open(AddFeaturedAreaComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'add' },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllAreas();
      }
    });
  };

  updateAreaModal(data) {
    const dialogRef = this.dialog.open(AddFeaturedAreaComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'edit', data: data },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllAreas();
      }
    });
  };

  delete(id) {
    this.loading = true;
    this.sharedService.delete(id).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.getAllAreas();
        this.loading = false;
      }
    })
  }

  onPaginationChange(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllAreas();
  }
}
