import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursComponent } from './tours.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';

const routes: Routes = [
  { path: '', component: ToursComponent },
  { path: 'tour-details/:id', component: TourDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule { }
