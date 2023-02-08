import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './pages/reset/reset.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [LoginComponent, ResetComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ]
})
export class AccountsModule { }
