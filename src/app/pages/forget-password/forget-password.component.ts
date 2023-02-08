import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { restPassowrdModel } from 'src/app/modules/account/shared/login.model';
import { LoginService } from 'src/app/modules/account/shared/login.service';
import { ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';
import { RoutesConfig } from 'src/app/configs/routes.config';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  changePasswordform: FormGroup
  public restpassowrd: restPassowrdModel= new restPassowrdModel();
  public id: string;
  errormessage: string;
  constructor(private loginService: LoginService,  private router: Router,private formBuilder: FormBuilder,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.changePasswordform = this.formBuilder.group({

      password:['',[Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^(?!.*\/\/)[A-Za-z0-9][A-Za-z0-9\/]*$')]], 
      confirmPassword:['', RxwebValidators.compare({fieldName:'password' })], 
  });
    ReactiveFormConfig.set({'validationMessage':{"compare":"password does not match"}});
  }

  ngAfterViewInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
        } else {

        }
      }
    );
  }

  onSubmit() {
    debugger;
    this.restpassowrd.id = this.id;
    this.restpassowrd.newPassword = this.changePasswordform.get('password').value;
    this.loginService.restPassword(this.restpassowrd).subscribe(x => {
        if (x.data) {
          this.router.navigate([RoutesConfig.routes.account.login]);
        }
        if(x.isError)
        {
          this.errormessage = x.messages;
        }
      });
  }

}
