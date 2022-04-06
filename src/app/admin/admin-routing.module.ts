import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ManageFaqsComponent } from './manage-faqs/manage-faqs.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuardService] },
      { path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuardService] },
      { path: 'faqs', component: ManageFaqsComponent, canActivate: [AuthGuardService] },
      { path: 'tours', loadChildren: () => import('./manage-tours/manage-tours.module').then(m => m.ManageToursModule), canActivate: [AuthGuardService] },
      { path: 'destinations', loadChildren: () => import('./destinations/destinations.module').then(m => m.DestinationsModule), canActivate: [AuthGuardService] },
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), canActivate: [AuthGuardService] },
      { path: 'partners', loadChildren: () => import('./partners/partners.module').then(m => m.PartnersModule), canActivate: [AuthGuardService] },
      { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule), canActivate: [AuthGuardService] },
      { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule), canActivate: [AuthGuardService] },
      { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule), canActivate: [AuthGuardService] },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
