import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';

import { GuestOnlyGuard } from '../core/utils/GuestOnly.Guard';


const routesNames = RoutesConfig.routesNames;
const routes: Routes = [
    { path: '', component: AboutUsComponent,
  
    }
 

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }
