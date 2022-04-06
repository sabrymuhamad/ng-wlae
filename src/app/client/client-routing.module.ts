import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';


const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'trip-details',
        loadChildren: () => import('./trip-details/trip-details.module').then(m => m.TripDetailsModule)
      },
      {
        path: 'tours',
        loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule)
      },
      {
        path: 'plan-trip',
        loadChildren: () => import('./plan-trip/plan-trip.module').then(m => m.PlanTripModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'core',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
