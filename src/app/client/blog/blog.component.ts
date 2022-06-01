import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/admin/shared/models/blog.model';
import { Category } from 'src/app/admin/shared/models/category.model';
import { BlogsService } from 'src/app/services/blogs.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  scrollLoading: boolean;
  selectedIndex: number = 0;
  loading: boolean;
  pageNum: number = 0;
  perPage: number = 20;
  categories: Category[];
  totalElements: number;
  constructor(private clientService: ClientService, private toastr: ToastrService, private blogService: BlogsService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllBlogs();
  }

  getAllCategories() {
    this.loading = true;
    this.clientService.getAllCats().subscribe((categories: any) => {
      categories.data.unshift({ name: 'All', id: null })
      this.categories = categories.data;
      this.loading = false;
    }, (err) => {
      this.toastr.error('something went wrong')
    })
  }

  getAllBlogs(catId = null) {
    this.loading = true;
    this.blogService.list(this.pageNum, this.perPage, catId).subscribe((res: any) => {
      this.loading = false;
      this.blogs = res.data;
      // this.totalElements = res.response.meta.total;
    })
  };

  onScroll() {
    this.scrollLoading = true;
    setTimeout(() => {
      this.scrollLoading = false;
      this.blogs = [...this.blogs]
    }, 3000);
  }

  onSelectCategory(index, id) {
    this.selectedIndex = index;
    this.getAllBlogs(id);
  }

}
