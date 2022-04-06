import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CategoriesComponent, ManageCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    MaterialsModule,
    SharedModule
  ]
})
export class CategoriesModule { }
