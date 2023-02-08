import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../account/shared/login.service';
import { debug } from 'console';

@Injectable({
    providedIn: 'root'
})
export class GuestOnlyGuard implements CanActivate {

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        const token = this.loginService.getToken();

        const url = state.url;
        let id = '';
        if (route && route.children.length > 0 && route.children[0].params['id']) {
            id = route.children[0].params['id'];
        }
        if (!token || id.includes('edit') || url.includes('thankyou')) {
            // not logged in so return true
            return true;
        } else {
            this.router.navigate(['/dashboard']);
        }
        return false;
    }
}
