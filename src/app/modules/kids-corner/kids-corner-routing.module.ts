import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KidsSectionComponent } from './kids-section/kids-section.component';

const routes: Routes = [
  { path: '', component: KidsSectionComponent,

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsCornerRoutingModule { }
