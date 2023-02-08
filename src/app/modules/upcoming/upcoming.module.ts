import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpComingComponent } from './up-coming/up-coming.component';
import { UpComingDetailsComponent } from './up-coming-details/up-coming-details.component';


@NgModule({
  declarations: [UpComingComponent, UpComingDetailsComponent],
  imports: [
    CommonModule,
    UpcomingRoutingModule
  ]
})
export class UpcomingModule { }
