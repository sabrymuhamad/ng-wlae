import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';
import { Tour } from '../shared/models/tour.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-tours',
  templateUrl: './manage-tours.component.html',
  styleUrls: ['./manage-tours.component.scss']
})
export class ManageToursComponent implements OnInit {
  displayedColumns: string[] = ['main_media_path', 'title', 'destination', 'actions'];
  loading: boolean;
  tours: Tour[];
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  tourType: string;
  constructor(private route: ActivatedRoute, private tourService: ToursService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.tourType = params.type;
      this.getAllTours();
    });
  }

  getAllTours() {
    this.loading = true;
    this.tourService.list(this.tourType, this.pageNum, this.perPage).subscribe((res: any) => {
      this.loading = false;
      this.tours = res.data;
      // this.totalElements = res.meta.total;
    })
  }
  onPaginationChabge(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllTours();
  }

  deleteTour(id) {
    this.loading = true;
    this.tourService.delete(id, this.tourType).subscribe((res) => {
      this.loading = false;
      this.getAllTours()
    }, (err) => {
      this.loading = false;
      this.toastr.error('something went wrong')
    })
  }

}
