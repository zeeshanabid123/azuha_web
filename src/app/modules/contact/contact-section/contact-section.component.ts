import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { AboutModel } from '../../about/shared/about.model';
import { CommonService } from '../../core/services/common.service';
import { ContactModel } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  public Id:string;
  public Id2:string;
  step1Form: FormGroup;
  isSaving:boolean;
  public contactModel: ContactModel = new ContactModel();
  public baseUrl: string;
  public aboutUs: AboutModel= new AboutModel();
  public aboutUs1: AboutModel= new AboutModel();

  constructor(
    private formBuilder: FormBuilder,

    private commonService: CommonService,
    private route: ActivatedRoute,
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private router: Router,
    private service: ContactService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    debugger;
    this.step1Form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
      phoneNumber: [
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
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5000) /* Validators.pattern('.*\S+.*')*/,
        ],
      ], //^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$
    });
    this.Id="33D30F1E-B03D-436D-9A12-49AC06DAF35B";
    this.service.getAboutUs(this.Id).subscribe(x => {
      if (x.data) {
        this.aboutUs=x.data;
      }
    });
    this.Id2="A5C5FC89-4226-4FA7-AC45-95CE8988791D";
    this.service.getAboutUs(this.Id2).subscribe(x => {
      debugger;
      if (x.data) {
        this.aboutUs1=x.data;
      }
    });
  }

  onSubmit() {
    this.contactModel.firstName = this.step1Form.get('name').value.trim();
    this.contactModel.email = this.step1Form.get('email').value.trim();
    this.contactModel.phoneNumber = this.step1Form.get('phoneNumber').value.trim();
    this.contactModel.query = this.step1Form.get('message').value.trim();

    this.isSaving = true;
    debugger;
    const promise1 = this.service.SaveContact(this.contactModel).toPromise();

    Promise.all([promise1]).then(([response]) => {
      this.isSaving = false;
      if (response.data) {
        this.step1Form.reset();
        this.showSnackBarSucess();

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

  showSnackBarSucess(): void {
    this.snackBar.open('Your Request has been sucesssfully submit  ','OK', { duration: 5000 })
      .onAction()
      .subscribe();
  }
}
