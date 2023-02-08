import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DegreeProgramRoutingModule } from './degree-program-routing.module';
import { DegreeSectionComponent } from './degree-section/degree-section.component';


@NgModule({
  declarations: [DegreeSectionComponent],
  imports: [
    CommonModule,
    DegreeProgramRoutingModule
  ]
})
export class DegreeProgramModule { }
