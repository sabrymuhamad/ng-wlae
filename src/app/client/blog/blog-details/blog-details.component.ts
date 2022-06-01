import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/admin/shared/models/blog.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  id: string;
  blog: Blog = new Blog();
  loading: boolean;
  related: Blog[] = [];
  constructor(private route: ActivatedRoute, private blogService: BlogsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
    this.getBlogDetails();
  }

  getBlogDetails() {
    this.loading = true;
    this.blogService.view(this.id).subscribe((blog: any) => {
      this.loading = false;
      this.blog = blog.data;
      this.getRelatedBlogs();
    })
  }

  getRelatedBlogs() {
    this.loading = true;
    this.blogService.list(0, 3, this.blog.category_id).subscribe((res: any) => {
      this.loading = false;
      this.related = res.data;
    })
  };

}
