import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [BlogComponent, BlogItemComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    InfiniteScrollModule,
    MaterialsModule,
    SharedComponentsModule,
    PipesModule
  ]
})
export class BlogModule { }
