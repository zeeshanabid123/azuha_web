import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { EUploadType } from '../../core/models/common.model';
import { CommonService } from '../../core/services/common.service';
import { UploadService } from '../../core/services/upload.service';
import { AdmisionUploadModel } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-get-admission-step3',
  templateUrl: './get-admission-step3.component.html',
  styleUrls: ['./get-admission-step3.component.scss'],
})
export class GetAdmissionStep3Component implements OnInit {
  public id: string;
  upload=false;
  public AcadmicUpload: AdmisionUploadModel = new AdmisionUploadModel();
  constructor(
    private formBuilder: FormBuilder,

    private commonService: CommonService,
    private route: ActivatedRoute,
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private router: Router,
    private uploader: UploadService,
    private service: CourseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.hasOwnProperty('id')) {
        this.id = params['id'];
        // this.customerService.getfitnesscustomerprofile().subscribe(x => {
        //   this.personalInformation = x.data;
        //   this.step1Form.controls['password'].disable();
        //   this.processFetchedData();
        // });
      } else {
        debugger;
        const modelFromStorage = localStorage.getItem('UploadInformationModel');
        if (modelFromStorage !== null) {
          // if (this.personalInformation) {
          //   this.step1Form.patchValue(this.personalInformation);
          //   if (this.personalInformation.profilePicThumbnail !== null) {
          //     this.croppedImage = 'https://isolategym.stagingdesk.com/' + this.personalInformation.profilePicThumbnail;
          //   }
          //   // this.step1Form.controls.phone.setValue(this.personalInformation.phoneNumber.number);
          // }
        }
      }
    });
  }

  fileChangeEvent(event: any, content: any): void {
    //debugger;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event1: any) => {};
      reader.readAsDataURL(event.target.files[0]);
      this.uploader
        .upload(event.target.files[0], EUploadType.Document.toString())
        .subscribe(message => {
          debugger;
          console.log(message);
          this.upload=true;
          if (content == 1) {
            this.AcadmicUpload.schoolRecordUrl = message.body.data[0].url;
          } else if (content == 2) {
            this.AcadmicUpload.cnicurl = message.body.data[0].url;
          } else if (content == 3) {
            this.AcadmicUpload.bformUrl = message.body.data[0].url;
          }
        });
    }
  }

  onSubmit(){
    localStorage.setItem('UploadInformationModel', JSON.stringify(this.AcadmicUpload));
    this.router.navigate(['/courses/admision-step4', this.id]);
  }
}
