import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, ContactUsComponent, FaqsComponent, AboutUsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi9hmqX3O_sn2lncv5LdqP1soXxJYyd74'
    }),
    MaterialsModule,
    SharedComponentsModule,
    PipesModule
  ],
  exports: [HeaderComponent, FooterComponent, NavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
