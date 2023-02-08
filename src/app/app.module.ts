import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './shared/shared.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { registerLocaleData } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import localeEs from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './shared/components/confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialog2Component } from './shared/components/confirmation-dialog2/confirmation-dialog2.component';
import { ConfirmationDialog2Service } from './shared/components/confirmation-dialog2/confirmation-dialog2.service';
import { HeaderSharingService } from './shared/services/header-sharing.service';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgpSortModule } from 'ngp-sort-pipe';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
registerLocaleData(localeEs, 'es');
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { CarouselDirective } from './modules/about/shared/carousel.directive';
import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angularexampleapp' }),
    TransferHttpCacheModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule, SlickCarouselModule, NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxIntlTelInputModule,
    MatSnackBarModule,
    IvyCarouselModule,
    TabsModule,
    NgpSortModule,
     BrowserAnimationsModule,
    ClickOutsideModule,
    BsDatepickerModule.forRoot() ,
    TabsModule.forRoot(),
    SocialLoginModule
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    AppComponent,
    ConfirmationDialogComponent,
    ConfirmationDialog2Component,
    ContactUsComponent,
    ForgetPasswordComponent,
  ],
  providers: [
    HeaderSharingService,
    ConfirmationDialogService,
    ConfirmationDialog2Service,
   
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '51013940215-vm4im41om1ish0j3ct49b21qud6drpd9.apps.googleusercontent.com'
            )
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  entryComponents: [ ConfirmationDialogComponent ],
})

export class AppModule {
}
