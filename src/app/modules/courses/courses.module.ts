import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseSectionComponent } from './course-section/course-section.component';
import { GetAdmissionComponent } from './get-admission/get-admission.component';
import { GetAdmissionStep2Component } from './get-admission-step2/get-admission-step2.component';
import { GetAdmissionStep3Component } from './get-admission-step3/get-admission-step3.component';
import { GetAdmissionStep4Component } from './get-admission-step4/get-admission-step4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { GetAdmissionThankYouComponent } from './get-admission-thank-you/get-admission-thank-you.component'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [CourseSectionComponent, GetAdmissionComponent, GetAdmissionStep2Component, GetAdmissionStep3Component, GetAdmissionStep4Component, GetAdmissionThankYouComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    NgbModule,
    NgxDropzoneModule,
    FormsModule,
    NgxPaginationModule,
    
    NgxMaskModule.forRoot(options),
  ]
})
export class CoursesModule { }
