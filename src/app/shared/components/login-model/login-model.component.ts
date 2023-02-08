import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialUser } from 'angularx-social-login';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { interval } from 'rxjs';
import { ExternalAuthDto, LoginRequestModel, LoginResponseModel, RegisterModel } from 'src/app/modules/account/shared/login.model';
import { LoginService } from 'src/app/modules/account/shared/login.service';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent implements OnInit {
  @Input() id: string;
  @ViewChild('tabset') tabset: TabsetComponent;
  showSignForm = false;
  get f() { return this.loginForm.controls; }
  get s() { return this.RegisterForm.controls; }

  loginForm: FormGroup;
  RegisterForm: FormGroup;
  public loginModel: LoginRequestModel = new LoginRequestModel();
  public loginResponseModel: LoginResponseModel = new LoginResponseModel();
  public user: LoginResponseModel;
  public regsiterRequest: RegisterModel = new RegisterModel();
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService,
    private deviceService: DeviceDetectorService,
    private modalService: NgbModal,
    
    ) {

    this.epicFunction();
   }

  ngOnInit(): void {


    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.pattern('^(?!.*\/\/)[A-Za-z0-9][A-Za-z0-9\/]*$')]],
    });

    this.RegisterForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?!.*\/\/)[A-Za-z0-9][A-Za-z0-9\/]*$')]],
    });
    this.user = this.loginService.getUserInformation();
    // this.loginResponseModel = this.loginService.getUserInformation() as LoginResponseModel;
  }
  epicFunction() {
    this.loginModel.deviceModel = this.deviceService.device;
    this.loginModel.os = this.deviceService.os;
    this.loginModel.version = this.deviceService.os_version;
    this.loginModel.deviceType = 3;

  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.goto();
    }, 100)

  }
  hide: boolean = true;

  myFunction() {
    this.hide = !this.hide;
  }
  goto() {
    this.tabset.tabs[this.id].active = true;
  }

  showcutomSignForm() {
    this.showSignForm = true;
  }
  onSubmit() {
    debugger;
    this.regsiterRequest.emailAddress = this.RegisterForm.get('email').value;
    this.regsiterRequest.password = this.RegisterForm.get('password').value;
    this.regsiterRequest.userName = this.RegisterForm.get('userName').value;

    const promise1 = this.loginService.saveUser(this.regsiterRequest).toPromise();
    Promise.all([promise1]).then(([var1]) => {
      debugger;
      this.tabset.tabs[1].active = true;
      this.RegisterForm.reset();
    });
  }

  OnLoginSubmit()
  {
    debugger;
    this.loginModel.userInfo = this.loginForm.get('userName').value;
    this.loginModel.password = this.loginForm.get('password').value;
    const promise1 = this.loginService.login(this.loginModel).toPromise();
      Promise.all([promise1]).then(([var1]) => {
        debugger;
        this.loginResponseModel = var1.data;
        this.loginService.authenticate(this.loginResponseModel);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      });
  }

  public externalLogin = () => {
    debugger;
    this.loginService.signInWithGoogle()
    .then(res => {
      const user: SocialUser = { ...res };
      console.log(user);
      const externalAuth: ExternalAuthDto = {
        provider: user.provider,
        idToken: user.idToken
      }
      this.validateExternalAuth(externalAuth);
    }, error => console.log(error))
  }

  private validateExternalAuth(externalAuth: ExternalAuthDto) {
    const promise1 = this.loginService.saveExtralLogin(externalAuth).toPromise();
    Promise.all([promise1]).then(([var1]) => {
      debugger;
      this.loginResponseModel = var1.data;
      this.loginService.authenticate(this.loginResponseModel);
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    });
  }
  close() {
    this.modalService.dismissAll();
  }
}
