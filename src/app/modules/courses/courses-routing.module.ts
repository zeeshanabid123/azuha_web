import { GetAdmissionStep2Component } from './get-admission-step2/get-admission-step2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseSectionComponent } from './course-section/course-section.component';
import { GetAdmissionComponent } from './get-admission/get-admission.component';
import { GetAdmissionStep3Component } from './get-admission-step3/get-admission-step3.component';
import { GetAdmissionStep4Component } from './get-admission-step4/get-admission-step4.component';
import { GetAdmissionThankYouComponent } from './get-admission-thank-you/get-admission-thank-you.component';


const routes: Routes = [
    { path: '', component: CourseSectionComponent,
  
    },
    { path: 'admision-step1' + '/:id', component: GetAdmissionComponent },
    { path: 'admision-step2' + '/:id', component: GetAdmissionStep2Component },

    { path: 'admision-step3' + '/:id', component: GetAdmissionStep3Component },

    { path: 'admision-step4' + '/:id', component: GetAdmissionStep4Component },
    { path: 'thankyou', component: GetAdmissionThankYouComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
