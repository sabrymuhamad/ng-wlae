import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BlogsComponent, BlogPageComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    FormsModule,
    MaterialsModule,
    SharedModule
  ]
})
export class BlogsModule { }
