import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { CommonService } from '../../core/services/common.service';
import { AdmisionAdmicModel, CourseModel } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-get-admission-step2',
  templateUrl: './get-admission-step2.component.html',
  styleUrls: ['./get-admission-step2.component.scss'],
})
export class GetAdmissionStep2Component implements OnInit {
  step1Form: FormGroup;
  public AcadmicInformation: AdmisionAdmicModel = new AdmisionAdmicModel();
  public CoursesModel: CourseModel[] = [];
  previousEducation = [{
    id: '8f8c6e98',
    name: 'USA',
    code: 'USD'
   },
   {
    id: '169fee1a',
    name: 'Canada',
    code: 'CAD'
   },
   {
    id: '3953154c',
    name: 'UK',
    code: 'GBP'
   }]
  public id: string;
  constructor(
    private formBuilder: FormBuilder,

    private commonService: CommonService,
    private route: ActivatedRoute,
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private router: Router,
    private service: CourseService
  ) {}

  ngOnInit(): void {
    this.step1Form = this.formBuilder.group({
      couresName: ['', [Validators.required]],
      previousEducation: ['', [Validators.required]],
      from: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
    });
    this.service.getCoures().subscribe(x => {
      debugger;
      if (x.data) {
        this.CoursesModel = x.data;
        this.route.params.subscribe((params: any) => {
          if (params.hasOwnProperty('id')) {
            this.id = params['id'];
            this.CoursesModel = this.CoursesModel.filter(function (tag) {
              return tag.id.indexOf(this.id) >= 0;
            });
            // this.customerService.getfitnesscustomerprofile().subscribe(x => {
            //   this.personalInformation = x.data;
            //   this.step1Form.controls['password'].disable();
            //   this.processFetchedData();
            // });
          } else {
            debugger;
            const modelFromStorage = localStorage.getItem('acadmicInformationModel');
            if (modelFromStorage !== null) {
              this.AcadmicInformation = JSON.parse(modelFromStorage);
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
    });
  }
  changeCourse(e: any) {
    this.step1Form.controls.couresName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  processFetchedData() {
    debugger;
    if (this.AcadmicInformation) {
      this.step1Form.controls.couresName.setValue(this.AcadmicInformation.courseTypeId);
      this.step1Form.controls.from.setValue(this.AcadmicInformation.peducationFrom);
      this.step1Form.controls.previousEducation.setValue(this.AcadmicInformation.prevoiusEducation);
    }
  }

  onSubmit() {
    //debugger;
    this.onThenSubmit();
  }

  onThenSubmit() {
    debugger;
    this.AcadmicInformation.courseTypeId = this.step1Form.get('couresName').value.id;
    this.AcadmicInformation.peducationFrom = this.step1Form.get('from').value.trim();
    this.AcadmicInformation.prevoiusEducation = this.step1Form.get('previousEducation').value.id;

    if (this.id) {
      localStorage.setItem('acadmicInformationModel', JSON.stringify(this.AcadmicInformation));
      localStorage.setItem('SelectedCourse', JSON.stringify(this.step1Form.get('couresName').value));

      this.router.navigate(['/courses/admision-step3', this.id]);
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
      localStorage.setItem('acadmicInformationModel', JSON.stringify(this.AcadmicInformation));

      if (
        this.step1Form.get('couresName').value !== '' &&
        this.step1Form.get('couresName').value !== null &&
        this.step1Form.get('couresName').value !== undefined &&
        this.step1Form.get('from').value !== '' &&
        this.step1Form.get('from').value !== null &&
        this.step1Form.get('from').value !== undefined &&
        this.step1Form.get('prevoiusEducation').value !== '' &&
        this.step1Form.get('prevoiusEducation').value !== null &&
        this.step1Form.get('prevoiusEducation').value !== undefined
      ) {
        this.router.navigate(['/admision-step3', this.id]);
      }
    }
  }
}
