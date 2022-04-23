import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [DestinationsComponent, AddDestinationComponent],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    MaterialsModule,
    FormsModule,
    SharedModule,
    PipesModule
  ]
})
export class DestinationsModule { }
