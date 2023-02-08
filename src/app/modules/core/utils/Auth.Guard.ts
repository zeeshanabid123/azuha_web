import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../account/shared/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        const token = this.loginService.getToken();

        if (token) {
            // logged in so return true
            return true;
        } else {
            this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        }
        return false;
    }
}
