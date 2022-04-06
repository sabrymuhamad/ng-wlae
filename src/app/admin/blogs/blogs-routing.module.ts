import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blog-page/:mode', component: BlogPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
