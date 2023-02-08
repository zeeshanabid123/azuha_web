import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutesConfig } from './configs/routes.config';
import { AuthGuard } from './modules/core/utils/Auth.Guard';
import { GuestOnlyGuard } from './modules/core/utils/GuestOnly.Guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

const routesNames = RoutesConfig.routesNames;
const routes: Routes = [
  { path: routesNames.home, component: HomePageComponent, pathMatch: 'full' },
  { path: routesNames.heroes.basePath, loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule) },
  { path: routesNames.account.basePath, loadChildren: () => import('./modules/account/account.module').then(m => m.AccountsModule) },
  { path: routesNames.about, loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },


  { path: routesNames.DegreeProgram, loadChildren: () => import('./modules/degree-program/degree-program.module').then(m => m.DegreeProgramModule) },

  { path: routesNames.courses, loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule) },

  { path: routesNames.kidsCorner, loadChildren: () => import('./modules/kids-corner/kids-corner.module').then(m => m.KidsCornerModule) },

 { path: routesNames.media, loadChildren: () => import('./modules/media/media.module').then(m => m.MediaModule) },

  { path: routesNames.socialWalfare, loadChildren: () => import('./modules/social-walfare/social-walfare.module').then(m => m.SocialWalfareModule) },

  { path: routesNames.contact, loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: routesNames.upcoming, loadChildren: () => import('./modules/upcoming/upcoming.module').then(m => m.UpcomingModule) },
 



  // tslint:disable-next-line: max-line-length
 // { path: routesNames.isoProfileSignUp.basePath, loadChildren: () => import('./modules/iso-gym-sign-up/iso-gym-sign-up.module').then(m => m.IsoGymSignUpModule) },
  // {
  //   path: routesNames.trainerDashboard.basePath,
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./modules/trainer-dashboard/trainer-dashboard.module').then(m => m.TrainerDashboardModule),
  // },
  // {
  //   path: routesNames.profile.basePath, loadChildren: () =>
  //     import('./modules/profile/profile.module').then(m => m.ProfileModule),
  // },

  {
    path: routesNames.uploadresume.basePath, loadChildren: () =>
      import('./modules/upload-resume/upload-resume.module').then(m => m.UploadResumeModule),
  },  
  // // tslint:disable-next-line: max-line-length
  // { path: routesNames.freeClass.basePath, loadChildren: () => import('./modules/free-classes/free-classes.module').then(m => m.FreeClassesModule) },
  // tslint:disable-next-line: max-line-length
  // {
  //   path: routesNames.appSearching.basePath, loadChildren: () => import('./modules/app-searching/app-searching.module')
  //     .then(m => m.AppSearchingModule)
  // },
  // {
  //   path: routesNames.joinCommunity.basePath,
  //   canActivate: [GuestOnlyGuard],
  //   loadChildren: () => import('./modules/join-community/join-community.module')
  //     .then(m => m.JoinCommunityModule)
  // },
  // {
  //   path: routesNames.joinCommunity.joinFitnessTrainer.basePath,
  //   canActivate: [GuestOnlyGuard], loadChildren: () => import('./modules/join-fitness-trainer/join-fitness-trainer.module')
  //     .then(m => m.JoinFitnessTrainerModule)
  // },
  // {
  //   path: routesNames.joinCommunity.joinCustomer.basePath,
  //   canActivate: [GuestOnlyGuard], loadChildren: () => import('./modules/join-customer/join-customer.module')
  //     .then(m => m.JoinCustomerModule)
  // },
  // {
  //   path: routesNames.joinCommunity.joinBusinessGym.basePath,
  //   canActivate: [GuestOnlyGuard], loadChildren: () => import('./modules/join-business-Gym/join-business-Gym.module')
  //     .then(m => m.JoinBusinessGymModule)
  // },
  // {
  //   // tslint:disable-next-line: max-line-length
  //   path: routesNames.joinCommunity.joinFitnessApp.basePath,
  //   canActivate: [GuestOnlyGuard], loadChildren: () => import('./modules/join-fitness-App/join-fitness-App.module')
  //     .then(m => m.JoinFitnessAppModule)
  // },
  // {
  //   // tslint:disable-next-line: max-line-length
  //   path: routesNames.joinCommunity.joinBusinessFitnessclass.basePath,
  //   canActivate: [GuestOnlyGuard], loadChildren: () => import('./modules/join-business-fitnessclass/join-business-fitnessclass.module')
  //     .then(m => m.JoinBusinessFitnessclassModule)
  // },
  // {
  //   // tslint:disable-next-line: max-line-length
  //   path: routesNames.joinCommunity.joinBusinessFoodapp.basePath,
  //   canActivate: [GuestOnlyGuard], loadChildren: () => import('./modules/join-business-foodapp/join-business-foodapp.module')
  //     .then(m => m.JoinBusinessFoodappModule)
  // },
  { path: routesNames.error404, component: Error404PageComponent },
  { path: routesNames.contactUs, component: ContactUsComponent },
  { path: 'forget-password/:id', component: ForgetPasswordComponent },



  { path: 'en', redirectTo: '' }, // because english language is the default one

  // otherwise redirect to 404
  { path: '**', redirectTo: RoutesConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
