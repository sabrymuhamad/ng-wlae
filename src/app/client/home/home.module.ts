import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopSlideComponent } from './top-slide/top-slide.component';
import { UpcomingGroupToursComponent } from './upcoming-group-tours/upcoming-group-tours.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    TopSlideComponent,
    UpcomingGroupToursComponent,
    OurCustomersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    SlickCarouselModule,
    FormsModule
  ]
})
export class HomeModule { }
