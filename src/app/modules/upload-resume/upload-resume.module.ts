import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadResumeStep1Component } from './pages/upload-resume-step1/upload-resume-step1.component';
import { UploadResumeProfileComponent } from './pages/upload-resume-profile/upload-resume-profile.component';
// tslint:disable-next-line:max-line-length
import { UploadResumeEmpolymentHistoryComponent } from './pages/upload-resume-empolyment-history/upload-resume-empolyment-history.component';
import { UploadResumeEducationComponent } from './pages/upload-resume-education/upload-resume-education.component';
import { UploadResumeCertifactionsComponent } from './pages/upload-resume-certifactions/upload-resume-certifactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgpSortModule } from 'ngp-sort-pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { UploadResumeRoutingModule } from './upload-resume-routing.module';
import { UploadResumePreviewComponent } from './pages/upload-resume-preview/upload-resume-preview.component';
import { TypeaheadModule } from 'ngx-type-ahead';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [UploadResumeStep1Component, UploadResumeProfileComponent, UploadResumeEmpolymentHistoryComponent, UploadResumeEducationComponent, UploadResumeCertifactionsComponent, UploadResumePreviewComponent],
  imports: [
    CommonModule,
    UploadResumeRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    NgxMaterialTimepickerModule,
    ImageCropperModule,
    NgpSortModule,
    AngularMultiSelectModule,
    NgbModule,
    NgxDropzoneModule,
    FormsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    NgpSortModule,
    TypeaheadModule,
  ]
})
export class UploadResumeModule { }
