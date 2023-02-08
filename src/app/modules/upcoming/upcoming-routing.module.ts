import { UpComingComponent } from './up-coming/up-coming.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpComingDetailsComponent } from './up-coming-details/up-coming-details.component';



const routes: Routes = [
  { path: '', component: UpComingComponent,

  },
  { path: 'up-coming-detail', component: UpComingDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingRoutingModule { }
