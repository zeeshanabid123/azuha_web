import { Component, OnInit, Inject, Renderer2, HostListener } from '@angular/core';
import { ROUTES_CONFIG, RoutesConfig } from 'src/app/configs/routes.config';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/account/shared/login.service';
import { Base64 } from 'js-base64';
import { HeaderService } from '../../services/header.service';
import { subscribeResponseModel } from 'src/app/modules/core/models/common.model';
import { LoginResponseModel } from 'src/app/modules/account/shared/login.model';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public user: LoginResponseModel;
  public isLoggedin = false;

  windowScrolled: boolean;
  public subscriberesponsemodel: subscribeResponseModel = new subscribeResponseModel();
  model: any = {};
  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    public router: Router,
    private loginService: LoginService,
    private headerService: HeaderService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private snackBar: MatSnackBar
  ) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {}
  goToAppSearch(item, breadcrumb): string {
    item.breadcrumb = breadcrumb;
    // this.appSearchingDataService.changeMessage(item);
    const urlId = Base64.encode(JSON.stringify(item));
    return urlId;
    // this.router.navigate([RoutesConfig.routes.appSearching.main + '/' + urlId]);
  }
  ngOnInit() {
    this.isLoggedin = this.loginService.isLoggedIn();
    this.user = this.loginService.getUserInformation();
  }

  onSubmit() {}
  showSnackBarSucess(): void {
    this.snackBar
      .open('Your Request has been sucesssfully submit!!  ', 'OK', { duration: 5000 })
      .onAction()
      .subscribe();
  }
}
