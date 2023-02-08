import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialWalfareRoutingModule } from './social-walfare-routing.module';
import { WalfareSectionComponent } from './walfare-section/walfare-section.component';


@NgModule({
  declarations: [WalfareSectionComponent],
  imports: [
    CommonModule,
    SocialWalfareRoutingModule
  ]
})
export class SocialWalfareModule { }
