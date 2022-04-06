import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ModalCustomerComponent } from './modal-customer/modal-customer.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CustomersComponent, ModalCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialsModule,
    FormsModule,
    SharedModule
  ]
})
export class CustomersModule { }
