import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const routesNames = RoutesConfig.routesNames;
const routes: Routes = [
    { path: '', component: ContactSectionComponent,
  
    }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
