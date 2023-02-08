import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsCornerRoutingModule } from './kids-corner-routing.module';
import { KidsSectionComponent } from './kids-section/kids-section.component';


@NgModule({
  declarations: [KidsSectionComponent],
  imports: [
    CommonModule,
    KidsCornerRoutingModule
  ]
})
export class KidsCornerModule { }
