import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanTripRoutingModule } from './plan-trip-routing.module';
import { PlanTripComponent } from './plan-trip.component';
import { PlanItemsComponent } from './plan-items/plan-items.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [PlanTripComponent, PlanItemsComponent],
  imports: [
    CommonModule,
    PlanTripRoutingModule,
    SharedComponentsModule
  ]
})
export class PlanTripModule { }
