import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent } from './facilities/facilities.component';
import { TopSearchedComponent } from './topSearched/topSearched.component';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/topSearched', pathMatch: 'full' },
  { path: 'detail/:id', component: FacilityDetailComponent },
  { path: 'topSearched', component: TopSearchedComponent },
  { path: 'facilities', component: FacilitiesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

