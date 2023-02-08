import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../account/shared/login.service';
import { debug } from 'console';
import { LoginResponseModel } from '../../account/shared/login.model';

@Injectable({
    providedIn: 'root'
})
export class PaymentCheckGuard implements CanActivate {
    public loginResponseModel: LoginResponseModel = new LoginResponseModel();
    constructor(
        private router: Router,
        private loginService: LoginService,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        const token = this.loginService.getToken();
        this.loginResponseModel = this.loginService.getUserInformation() as LoginResponseModel;
        const url = state.url;
        let id = '';
        if (route && route.children.length > 0 && route.children[0].params['id']) {
            id = route.children[0].params['id'];
        }
        if (this.loginResponseModel.isSubscribed==false) {
            // not logged in so return true
            return true;
        } else {
            this.router.navigate(['/dashboard']);
        }
        return false;
    }

  
}
