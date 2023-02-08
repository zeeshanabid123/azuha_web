import { tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProgressBarService } from '../services/progress-bar.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppConfig } from 'src/app/configs/app.config';

export class ProgressInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressBarService,
              private snackBar: MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    this.progressBarService.increase();
    return next
      .handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            if ((event.body && event.body.isError) || req.method === 'POST') {
              if (event.body.message && event.body.message !== '') {
                this.showSnackBar(event.body.message);
              }
            }
            this.progressBarService.decrease();
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err?.error?.exception ) {
              this.showSnackBar(err.error.exception);
            } else {
              this.showSnackBar('An error occurred. Please try again later');
            }
            // log error
          }
          this.progressBarService.decrease();
          return of(err);
        })
      );
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(name, 'OK', config);
  }
}
