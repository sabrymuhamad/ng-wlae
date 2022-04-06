import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { FeaturedComponent } from './featured/featured.component';
import { AddFeaturedAreaComponent } from './featured/add-featured-area/add-featured-area.component';
import { FormsModule } from '@angular/forms';
import { CKEditorComponent } from './ck-editor/ck-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    SpinnerComponent,
    FeaturedComponent,
    AddFeaturedAreaComponent,
    CKEditorComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialsModule,
    FormsModule,
    AngularEditorModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    SpinnerComponent,
    CKEditorComponent
  ]
})
export class SharedModule { }
