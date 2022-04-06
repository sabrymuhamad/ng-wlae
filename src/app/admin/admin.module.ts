import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { MaterialsModule } from '../materials/materials.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ManageFaqsComponent } from './manage-faqs/manage-faqs.component';
import { ManageSingleFaqComponent } from './manage-faqs/manage-single-faq/manage-single-faq.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, LoginComponent, AboutUsComponent, ContactUsComponent, ManageFaqsComponent, ManageSingleFaqComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    MaterialsModule
  ]
})
export class AdminModule { }
