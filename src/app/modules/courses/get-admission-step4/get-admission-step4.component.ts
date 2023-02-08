import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { AdmisionUploadModel, AdmisionAdmicModel, AdmisionBasicInfoModel, AdmisionModel } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-get-admission-step4',
  templateUrl: './get-admission-step4.component.html',
  styleUrls: ['./get-admission-step4.component.scss']
})
export class GetAdmissionStep4Component implements OnInit {
  public AcadmicUpload: AdmisionUploadModel = new AdmisionUploadModel();
  public AcadmicInformation: AdmisionAdmicModel = new AdmisionAdmicModel();
  public personalInformation: AdmisionBasicInfoModel = new AdmisionBasicInfoModel();
  public course: any;

  public mainModel: AdmisionModel = new AdmisionModel();
  isSaving=false;
  constructor(
    private service: CourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ProcessSignUpData();
  }

  ProcessSignUpData() {
    debugger;
    const personalInformationModel = localStorage.getItem('personalInformationModel');
    const acadmicInformationModel = localStorage.getItem('acadmicInformationModel');
    const uploadInfrmationModel = localStorage.getItem('UploadInformationModel');
    const selectedCourseModel = localStorage.getItem('SelectedCourse');



    if (personalInformationModel !== null) {
      this.personalInformation = JSON.parse(personalInformationModel);

      // tslint:disable-next-line: max-line-length

    }
    if (acadmicInformationModel !== null) {
      this.AcadmicInformation = JSON.parse(acadmicInformationModel);
    }
    if (uploadInfrmationModel !== null) {
      this.AcadmicUpload = JSON.parse(uploadInfrmationModel);
    }
    if (selectedCourseModel !== null) {
      this.course = JSON.parse(selectedCourseModel);
    }

  }


  onSaveToDb() {

    this.mainModel.name=this.personalInformation.name;
    this.mainModel.phoneNumber=this.personalInformation.phoneNumber;
    this.mainModel.emailAddress=this.personalInformation.emailAddress;
    this.mainModel.fatherName=this.personalInformation.fatherName;
    this.mainModel.dob=this.personalInformation.dob;
    this.mainModel.idCardNumber=this.personalInformation.idCardNumber;
    this.mainModel.currentAddress=this.personalInformation.currentAddress;
    this.mainModel.city=this.personalInformation.city;
    this.mainModel.country=this.personalInformation.country;

    this.mainModel.prevoiusEducation=this.AcadmicInformation.prevoiusEducation;
    this.mainModel.peducationFrom=this.AcadmicInformation.peducationFrom;
    this.mainModel.courseTypeId=0;
    this.mainModel.courseId=this.AcadmicInformation.courseTypeId;


    this.mainModel.schoolRecordUrl=this.AcadmicUpload.schoolRecordUrl;
    this.mainModel.cnicurl=this.AcadmicUpload.cnicurl;
    this.mainModel.bformUrl=this.AcadmicUpload.bformUrl;


    this.isSaving = true;
    debugger;
    const promise1 = this.service.SaveAdmisition(this.mainModel).toPromise();

    Promise.all([promise1]).then(([response]) => {
      this.isSaving = false;
      if (response.data) {

       this.router.navigate(['/courses/thankyou']).then(() => {
             window.location.reload();
           });

       // this.router.navigate([RoutesConfig.routes.isoProfileSignUp.thankyouforsignup]);

        // const promise2 = this.loginService.login({
        //   email: this.mainTrainnerModel.basicInfoTraner.email,
        //   password: this.mainTrainnerModel.basicInfoTraner.password
        // }).toPromise();
        // Promise.all([promise2]).then(([var1]) => {
        //   const loginResponse = var1.data;
        //   localStorage.clear();
        //   this.loginService.authenticate(loginResponse);
        //   this.router.navigate([RoutesConfig.routes.joincommunity.joinCustomer.thankyouforsignup]).then(() => {
        //     window.location.reload();
        //   });
        // });
      }
    });

  }

 
}
