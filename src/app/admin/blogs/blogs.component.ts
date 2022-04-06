import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blog } from '../shared/models/blog.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  loading: boolean;
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  blogs: Blog[] = [];
  displayedColumns: string[] = ['media', 'title', 'category', 'actions'];
  constructor(private blogService: BlogsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.loading = true;
    this.blogService.list(this.pageNum, this.perPage).subscribe((res: any) => {
      this.loading = false;
      this.blogs = res.response.data;
      this.totalElements = res.response.meta.total;
    })
  };

  onPaginationChange(e) {
    this.pageNum = e.pageIndex + 1;
    this.getAllBlogs();
  }

  delete(id) {
    this.loading = true;
    this.blogService.delete(id).subscribe((res) => {
      this.loading = false;
      this.getAllBlogs()
    }, (err) => {
      this.loading = false;
      this.toastr.error('something went wrong')
    })
  }

}
