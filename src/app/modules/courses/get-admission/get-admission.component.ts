import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { CommonService } from '../../core/services/common.service';
import { AdmisionBasicInfoModel } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-get-admission',
  templateUrl: './get-admission.component.html',
  styleUrls: ['./get-admission.component.scss'],
})
export class GetAdmissionComponent implements OnInit {
  step1Form: FormGroup;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  public id: string;
  public personalInformation: AdmisionBasicInfoModel = new AdmisionBasicInfoModel();
  constructor(
    private formBuilder: FormBuilder,

    private commonService: CommonService,
    private route: ActivatedRoute,
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private router: Router,
    private service: CourseService
  ) {}

  ngOnInit(): void {
    debugger;
    this.step1Form = this.formBuilder.group({
      phone: ['', [Validators.required]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      fatherName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      country: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      dob: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      idCardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
    });
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
        const modelFromStorage = localStorage.getItem('IsoTrainnerpersonalInformationModel');
        if (modelFromStorage !== null) {
          this.personalInformation = JSON.parse(modelFromStorage);
          // if (this.personalInformation) {
          //   this.step1Form.patchValue(this.personalInformation);
          //   if (this.personalInformation.profilePicThumbnail !== null) {
          //     this.croppedImage = 'https://isolategym.stagingdesk.com/' + this.personalInformation.profilePicThumbnail;
          //   }
          //   // this.step1Form.controls.phone.setValue(this.personalInformation.phoneNumber.number);

          // }
        }
        this.processFetchedData();
      }
    });
  }

  processFetchedData() {
    debugger;
    if (this.personalInformation) {
      // this.step1Form.patchValue(this.personalInformation);
      if (this.personalInformation?.phoneNumber) {
        this.step1Form.controls.phone.setValue(this.personalInformation.phoneNumber);
      } else if (
        this.personalInformation?.phoneNumber.countryCode &&
        this.personalInformation?.phoneNumber
      ) {
        this.step1Form.controls.phone.setValue(
          this.personalInformation?.phoneNumber.countryCode +
            this.personalInformation.phoneNumber.phoneNumber
        );
        this.step1Form.controls.phone.setValue(
          this.personalInformation.phoneNumber.dialCode +
            this.personalInformation.phoneNumber.number
        );
      }
      this.step1Form.controls.name.setValue(this.personalInformation.name);
      this.step1Form.controls.fatherName.setValue(this.personalInformation.fatherName);
      this.step1Form.controls.email.setValue(this.personalInformation.emailAddress);
      this.step1Form.controls.city.setValue(this.personalInformation.city);
      this.step1Form.controls.country.setValue(this.personalInformation.country);
      this.step1Form.controls.address.setValue(this.personalInformation.currentAddress);
      this.step1Form.controls.dob.setValue(this.personalInformation.dob);
      this.step1Form.controls.idCardNumber.setValue(this.personalInformation.idCardNumber);
    }
  }

  onSubmit() {
    //debugger;
    this.onThenSubmit();
  }

  onThenSubmit() {
    debugger;
    this.personalInformation.name = this.step1Form.get('name').value.trim();
    this.personalInformation.fatherName = this.step1Form.get('fatherName').value.trim();
    this.personalInformation.phoneNumber = this.step1Form.get('phone').value;
    this.personalInformation.emailAddress = this.step1Form.get('email').value;
    this.personalInformation.city = this.step1Form.get('city').value;
    this.personalInformation.country = this.step1Form.get('country').value;
    this.personalInformation.currentAddress = this.step1Form.get('address').value;
    this.personalInformation.dob = (
      this.step1Form.get('dob').value.day +
      '' +
      this.step1Form.get('dob').value.month +
      '' +
      this.step1Form.get('dob').value.year
    ).toString();
    this.personalInformation.idCardNumber = this.step1Form.get('idCardNumber').value;
    this.personalInformation.phoneNumber = this.personalInformation.phoneNumber.internationalNumber;

    if (this.id) {
      localStorage.setItem('personalInformationModel', JSON.stringify(this.personalInformation));
      this.router.navigate(['/courses/admision-step2', this.id]);
      // this.fitnessTrainerService.saveeditprofile(this.personalInformation).subscribe(x => {
      //   if (x.data) {
      //     this.headerSharingService.changeMessage({
      //       imageThumbnailUrl: this.personalInformationModel.imageUrlThubnail,
      //       name: this.personalInformationModel.name
      //     });
      //     this.router.navigate([RoutesConfig.routes.trainerDashboard.basePath + '/trainer-dashboard-profile']);
      //   }
      // });
    } else {
      //Client only code.
      debugger;
      localStorage.setItem('personalInformationModel', JSON.stringify(this.personalInformation));

      if (
        this.step1Form.get('name').value !== '' &&
        this.step1Form.get('name').value !== null &&
        this.step1Form.get('name').value !== undefined &&
        this.step1Form.get('fatherName').value !== '' &&
        this.step1Form.get('fatherName').value !== null &&
        this.step1Form.get('fatherName').value !== undefined &&
        this.step1Form.get('phone').value !== '' &&
        this.step1Form.get('phone').value !== null &&
        this.step1Form.get('phone').value !== undefined &&
        this.step1Form.get('email').value !== '' &&
        this.step1Form.get('email').value !== null &&
        this.step1Form.get('email').value !== undefined
      ) {
        this.router.navigate(['/admision-step2', this.id]);
      }
    }
  }
}
