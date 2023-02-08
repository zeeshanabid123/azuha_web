import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MENU_SCROLL_STRATEGY_FACTORY } from '@angular/material/menu/menu-trigger';
import { Router } from '@angular/router';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { LoginService } from 'src/app/modules/account/shared/login.service';
import { ProfileInfo } from '../../shared/upload-resume.model';
import { UploadResumeService } from '../../shared/upload-resume.service';

@Component({
  selector: 'app-upload-resume-profile',
  templateUrl: './upload-resume-profile.component.html',
  styleUrls: ['./upload-resume-profile.component.scss'],
})
export class UploadResumeProfileComponent implements OnInit {
  public personalInformationModel: ProfileInfo = new ProfileInfo();

  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private loginService: LoginService,
    private uploadresume: UploadResumeService,
    private router: Router
  ) {}

  phoneForm = new FormGroup({
    titlename: new FormControl(undefined, [Validators.required]),
    firstname: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    lastname: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    middlename: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),

    email: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(
        '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$'
      ),
    ]),
    mobilenumber: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    homephonenumber: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    alternatephonenumber: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    addressline1: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    addressline2: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    cityname: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    statename: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    postalcode: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$'),
    ]),
    homecountry: new FormControl(undefined, [Validators.required]),
    nationality: new FormControl(undefined, [Validators.required]),
    countryresidence: new FormControl(undefined, [Validators.required]),

    bio: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1000),
    ]),
  });

  GetProfileOnload() {
    const promise1 = this.uploadresume.getprofile().toPromise();

    Promise.all([promise1]).then(([var1, var2]) => {
      debugger;
      if (var1.data !== null) {
        this.personalInformationModel = var1.data;
        this.processFetchedData();
      }
   
    });
  }
  onThenSubmit() {
    debugger;
    this.personalInformationModel.titleName = this.phoneForm.get('titlename').value;
    this.personalInformationModel.firstName = this.phoneForm.get('firstname').value;
    this.personalInformationModel.lastName = this.phoneForm.get('lastname').value;
    this.personalInformationModel.middleName = this.phoneForm.get('middlename').value;
    this.personalInformationModel.email = this.phoneForm.get('email').value;
    this.personalInformationModel.phoneNumber = this.phoneForm.get('mobilenumber').value;
    this.personalInformationModel.homeCountryPhoneNumber = this.phoneForm.get(
      'homephonenumber'
    ).value;
    this.personalInformationModel.addressLine1 = this.phoneForm.get('addressline1').value;
    this.personalInformationModel.addressLine2 = this.phoneForm.get('addressline2').value;
    this.personalInformationModel.alternateNumber = this.phoneForm.get(
      'alternatephonenumber'
    ).value;
    this.personalInformationModel.cityName = this.phoneForm.get('cityname').value;
    this.personalInformationModel.countryId = Number(this.phoneForm.get('homecountry').value);
    this.personalInformationModel.stateName = this.phoneForm.get('statename').value;
    this.personalInformationModel.nationality = this.phoneForm.get('nationality').value;
    this.personalInformationModel.countryResidenceId = this.phoneForm.get('countryresidence').value;
    this.personalInformationModel.postlCode = this.phoneForm.get('postalcode').value;
    this.personalInformationModel.summary = this.phoneForm.get('bio').value;
    this.uploadresume.SaveResumeProfile(this.personalInformationModel).subscribe(x => {
      if (x.data) {
        this.phoneForm.reset();
        this.router.navigate([RoutesConfig.routes.uploadresume.previewprofile]);
      }
    });
  }

  processFetchedData() {
    this.phoneForm.controls.titlename.setValue(this.personalInformationModel.titleName);
    this.phoneForm.controls.firstname.setValue(this.personalInformationModel.firstName);
    this.phoneForm.controls.lastname.setValue(this.personalInformationModel.lastName);
    this.phoneForm.controls.middlename.setValue(this.personalInformationModel.middleName);
    this.phoneForm.controls.email.setValue(this.personalInformationModel.email);
    this.phoneForm.controls.mobilenumber.setValue(this.personalInformationModel.phoneNumber);
    this.phoneForm.controls.homephonenumber.setValue(
      this.personalInformationModel.homeCountryPhoneNumber
    );
    this.phoneForm.controls.addressline1.setValue(this.personalInformationModel.addressLine1);
    this.phoneForm.controls.addressline2.setValue(this.personalInformationModel.addressLine2);
    this.phoneForm.controls.alternatephonenumber.setValue(
      this.personalInformationModel.alternateNumber
    );
    this.phoneForm.controls.cityname.setValue(this.personalInformationModel.cityName);
    this.phoneForm.controls.statename.setValue(this.personalInformationModel.stateName);
    this.phoneForm.controls.nationality.setValue(this.personalInformationModel.nationality);
    this.phoneForm.controls.countryresidence.setValue(
      this.personalInformationModel.countryResidenceId
    );
    this.phoneForm.controls.postalcode.setValue(this.personalInformationModel.postlCode);
    this.phoneForm.controls.bio.setValue(this.personalInformationModel.summary);
  }

  ngOnInit(): void {
    this.GetProfileOnload();
  }
}
