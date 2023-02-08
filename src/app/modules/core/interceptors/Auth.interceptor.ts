import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from '../../account/shared/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private loginService: LoginService
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.includes('maps.googleapis.com')) {
            const token = this.loginService.getToken();
            if (token && token !== '' && token !== null) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        }

        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // do stuff with response if you want
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.loginService.logout();
                        // this.router.navigate( ['/unauthorized'] );
                        //  this.oidcSecurityService.authorize();
                    }
                }
            })
        );
    }
}
