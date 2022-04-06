import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../shared/models/blog.model';
import { Category } from '../../shared/models/category.model';
import { BlogsService } from '../../../services/blogs.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  mode: string;
  blog: Blog = new Blog();
  cats: Category[] = [];
  uploadIsLoading: boolean;
  loading: boolean;
  blogId: number;
  constructor(private route: ActivatedRoute, private blogService: BlogsService, private toastr: ToastrService, private catService: CategoriesService) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.params.mode;
    if (this.mode === 'edit') {
      this.blogId = this.route.snapshot.queryParams.id;
      this.getBlog();
    }
    this.getCategories();
  }

  getBlog() {
    this.loading = true;
    this.blogService.view(this.blogId).subscribe((res: any) => {
      this.loading = false;
      this.blog = res.response;
    }, (err) => {
      this.loading = false;
    })
  }

  getCategories() {
    this.catService.getAll(9999, 1).subscribe((res: any) => {
      this.cats = res.response.data;
    })
  }

  onUpload(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.uploadIsLoading = true;

      let formData = new FormData();
      formData.append('selectedFile', elem.files[0]);

      this.blogService.upload(formData).subscribe((res: any) => {
        this.uploadIsLoading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Image is uploaded successfully');
          this.blog.media_id = res.response.id;
          this.blog.media = res.response.thumb_image;
        } else {
          this.toastr.error('Please try again!', 'Error uploading image');
        }
      }, (err) => {
        this.uploadIsLoading = false;
        this.toastr.error('Please try again!', 'Error uploading image');
      })
    }
  }

  submit(form: NgForm) {
    this.loading = true;
    if (this.mode === 'add') {
      this.blogService.create(this.blog).subscribe((res: any) => {
        this.loading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Blog Created successfully!');
          form.reset();
        } else {
          this.toastr.error(res.errors[0]);
        }
      }, (err) => {
        this.loading = false;
        this.toastr.error(err.statusText, 'Something went wrong, please try again');
      })
    } else if (this.mode === 'edit') {
      this.blogService.update(this.blog.id, this.blog).subscribe((res: any) => {
        this.loading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Blog updated successfully!');
        } else {
          this.toastr.error(res.errors[0]);
        }
      }, (err) => {
        this.loading = false;
        this.toastr.error(err.statusText, 'Something went wrong, please try again');
      })
    }
  }

}
