import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/admin/shared/models/blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() data: Blog;
  @Input() height: number = 380;
  @Input() width: number;
  constructor() { }

  ngOnInit(): void {
  }

}
