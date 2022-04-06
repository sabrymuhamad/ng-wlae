import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { TourCardComponent } from './tour-card/tour-card.component';
import { VerticalCarouselComponent } from './vertical-carousel/vertical-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { PricingComponent } from './pricing/pricing.component';
import { TopDestinationsComponent } from './top-destinations/top-destinations.component';
import { ToursCalendarComponent } from './tours-calendar/tours-calendar.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { TripProgramCarouselComponent } from './trip-program-carousel/trip-program-carousel.component';
import { ContactWidgetComponent } from './contact-widget/contact-widget.component';
import { PlanTripRequestComponent } from './plan-trip-request/plan-trip-request.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { ClientSpinnerComponent } from './client-spinner/client-spinner.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TripProgramSectionComponent } from './trip-program-section/trip-program-section.component';


@NgModule({
  declarations: [
    TourCardComponent,
    VerticalCarouselComponent,
    TestimonialCardComponent,
    PricingComponent,
    TopDestinationsComponent,
    ToursCalendarComponent,
    NewsletterComponent,
    TripProgramCarouselComponent,
    ContactWidgetComponent,
    PlanTripRequestComponent,
    OurPartnersComponent,
    ManagementTeamComponent,
    ClientSpinnerComponent,
    TripProgramSectionComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule,
    SlickCarouselModule,
    MaterialsModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    TourCardComponent,
    VerticalCarouselComponent,
    TestimonialCardComponent,
    PricingComponent,
    TopDestinationsComponent,
    ToursCalendarComponent,
    NewsletterComponent,
    // TripProgramCarouselComponent,
    ContactWidgetComponent,
    PlanTripRequestComponent,
    OurPartnersComponent,
    ManagementTeamComponent,
    ClientSpinnerComponent,
    TripProgramSectionComponent
  ]
})
export class SharedComponentsModule { }
