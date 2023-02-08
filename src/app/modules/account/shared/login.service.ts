import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExternalAuthDto, ForgetPassword, LoginRequestModel, LoginResponseModel, RegisterModel, ResetPasswordModel, restPassowrdModel } from './login.model';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import { CookieService } from '@gorniv/ngx-universal';
import { Router } from '@angular/router';
import { EProfileType } from '../../core/models/common.model';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router,private _externalAuthService: SocialAuthService) {
    this.baseUrl = environment.api.baseUrl;
  }

  login(model: LoginRequestModel) {
    return this.http.post<ResponseModel<LoginResponseModel>>(`${this.baseUrl}/api/v1/Account/login`, model);
  }

  saveExtralLogin(model: ExternalAuthDto) {
    return this.http.post<ResponseModel<LoginResponseModel>>(`${this.baseUrl}/api/v1/Account/HandleExternalLogin`, model);
  }

  changepassword(model: ResetPasswordModel) {
    debugger;
    return this.http.post<ResponseModel<boolean>>(`${this.baseUrl}/api/Account/changepassword`, model);
  }

  saveUser(model: RegisterModel){
    return this.http.post<ResponseModel<boolean>>(`${this.baseUrl}/api/v1/Account/save`, model);

  }

  forgotsentverificationlink(model: ForgetPassword) {
    return this.http.post<ResponseModel<boolean>>(`${this.baseUrl}/api/v1/Account/forgotpassword`,model);
  }

  public authenticate(loginResponse: LoginResponseModel): boolean {
    if (loginResponse.accessToken !== '' && loginResponse.accessToken !== null) {
      this.cookieService.putObject('loginResponse', loginResponse);
      this.cookieService.put('token', loginResponse.accessToken);
      return true;
    }
    else {
      this.logout();
      return false;
    }
  }

  public getUserInformation()
  {
    const loginResponseModel = this.cookieService.getObject('loginResponse') as LoginResponseModel;
    
    return loginResponseModel;
  }

  public getEUserProfileType()
  {
    return EProfileType[this.getEnumKeyByEnumValue(EProfileType, this.getUserInformation()?.profileTypeId?.toUpperCase())];
  }

  getEnumKeyByEnumValue(myEnum, enumValue) {
    const keys = Object.keys(myEnum).filter(x => myEnum[x].toUpperCase() == enumValue);
    return keys.length > 0 ? keys[0] : null;
  }


  public isLoggedIn()
  {
    return this.cookieService.get('token') !== undefined;
  }

  public getToken()
  {
    const loginResponseModel = this.cookieService.get('token');
    return loginResponseModel;
  }
  public signInWithGoogle = ()=> {
    return this._externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signOutExternal = () => {
    this._externalAuthService.signOut();
  }
  logout() {
    this.cookieService.removeAll();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  restPassword(model: restPassowrdModel){
    return this.http.post<ResponseModel<boolean>>(`${this.baseUrl}/api/v1/Account/resetpassword`, model);
  }
}
