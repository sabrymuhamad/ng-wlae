import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripDetailsRoutingModule } from './trip-details-routing.module';
import { TripDetailsComponent } from './trip-details.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [TripDetailsComponent],
  imports: [
    CommonModule,
    TripDetailsRoutingModule,
    SharedComponentsModule
  ]
})
export class TripDetailsModule { }
