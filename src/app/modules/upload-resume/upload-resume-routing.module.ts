import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';

import { GuestOnlyGuard } from '../core/utils/GuestOnly.Guard';
import { UploadResumeCertifactionsComponent } from './pages/upload-resume-certifactions/upload-resume-certifactions.component';
import { UploadResumeEducationComponent } from './pages/upload-resume-education/upload-resume-education.component';
import { UploadResumeEmpolymentHistoryComponent } from './pages/upload-resume-empolyment-history/upload-resume-empolyment-history.component';
import { UploadResumePreviewComponent } from './pages/upload-resume-preview/upload-resume-preview.component';
import { UploadResumeProfileComponent } from './pages/upload-resume-profile/upload-resume-profile.component';
import { UploadResumeStep1Component } from './pages/upload-resume-step1/upload-resume-step1.component';

const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
    { path: routesNames.uploadresume.upload, component: UploadResumeStep1Component },

    { path: routesNames.uploadresume.resumeprofile, component: UploadResumeProfileComponent },

    { path: routesNames.uploadresume.resumeeducation, component: UploadResumeEducationComponent },

    { path: routesNames.uploadresume.empolymenthistory, component: UploadResumeEmpolymentHistoryComponent },
    { path: routesNames.uploadresume.certification, component: UploadResumeCertifactionsComponent },
    { path: routesNames.uploadresume.previewprofile, component: UploadResumePreviewComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UploadResumeRoutingModule { }
