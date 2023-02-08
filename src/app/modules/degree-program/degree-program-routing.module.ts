import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DegreeSectionComponent } from './degree-section/degree-section.component';


const routes: Routes = [
  { path: '', component: DegreeSectionComponent,

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DegreeProgramRoutingModule { }
