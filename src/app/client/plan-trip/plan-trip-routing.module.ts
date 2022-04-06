import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanTripComponent } from './plan-trip.component';


const routes: Routes = [
  { path: '', component: PlanTripComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanTripRoutingModule { }
