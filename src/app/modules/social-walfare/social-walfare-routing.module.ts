import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalfareSectionComponent } from './walfare-section/walfare-section.component';


const routes: Routes = [
  { path: '', component: WalfareSectionComponent,

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialWalfareRoutingModule { }
