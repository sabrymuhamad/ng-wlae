import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ManageToursRoutingModule } from './manage-tours-routing.module';
import { ManageToursComponent } from './manage-tours.component';
import { AddEditTourComponent } from './add-edit-tour/add-edit-tour.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ManageToursComponent, AddEditTourComponent],
  imports: [
    CommonModule,
    ManageToursRoutingModule,
    MaterialsModule,
    FormsModule,
    SharedModule
  ],
  providers:[DatePipe]
})
export class ManageToursModule { }
