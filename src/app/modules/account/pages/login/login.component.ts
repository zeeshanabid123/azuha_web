import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { ROUTES_CONFIG, RoutesConfig } from 'src/app/configs/routes.config';
import { Router } from '@angular/router';
import { ForgetPassword, LoginRequestModel, LoginResponseModel } from '../../shared/login.model';
import { LoginService } from '../../shared/login.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginModel: LoginRequestModel = new LoginRequestModel();
  public loginResponseModel: LoginResponseModel = new LoginResponseModel();
  public forgetpasswordResponseModel: ForgetPassword = new ForgetPassword();
  get f() {
    return this.loginForm.controls;
  }
  isReseting = false;
  isResetEmailSent = false;
  loginForm: FormGroup;
  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private deviceService: DeviceDetectorService
  ) {
    this.epicFunction();
  }

  ngOnInit(): void {
    this.isReseting = false;
    this.isResetEmailSent = false;
    if (this.loginService.getUserInformation()) {
      this.router.navigate([RoutesConfig.routes.home]);
    }

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('^(?!.*//)[A-Za-z0-9][A-Za-z0-9/]*$')],
      ],
    });
  }
  activeTab = 'search';

  search(activeTab) {
    debugger;
    this.activeTab = activeTab;
  }

  result(activeTab) {
    this.activeTab = activeTab;
  }
  epicFunction() {
    this.loginModel.deviceModel = this.deviceService.device;
    this.loginModel.os = this.deviceService.os;
    this.loginModel.version = this.deviceService.os_version;
    this.loginModel.deviceType = 3;
  }
  onSubmit() {
    debugger;
    this.loginModel.userInfo = this.loginForm.get('email').value;
    this.loginModel.password = this.loginForm.get('password').value;
    this.forgetpasswordResponseModel.email = this.loginForm.get('email').value;
    if (this.isReseting) {
      this.loginService
        .forgotsentverificationlink(this.forgetpasswordResponseModel)
        .subscribe(x => {
          debugger;
          this.isResetEmailSent = true;
        });
    } else {
      const promise1 = this.loginService.login(this.loginModel).toPromise();
      Promise.all([promise1]).then(([var1]) => {
        debugger;
        this.loginResponseModel = var1.data;
        this.loginService.authenticate(this.loginResponseModel);
        this.router.navigate(['/', 'dashboard']).then(() => {
          window.location.reload();
        });
      });
    }
  }

  onClickResetPassword() {
    debugger;
    this.isReseting = true;
    this.isResetEmailSent = false;
    this.loginForm.controls.password.setValue('12345678');
  }

  onClickLoginInstead() {
    this.isReseting = false;
    this.isResetEmailSent = false;
    this.loginForm.controls.password.setValue('');
  }

  goToJoinCommunity(): void {
    this.router.navigate([RoutesConfig.routes.joincommunity.basePath]);
  }
}
