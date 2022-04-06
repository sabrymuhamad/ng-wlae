import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageToursComponent } from './manage-tours.component';
import { AddEditTourComponent } from './add-edit-tour/add-edit-tour.component';


const routes: Routes = [
  { path: '', component: ManageToursComponent },
  { path: 'add-tour/:type', component: AddEditTourComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageToursRoutingModule { }
