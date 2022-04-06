import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import { ModalPartnerComponent } from './modal-partner/modal-partner.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PartnersComponent, ModalPartnerComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class PartnersModule { }
