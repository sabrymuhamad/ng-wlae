import { Component, OnInit } from '@angular/core';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { MatDialog } from '@angular/material/dialog';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Destination } from '../shared/models/destination.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'media', 'name', 'actions'];
  loading: boolean;
  destinations: Destination[];
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  constructor(public dialog: MatDialog, private destService: DestinationsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllDests();
  }


  addDestinationModal() {
    const dialogRef = this.dialog.open(AddDestinationComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'add' },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllDests();
      }
    });
  };
  updateDestinationModal(data) {
    const dialogRef = this.dialog.open(AddDestinationComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: 'edit', data: data },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        this.getAllDests();
      }
    });
  };

  getAllDests() {
    this.loading = true;
    this.destService.getAll(20, this.pageNum).subscribe((destinations: any) => {
      this.destinations = destinations.data;
      // this.totalElements = destinations.meta.total;
      this.loading = false;
    },(err)=>{
      this.toastr.error('something went wrong')
    })
  };

  delete(id) {
    this.loading = true;
    this.destService.delete(id).subscribe((res: any) => {
    
        this.getAllDests();
        this.loading = false;
   
    })
  }

  onPaginationChange(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllDests();
  }

}
