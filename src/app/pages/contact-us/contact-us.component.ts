import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { ContactUsRequestModel } from 'src/app/modules/core/models/common.model';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactUsRequestModel: ContactUsRequestModel = new ContactUsRequestModel();
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  PhoneNumber: any;
  constructor(@Inject(ROUTES_CONFIG) public routesConfig: any,
    public router: Router,
    private headerService: HeaderService,   private snackBar: MatSnackBar) { }
  reponseModel: any;
  ngOnInit(): void {
  }

  conatctUsForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
    name: new FormControl(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,50}$')]),
    email: new FormControl(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    description: new FormControl(undefined, [Validators.required]),

  });

  onSubmit() {
    debugger;
    this.PhoneNumber = this.conatctUsForm.get('phone').value;
    this.contactUsRequestModel.name = this.conatctUsForm.get('name').value;
    this.contactUsRequestModel.email = this.conatctUsForm.get('email').value;
    this.contactUsRequestModel.phoneNumber = this.PhoneNumber.number;
    this.contactUsRequestModel.description = this.conatctUsForm.get('description').value;
    this.contactUsRequestModel.countryCode = this.PhoneNumber.dialCode;


    this.headerService.saveContactUs(this.contactUsRequestModel).subscribe(x => {
      this.reponseModel = x.data;
      this.conatctUsForm.reset();
      this.showSnackBarSucess();

    });
  }

  showSnackBarSucess(): void {
    this.snackBar.open('Your Request has been sucesssfully submit  ','OK', { duration: 5000 })
      .onAction()
      .subscribe();
  }

}
