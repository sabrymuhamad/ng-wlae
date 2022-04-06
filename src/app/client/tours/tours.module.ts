import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PubTourRequestFormComponent } from './pub-tour-request-form/pub-tour-request-form.component';
import { PrvTourRequestFormComponent } from './prv-tour-request-form/prv-tour-request-form.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ToursComponent, TourDetailsComponent, PubTourRequestFormComponent, PrvTourRequestFormComponent],
  imports: [
    CommonModule,
    ToursRoutingModule,
    SharedComponentsModule,
    MaterialsModule,
    NgxMasonryModule,
    PipesModule,
    FormsModule
  ]
})
export class ToursModule { }
