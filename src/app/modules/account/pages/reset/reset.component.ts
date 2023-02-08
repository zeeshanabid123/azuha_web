import { Component, OnInit, Inject } from '@angular/core';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordModel } from '../../shared/login.model';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  public resetPasswordRequest: ResetPasswordModel = new ResetPasswordModel();
  constructor(@Inject(ROUTES_CONFIG) public routesConfig: any,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.resetPasswordRequest.forgotLinkKey = params['id'];
        }
      }
    );
  }

  onSubmit() {
    if (this.resetPasswordRequest.newPassword === this.resetPasswordRequest.confirmPassword) {
      this.loginService.changepassword(this.resetPasswordRequest).subscribe(x => {
        if (x.data) {
          this.router.navigate(['/account/login']);
        }
      });
    }
  }

}
