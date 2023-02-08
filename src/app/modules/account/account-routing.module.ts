import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { LoginComponent } from './pages/login/login.component';
import { ResetComponent } from './pages/reset/reset.component';


const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
  { path: routesNames.account.login, component: LoginComponent },
  { path: routesNames.account.reset + '/:id', component: ResetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
